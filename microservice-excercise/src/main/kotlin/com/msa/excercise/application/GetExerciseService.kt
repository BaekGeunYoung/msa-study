package com.msa.excercise.application

import com.msa.excercise.domain.Exercise
import com.msa.excercise.domain.ExercisePart

interface GetExerciseService {
    fun getExercises(part: ExercisePart): List<Exercise>
    fun getExercise(exerciseId: Long): Exercise
}