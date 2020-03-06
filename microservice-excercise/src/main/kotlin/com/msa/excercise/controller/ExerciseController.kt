package com.msa.excercise.controller

import com.msa.excercise.application.CreateHistoryService
import com.msa.excercise.application.GetExerciseService
import com.msa.excercise.application.GetHistoryService
import com.msa.excercise.domain.Exercise
import com.msa.excercise.domain.ExerciseHistory
import com.msa.excercise.domain.ExercisePart
import com.msa.excercise.dto.ExerciseDto
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*
import javax.validation.Valid

@RestController
class ExerciseController(
        @Autowired private val getExerciseService: GetExerciseService,
        @Autowired private val getHistoryService: GetHistoryService,
        @Autowired private val createHistoryService: CreateHistoryService
) {
    @GetMapping("/")
    fun getExercises(
            @RequestParam("part") part: ExercisePart,
            @RequestHeader("user_id") userId: Long
        ): ResponseEntity<List<Exercise>> {
        val exercises = getExerciseService.getExercises(part)
        return ResponseEntity(exercises, HttpStatus.OK)
    }

    @GetMapping("/{id}")
    fun getExercise(
            @PathVariable("id") exerciseId: Long,
            @RequestHeader("user_id") userId: Long
    ): ResponseEntity<Exercise> {
        val exercise = getExerciseService.getExercise(exerciseId)
        return ResponseEntity(exercise, HttpStatus.OK)
    }

    @PostMapping("/histories")
    fun createHistory(
            @RequestBody @Valid createHistoryReq: ExerciseDto.createHistoryReq,
            @RequestHeader("user_id") userId: Long
        ): ResponseEntity<ExerciseHistory> {
        val history = createHistoryService.createHistory(createHistoryReq)
        return ResponseEntity(history, HttpStatus.CREATED)
    }

    @GetMapping("/histories")
    fun getHistories(@RequestHeader("user_id") userId: Long): ResponseEntity<List<ExerciseHistory>> {
        val histories = getHistoryService.getHistories(userId)
        return ResponseEntity(histories, HttpStatus.OK)
    }
}