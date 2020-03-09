package com.msa.diet.application

import com.msa.diet.domain.DietHistory

interface GetDietHistoryService {
    fun getHistories(username: String, period: Int): List<DietHistory>
    fun getHistory(historyId: Long): DietHistory
}