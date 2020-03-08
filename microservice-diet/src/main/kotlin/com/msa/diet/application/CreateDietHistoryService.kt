package com.msa.diet.application

import com.msa.diet.domain.DietHistory
import com.msa.diet.dto.DietHistoryDto

interface CreateDietHistoryService {
    fun create(username: String, createDietHistoryReq: DietHistoryDto.CreateDietHistoryReq): DietHistory
}