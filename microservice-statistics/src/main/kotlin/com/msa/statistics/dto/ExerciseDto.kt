package com.msa.statistics.dto

import java.time.LocalDate

class ExerciseDto {
    enum class ExercisePart {
        CHEST,
        BACK,
        SHOULDER,
        BICEPS,
        TRICEPS,
        ABDOMEN,
        ALL
    }

    data class ExerciseHistory(
            var id: Long? = null,
            var username: String,
            var set: Int,
            var rep: Int,
            var weight: Int,
            var date: LocalDate
    )

    data class Exercise(
            var id: Long? = null,
            var name: String,
            var part: ExercisePart
    )
}