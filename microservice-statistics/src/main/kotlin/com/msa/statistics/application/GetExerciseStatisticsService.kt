package com.msa.statistics.application

import com.msa.statistics.dto.ExerciseDto
import com.msa.statistics.dto.ExerciseStatistics

interface GetExerciseStatisticsService {
    fun get(username: String, part: ExerciseDto.ExercisePart, period: Int): List<ExerciseStatistics>
}