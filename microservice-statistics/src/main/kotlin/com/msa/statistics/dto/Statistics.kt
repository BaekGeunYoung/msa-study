package com.msa.statistics.dto

import java.time.LocalDate

data class ExerciseStatistics(
        var volume: Int,
        var date: LocalDate
) {
    companion object {
        private fun volumeOf(set: Int, rep: Int, weight: Int): Int {
            return set * rep * weight
        }

        fun of(exerciseHistory: ExerciseDto.ExerciseHistory): ExerciseStatistics {
            return ExerciseStatistics(
                    volumeOf(exerciseHistory.set, exerciseHistory.rep, exerciseHistory.weight),
                    exerciseHistory.date)
        }

        fun of(date: LocalDate, exerciseHistories: List<ExerciseDto.ExerciseHistory>): ExerciseStatistics {
            var totalVolume = 0
            for (exerciseHistory in exerciseHistories) {
                val volume = volumeOf(exerciseHistory.set, exerciseHistory.rep, exerciseHistory.weight)
                totalVolume += volume
            }

            return ExerciseStatistics(totalVolume, date)
        }
    }
}

data class DietStatistics(
        var quantity: Int,
        var date: LocalDate
) {
    companion object {
        fun of(date: LocalDate, dietHistories: List<DietDto.DietHistory>, dietOption: DietDto.DietOption): DietStatistics {
            var totalQuantity = 0
            for (dietHistory in dietHistories) {
                val quantity = when (dietOption) {
                    DietDto.DietOption.CAL -> dietHistory.food.calorie
                    DietDto.DietOption.C -> dietHistory.food.carboHydrate
                    DietDto.DietOption.P -> dietHistory.food.protein
                    DietDto.DietOption.F -> dietHistory.food.fat
                }
                totalQuantity += quantity
            }

            return DietStatistics(totalQuantity, date)
        }
    }
}