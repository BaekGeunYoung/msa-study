package com.msa.excercise.application.impl

import com.msa.excercise.application.CreateHistoryService
import com.msa.excercise.application.GetExerciseService
import com.msa.excercise.domain.ExerciseHistory
import com.msa.excercise.dto.ExerciseDto
import com.msa.excercise.repository.ExerciseHistoryRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service

@Service
class CreateHistoryServiceImpl(
        @Autowired private val exerciseHistoryRepository: ExerciseHistoryRepository,
        @Autowired private val getExerciseService: GetExerciseService
): CreateHistoryService {
    override fun createHistory(CreateHistoryReq: ExerciseDto.CreateHistoryReq, username: String): ExerciseHistory {
        val exercise = getExerciseService.getExercise(CreateHistoryReq.exerciseId)

        val history = ExerciseHistory(
                username = username,
                exercise = exercise,
                set = CreateHistoryReq.set,
                rep = CreateHistoryReq.rep,
                weight = CreateHistoryReq.weight,
                date = CreateHistoryReq.date
        )

        return exerciseHistoryRepository.save(history)
    }
}