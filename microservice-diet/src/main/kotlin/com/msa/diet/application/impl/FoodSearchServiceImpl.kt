package com.msa.diet.application.impl

import com.msa.diet.application.FoodSearchService
import com.msa.diet.domain.Food
import com.msa.diet.exception.CannotFindFoodException
import com.msa.diet.repository.FoodRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service

@Service
class FoodSearchServiceImpl(
        @Autowired private val foodRepository: FoodRepository
): FoodSearchService {
    override fun search(q: String): List<Food> {
        return foodRepository.findByNameContaining(q)
    }

    override fun getFood(foodId: Long): Food {
        return foodRepository.findById(foodId)
                .orElseThrow { CannotFindFoodException(foodId) }
    }
}