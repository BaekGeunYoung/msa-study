package com.msa.diet.domain

import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.Id

@Entity
data class Food(
        @Id @GeneratedValue
        var id: Long? = null,
        var name: String,
        var calorie: Int,
        var carboHydrate: Int,
        var protein: Int,
        var fat: Int
) {
        constructor() : this(name = "", calorie = 0, carboHydrate = 0, protein = 0, fat = 0)
}