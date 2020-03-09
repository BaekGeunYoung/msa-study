package com.msa.statistics.application.impl

import com.msa.statistics.application.GetDietStatisticsService
import com.msa.statistics.dto.DietDto
import com.msa.statistics.dto.DietStatistics
import com.msa.statistics.feign.DietServiceClient
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service
import java.time.LocalDate

@Service
class GetDietStatisticsServiceImpl(
        @Autowired private val dietServiceClient: DietServiceClient
): GetDietStatisticsService {
    override fun get(username: String, dietOption: DietDto.DietOption, period: Int): List<DietStatistics> {
        val dietHistories = dietServiceClient.getDietHistories(username, period)

        val dietStatistics = when(dietOption) {
            DietDto.DietOption.CAL -> dietHistories.map { DietStatistics(it.food.calorie, it.date) }.toMutableList()
            DietDto.DietOption.C -> dietHistories.map { DietStatistics(it.food.carboHydrate, it.date) }.toMutableList()
            DietDto.DietOption.P -> dietHistories.map { DietStatistics(it.food.protein, it.date) }.toMutableList()
            DietDto.DietOption.F -> dietHistories.map { DietStatistics(it.food.fat, it.date) }.toMutableList()
        }

        val from = LocalDate.now().minusMonths(period.toLong())
        val to = LocalDate.now()

        from.datesUntil(to).forEach {
            var contains = false
            for(dietStat in dietStatistics) {
                if(dietStat.date == it) {
                    contains = true
                    break
                }
            }
            if(!contains) {
                dietStatistics.add(DietStatistics(0, it))
            }
        }

        dietStatistics.sortByDescending { it.date }

        return dietStatistics
    }
}