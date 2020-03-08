package com.msa.excercise.application

import com.msa.excercise.domain.ExerciseHistory

interface GetHistoryService {
    fun getHistories(username: String): List<ExerciseHistory>
}