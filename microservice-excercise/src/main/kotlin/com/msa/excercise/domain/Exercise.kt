package com.msa.excercise.domain

import javax.persistence.*

@Entity
data class Exercise(
        @Id @GeneratedValue
        var id: Long? = null,

        @Column(name = "name")
        var name: String,

        @Column(name = "part")
        @Enumerated(EnumType.STRING)
        var part: ExercisePart
)