package com.msa.excercise.dto

import java.time.LocalDate

class ExerciseDto {
    data class CreateHistoryReq(
            var exerciseId: Long,
            var set: Int,
            var rep: Int,
            var weight: Int,
            var date: LocalDate
    )
}