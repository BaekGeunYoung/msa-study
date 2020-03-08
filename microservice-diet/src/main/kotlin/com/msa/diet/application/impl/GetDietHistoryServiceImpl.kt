package com.msa.diet.application.impl

import com.msa.diet.application.GetDietHistoryService
import com.msa.diet.domain.DietHistory
import com.msa.diet.exception.CannotFindHistoryException
import com.msa.diet.repository.DietHistoryRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service

@Service
class GetDietHistoryServiceImpl(
        @Autowired private val dietHistoryRepository: DietHistoryRepository
): GetDietHistoryService {
    override fun getHistories(username: String): List<DietHistory> {
        return dietHistoryRepository.findByUsername(username)
    }

    override fun getHistory(historyId: Long): DietHistory {
        return dietHistoryRepository.findById(historyId)
                .orElseThrow { CannotFindHistoryException(historyId) }
    }
}