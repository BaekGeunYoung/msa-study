package com.msa.excercise

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.cloud.openfeign.EnableFeignClients

@SpringBootApplication
@EnableFeignClients
class ExcerciseApplication

fun main(args: Array<String>) {
    runApplication<ExcerciseApplication>(*args)
}
