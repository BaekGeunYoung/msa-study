package com.msa.diet.application

interface DeleteDietHistoryService {
    fun delete(username: String, dietHistoryId: Long)
}