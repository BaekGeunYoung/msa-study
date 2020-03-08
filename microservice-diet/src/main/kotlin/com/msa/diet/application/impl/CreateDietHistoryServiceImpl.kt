package com.msa.diet.application.impl

import com.msa.diet.application.CreateDietHistoryService
import com.msa.diet.application.FoodSearchService
import com.msa.diet.domain.DietHistory
import com.msa.diet.dto.DietHistoryDto
import com.msa.diet.repository.DietHistoryRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service

@Service
class CreateDietHistoryServiceImpl(
        @Autowired private val dietHistoryRepository: DietHistoryRepository,
        @Autowired private val foodSearchService: FoodSearchService
): CreateDietHistoryService {
    override fun create(username: String, createDietHistoryReq: DietHistoryDto.CreateDietHistoryReq): DietHistory {
        val food = foodSearchService.getFood(createDietHistoryReq.foodId)
        val dietHistory = DietHistory(
                food = food,
                username = username,
                date = createDietHistoryReq.date
        )

        return dietHistoryRepository.save(dietHistory)
    }
}