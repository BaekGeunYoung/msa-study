package com.msa.diet

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class DietApplication

fun main(args: Array<String>) {
    runApplication<DietApplication>(*args)
}
