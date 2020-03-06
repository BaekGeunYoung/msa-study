package com.msa.excercise.application

import com.msa.excercise.domain.ExerciseHistory
import com.msa.excercise.dto.ExerciseDto

interface CreateHistoryService {
    fun createHistory(createHistoryReq: ExerciseDto.createHistoryReq): ExerciseHistory
}