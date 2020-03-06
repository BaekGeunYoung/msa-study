package com.msa.excercise.dto

import com.msa.excercise.domain.ExerciseHistory

class ExerciseDto {
    data class createHistoryReq(
            var exerciseId: Long,
            var set: Int,
            var rep: Int,
            var weight: Int
    )
}