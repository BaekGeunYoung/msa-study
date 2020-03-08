package com.msa.diet.application

import com.msa.diet.domain.DietHistory

interface GetDietHistoryService {
    fun getHistories(username: String): List<DietHistory>
    fun getHistory(historyId: Long): DietHistory
}