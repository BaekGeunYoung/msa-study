package com.msa.excercise.application

import com.msa.excercise.domain.ExerciseHistory

interface GetHistoryService {
    fun getHistories(userId: Long): List<ExerciseHistory>
}