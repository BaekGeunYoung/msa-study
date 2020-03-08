package com.msa.diet.dto

import java.time.LocalDate

class DietHistoryDto {
    data class CreateDietHistoryReq(
            val foodId: Long,
            val date: LocalDate
    )
}