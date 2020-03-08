package com.msa.diet.repository

import com.msa.diet.domain.Food
import org.springframework.data.jpa.repository.JpaRepository

interface FoodRepository : JpaRepository<Food, Long> {
    fun findByNameContaining(q: String): List<Food>
}