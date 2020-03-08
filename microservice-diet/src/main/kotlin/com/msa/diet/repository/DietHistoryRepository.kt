package com.msa.diet.repository

import com.msa.diet.domain.DietHistory
import org.springframework.data.jpa.repository.JpaRepository

interface DietHistoryRepository : JpaRepository<DietHistory, Long> {
    fun findByUsername(username: String): List<DietHistory>
}