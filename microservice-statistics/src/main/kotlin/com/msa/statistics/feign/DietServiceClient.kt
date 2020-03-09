package com.msa.statistics.feign

import com.msa.statistics.dto.DietDto
import org.springframework.cloud.openfeign.FeignClient
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestHeader
import org.springframework.web.bind.annotation.RequestParam

@FeignClient(name = "diet")
interface DietServiceClient {
    @GetMapping("/histories")
    fun getDietHistories(
            @RequestHeader("username") username: String,
            @RequestParam("period") period: Int
    ): List<DietDto.DietHistory>
}