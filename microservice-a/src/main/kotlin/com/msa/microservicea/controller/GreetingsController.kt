package com.msa.microservicea.controller

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestHeader
import org.springframework.web.bind.annotation.RestController

@RestController
class GreetingsController {
    @GetMapping("/greeting")
    fun greetings(@RequestHeader("username") username: String) = username
}