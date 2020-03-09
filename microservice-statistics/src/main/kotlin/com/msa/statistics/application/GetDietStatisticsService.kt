package com.msa.statistics.application

import com.msa.statistics.dto.DietDto
import com.msa.statistics.dto.DietStatistics

interface GetDietStatisticsService {
    fun get(username: String, dietOption: DietDto.DietOption, period: Int): List<DietStatistics>
}