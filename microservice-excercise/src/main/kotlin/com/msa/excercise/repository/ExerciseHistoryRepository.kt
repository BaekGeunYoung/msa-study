package com.msa.excercise.repository

import com.msa.excercise.domain.ExerciseHistory
import com.msa.excercise.domain.ExercisePart
import org.springframework.data.jpa.repository.JpaRepository
import java.time.LocalDate
import java.util.*

interface ExerciseHistoryRepository : JpaRepository<ExerciseHistory, Long> {
    fun findByUsername(username: String): List<ExerciseHistory>
    fun findByUsernameAndExercise_PartAndDateBetween(
            username: String,
            exercise_part: ExercisePart,
            date: LocalDate,
            date2: LocalDate
    ): List<ExerciseHistory>

    fun findByUsernameAndDateBetween(
            username: String,
            date: LocalDate,
            date2: LocalDate
    ): List<ExerciseHistory>

    fun findByUsernameAndDate(
            username: String,
            date: LocalDate
    ): List<ExerciseHistory>
}