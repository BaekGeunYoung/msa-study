package com.msa.diet.application.impl

import com.msa.diet.application.DeleteDietHistoryService
import com.msa.diet.application.GetDietHistoryService
import com.msa.diet.exception.InvalidUserException
import com.msa.diet.repository.DietHistoryRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service

@Service
class DeleteDietHistoryServiceImpl(
        @Autowired private val dietHistoryRepository: DietHistoryRepository,
        @Autowired private val getDietHistoryService: GetDietHistoryService
): DeleteDietHistoryService {
    override fun delete(username: String, dietHistoryId: Long) {
        val dietHistory = getDietHistoryService.getHistory(dietHistoryId)
        if (!dietHistory.isOwnedBy(username)) throw InvalidUserException(username)

        dietHistoryRepository.delete(dietHistory)
    }
}