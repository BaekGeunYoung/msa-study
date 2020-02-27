package com.msa.microserviceauth.controller

import com.msa.microserviceauth.application.MyInfoService
import com.msa.microserviceauth.application.SignInService
import com.msa.microserviceauth.application.SignUpService
import com.msa.microserviceauth.domain.User
import com.msa.microserviceauth.dto.MyPageDto
import com.msa.microserviceauth.dto.SignInDto
import com.msa.microserviceauth.dto.SignUpDto
import org.slf4j.Logger
import org.slf4j.LoggerFactory
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*
import javax.validation.Valid

@RestController
class UserController(
        @Autowired private val signUpService: SignUpService,
        @Autowired private val signInService: SignInService,
        @Autowired private val myInfoService: MyInfoService
) {
    @PostMapping("/register")
    fun register(@RequestBody @Valid signUpReq: SignUpDto.SignUpReq): ResponseEntity<User> {
        val user = signUpService.signUp(signUpReq)
        return ResponseEntity(user, HttpStatus.CREATED)
    }

    @PostMapping("/login")
    fun login(@RequestBody @Valid signInReq: SignInDto.SignInReq): ResponseEntity<SignInDto.SignInResult> {
        val signInResult = signInService.signIn(signInReq)
        return ResponseEntity(signInResult, HttpStatus.OK)
    }

    @GetMapping("/my_page")
    fun myPage(@RequestHeader("username") username: String): ResponseEntity<MyPageDto.MyPageResult> {
        val userInfo = myInfoService.myInfo(username)

        val myPageResult = MyPageDto.MyPageResult(userInfo)
        return ResponseEntity(myPageResult, HttpStatus.OK)
    }
}