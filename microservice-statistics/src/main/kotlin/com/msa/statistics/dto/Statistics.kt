package com.msa.statistics.dto

import java.time.LocalDate

data class ExerciseStatistics(
        var volume: Int,
        var date: LocalDate
) {
    companion object {
        fun volumeOf(set: Int, rep: Int, weight: Int): Int {
            return set * rep * weight
        }

        fun of(exerciseHistory: ExerciseDto.ExerciseHistory): ExerciseStatistics {
            return ExerciseStatistics(
                    volumeOf(exerciseHistory.set, exerciseHistory.rep, exerciseHistory.weight),
                    exerciseHistory.date)
        }
    }
}

data class DietStatistics(
        var quantity: Int,
        var date: LocalDate
)