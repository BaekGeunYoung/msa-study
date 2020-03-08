package com.msa.diet.domain

import java.time.LocalDate
import javax.persistence.*

@Entity
data class DietHistory(
        @Id @GeneratedValue
        var id: Long? = null,
        @ManyToOne
        var food: Food,
        var username: String,
        var date: LocalDate
) {
    constructor() : this(food = Food(), username = "", date = LocalDate.now())

    fun isOwnedBy(username: String) = username == this.username
}