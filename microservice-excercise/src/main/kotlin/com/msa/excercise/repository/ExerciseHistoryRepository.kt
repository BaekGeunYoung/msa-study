package com.msa.excercise.repository

import com.msa.excercise.domain.ExerciseHistory
import org.springframework.data.jpa.repository.JpaRepository
import java.util.*

interface ExerciseHistoryRepository : JpaRepository<ExerciseHistory, Long> {
    fun findByUsername(username: String): List<ExerciseHistory>
}