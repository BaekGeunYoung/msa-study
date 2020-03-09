package com.msa.excercise.application

import com.msa.excercise.domain.ExerciseHistory
import com.msa.excercise.domain.ExercisePart

interface GetHistoryService {
    fun getHistories(username: String, part: ExercisePart, period: Int): List<ExerciseHistory>
}