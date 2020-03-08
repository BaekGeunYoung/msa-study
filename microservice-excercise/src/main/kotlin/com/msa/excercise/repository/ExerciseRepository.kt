package com.msa.excercise.repository

import com.msa.excercise.domain.Exercise
import com.msa.excercise.domain.ExercisePart
import org.springframework.data.jpa.repository.JpaRepository

interface ExerciseRepository : JpaRepository<Exercise, Long> {
    fun findByPart(part: ExercisePart): List<Exercise>
}