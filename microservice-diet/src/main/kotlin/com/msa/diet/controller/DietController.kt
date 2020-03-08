package com.msa.diet.controller

import com.msa.diet.application.CreateDietHistoryService
import com.msa.diet.application.DeleteDietHistoryService
import com.msa.diet.application.FoodSearchService
import com.msa.diet.application.GetDietHistoryService
import com.msa.diet.domain.DietHistory
import com.msa.diet.domain.Food
import com.msa.diet.dto.DietHistoryDto
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*
import javax.validation.Valid

@RestController
class DietController(
        @Autowired private val foodSearchService: FoodSearchService,
        @Autowired private val createDietHistoryService: CreateDietHistoryService,
        @Autowired private val deleteDietHistoryService: DeleteDietHistoryService,
        @Autowired private val getDietHistoryService: GetDietHistoryService
) {
    @GetMapping("/")
    fun search(
            @RequestHeader("username") username: String,
            @RequestParam("q") q: String
    ): ResponseEntity<List<Food>> {
        val foods = foodSearchService.search(q)
        return ResponseEntity(foods, HttpStatus.OK)
    }

    @PostMapping("/")
    fun createDietHistory(
            @RequestHeader("username") username: String,
            @RequestBody @Valid createDietHistoryReq: DietHistoryDto.CreateDietHistoryReq
    ): ResponseEntity<DietHistory> {
        val dietHistory = createDietHistoryService.create(username, createDietHistoryReq)
        return ResponseEntity(dietHistory, HttpStatus.CREATED)
    }

    @DeleteMapping("/{id}")
    fun deleteDietHistory(
            @RequestHeader("username") username: String,
            @PathVariable("id") dietHistoryId: Long
    ): ResponseEntity<Unit> {
        deleteDietHistoryService.delete(username, dietHistoryId)
        return ResponseEntity(HttpStatus.NO_CONTENT)
    }

    @GetMapping("/histories")
    fun getDietHistories(
            @RequestHeader("username") username: String
    ): ResponseEntity<List<DietHistory>> {
        val histories = getDietHistoryService.getHistories(username)
        return ResponseEntity(histories, HttpStatus.OK)
    }
}