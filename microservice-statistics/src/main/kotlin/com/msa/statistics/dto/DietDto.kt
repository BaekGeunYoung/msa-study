package com.msa.statistics.dto

import java.time.LocalDate

class DietDto {
    enum class DietOption {
        CAL,
        C,
        P,
        F
    }

    data class DietHistory(
            var id: Long? = null,
            var food: Food,
            var username: String,
            var date: LocalDate
    )

    data class Food(
            var id: Long? = null,
            var name: String,
            var calorie: Int,
            var carboHydrate: Int,
            var protein: Int,
            var fat: Int
    )
}