package com.msa.diet.application

import com.msa.diet.domain.Food

interface FoodSearchService {
    fun search(q: String): List<Food>
    fun getFood(foodId: Long): Food
}