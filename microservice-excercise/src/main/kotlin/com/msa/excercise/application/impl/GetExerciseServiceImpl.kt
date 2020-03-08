package com.msa.excercise.application.impl

import com.msa.excercise.application.GetExerciseService
import com.msa.excercise.domain.Exercise
import com.msa.excercise.domain.ExercisePart
import com.msa.excercise.exception.CannotFindExerciseException
import com.msa.excercise.repository.ExerciseRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service

@Service
class GetExerciseServiceImpl(
        @Autowired private val exerciseRepository: ExerciseRepository
): GetExerciseService {
    override fun getExercises(part: ExercisePart): List<Exercise> {
        return exerciseRepository.findByPart(part)
    }

    override fun getExercise(exerciseId: Long): Exercise {
        return exerciseRepository.findById(exerciseId).orElseThrow {
            CannotFindExerciseException(exerciseId)
        }
    }
}