package com.msa.microserviceauth

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class MicroserviceAuthApplication

fun main(args: Array<String>) {
    runApplication<MicroserviceAuthApplication>(*args)
}
