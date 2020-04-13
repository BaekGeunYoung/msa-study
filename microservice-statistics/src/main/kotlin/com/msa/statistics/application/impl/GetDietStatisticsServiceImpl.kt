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

        val groupByDate = dietHistories.groupBy { it.date }

        val from = LocalDate.now().minusMonths(period.toLong())
        val to = LocalDate.now()

        val statistics = mutableListOf<DietStatistics>()

        from.datesUntil(to).forEach {
            var contains = false
            val keys = groupByDate.keys.iterator()

            while(keys.hasNext()) {
                val targetDate = keys.next()
                if(targetDate == it) {
                    contains = true
                    statistics.add(DietStatistics.of(targetDate, groupByDate[targetDate] ?: error("no such key"), dietOption))
                    break
                }
            }
            if(!contains) {
                statistics.add(DietStatistics(0, it))
            }
        }

        statistics.sortByDescending { it.date }

        return statistics
    }
}