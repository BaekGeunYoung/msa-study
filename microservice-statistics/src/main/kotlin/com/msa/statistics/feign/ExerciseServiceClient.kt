package com.msa.statistics.feign

import com.msa.statistics.dto.ExerciseDto
import org.springframework.cloud.openfeign.FeignClient
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestHeader
import org.springframework.web.bind.annotation.RequestParam

@FeignClient(name = "exercise")
interface ExerciseServiceClient {
    @GetMapping("/histories")
    fun getExerciseHistories(
            @RequestHeader("username") username: String,
            @RequestParam("part") part: ExerciseDto.ExercisePart,
            @RequestParam("period") period: Int
    ): List<ExerciseDto.ExerciseHistory>
}
