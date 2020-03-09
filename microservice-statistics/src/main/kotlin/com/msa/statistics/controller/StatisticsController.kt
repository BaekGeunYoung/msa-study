package com.msa.statistics.controller

import com.msa.statistics.application.GetDietStatisticsService
import com.msa.statistics.application.GetExerciseStatisticsService
import com.msa.statistics.dto.DietDto
import com.msa.statistics.dto.ExerciseDto
import com.msa.statistics.dto.ExerciseStatistics
import com.msa.statistics.dto.DietStatistics
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestHeader
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController

@RestController
class StatisticsController(
        @Autowired private val getExerciseStatisticsService: GetExerciseStatisticsService,
        @Autowired private val getDietStatisticsService: GetDietStatisticsService
) {
    @GetMapping("/exercise")
    fun exercise(
            @RequestHeader("username") username: String,
            @RequestParam("part") part: ExerciseDto.ExercisePart,
            @RequestParam("period") period: Int
    ): ResponseEntity<List<ExerciseStatistics>> {
        val statistics = getExerciseStatisticsService.get(username, part, period)
        return ResponseEntity(statistics, HttpStatus.OK)
    }

    @GetMapping("/diet")
    fun diet(
            @RequestHeader("username") username: String,
            @RequestParam("option") dietOption: DietDto.DietOption,
            @RequestParam("period") period: Int
    ): ResponseEntity<List<DietStatistics>> {
        val statistics = getDietStatisticsService.get(username, dietOption, period)
        return ResponseEntity(statistics, HttpStatus.OK)
    }
}