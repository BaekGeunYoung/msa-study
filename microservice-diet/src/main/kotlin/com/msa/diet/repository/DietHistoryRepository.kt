package com.msa.diet.repository

import com.msa.diet.domain.DietHistory
import org.springframework.data.jpa.repository.JpaRepository
import java.time.LocalDate

interface DietHistoryRepository : JpaRepository<DietHistory, Long> {
    fun findByUsername(username: String): List<DietHistory>
    fun findByUsernameAndDateBetween(username: String, date: LocalDate, date2: LocalDate): List<DietHistory>
    fun findByUsernameAndDate(username: String, date: LocalDate): List<DietHistory>
}