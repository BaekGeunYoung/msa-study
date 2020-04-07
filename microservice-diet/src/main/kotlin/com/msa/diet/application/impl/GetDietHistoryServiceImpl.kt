package com.msa.diet.application.impl

import com.msa.diet.application.GetDietHistoryService
import com.msa.diet.domain.DietHistory
import com.msa.diet.exception.CannotFindHistoryException
import com.msa.diet.repository.DietHistoryRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service
import java.time.LocalDate

@Service
class GetDietHistoryServiceImpl(
        @Autowired private val dietHistoryRepository: DietHistoryRepository
): GetDietHistoryService {
    override fun getHistories(username: String, period: Int): List<DietHistory> {
        val from = LocalDate.now().minusMonths(period.toLong())
        val to = LocalDate.now()
        return dietHistoryRepository.findByUsernameAndDateBetween(username, from ,to)
    }

    override fun getHistory(historyId: Long): DietHistory {
        return dietHistoryRepository.findById(historyId)
                .orElseThrow { CannotFindHistoryException(historyId) }
    }

    override fun getDailyHistories(username: String): List<DietHistory> {
        val today = LocalDate.now()
        return dietHistoryRepository.findByUsernameAndDate(username, today)
    }
}