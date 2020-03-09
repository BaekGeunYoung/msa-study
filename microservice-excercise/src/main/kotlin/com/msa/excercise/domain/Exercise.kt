package com.msa.excercise.domain

import javax.persistence.Column
import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.Id

@Entity
data class Exercise(
        @Id @GeneratedValue
        var id: Long? = null,

        @Column(name = "name")
        var name: String,

        @Column(name = "part")
        var part: ExercisePart
)