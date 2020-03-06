package com.msa.excercise.domain

import java.time.LocalDate
import javax.persistence.*

data class ExerciseHistory(
        @Id @GeneratedValue
        var id: Long? = null,

        @Column(name = "user_id")
        var userId: Long,

        @ManyToOne
        @JoinColumn(name = "exercise_id")
        var exercise: Exercise,

        @Column(name = "set")
        var set: Int,

        @Column(name = "rep")
        var rep: Int,

        @Column(name = "weight")
        var weight: Int,

        @Column(name = "date")
        var date: LocalDate
)