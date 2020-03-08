package com.msa.excercise.feign

import com.msa.excercise.dto.UserDto
import org.springframework.cloud.openfeign.FeignClient
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestHeader

@FeignClient(name = "auth")
interface UserServiceClient {
    @GetMapping("/my_page")
    fun getUser(@RequestHeader("username") username: String): UserDto.GetUserRes
}