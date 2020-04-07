package com.msa.excercise.application.impl

import com.msa.excercise.application.GetHistoryService
import com.msa.excercise.domain.ExerciseHistory
import com.msa.excercise.domain.ExercisePart
import com.msa.excercise.feign.UserServiceClient
import com.msa.excercise.repository.ExerciseHistoryRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service
import java.time.LocalDate

@Service
class GetHistoryServiceImpl(
        @Autowired private val exerciseHistoryRepository: ExerciseHistoryRepository
): GetHistoryService {
    override fun getHistories(username: String, part: ExercisePart, period: Int): List<ExerciseHistory> {
        val from = LocalDate.now().minusMonths(period.toLong())
        val to = LocalDate.now()

        return if(part == ExercisePart.ALL)
            exerciseHistoryRepository.findByUsernameAndDateBetween(username, from, to)
        else exerciseHistoryRepository.findByUsernameAndExercise_PartAndDateBetween(username, part, from, to)
    }

    override fun getDailyHistories(username: String): List<ExerciseHistory> {
        val today = LocalDate.now()
        return exerciseHistoryRepository.findByUsernameAndDate(username, today)
    }
}