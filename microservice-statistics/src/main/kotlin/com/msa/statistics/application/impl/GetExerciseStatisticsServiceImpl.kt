package com.msa.statistics.application.impl

import com.msa.statistics.application.GetExerciseStatisticsService
import com.msa.statistics.dto.ExerciseDto
import com.msa.statistics.dto.ExerciseStatistics
import com.msa.statistics.feign.ExerciseServiceClient
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service
import java.time.LocalDate

@Service
class GetExerciseStatisticsServiceImpl(
        @Autowired private val exerciseServiceClient: ExerciseServiceClient
): GetExerciseStatisticsService {
    override fun get(username: String, part: ExerciseDto.ExercisePart, period: Int): List<ExerciseStatistics> {
        val exerciseHistories = exerciseServiceClient.getExerciseHistories(username, part, period)

        val from = LocalDate.now().minusMonths(period.toLong())
        val to = LocalDate.now()

        val statistics = mutableListOf<ExerciseStatistics>()

        from.datesUntil(to).forEach {
            var contains = false
            for (exerciseHistory in exerciseHistories) {
                if(exerciseHistory.date == it) {
                    contains = true
                    statistics.add(ExerciseStatistics.of(exerciseHistory))
                    break
                }
            }
            if(!contains) {
                statistics.add(ExerciseStatistics(0, it))
            }
        }

        statistics.sortByDescending { it.date }

        return statistics
    }
}