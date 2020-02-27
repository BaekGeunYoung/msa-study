package com.msa.microserviceauth.dto

class SignInDto {
    data class SignInReq(
            val username: String,
            val password: String
    )

    data class SignInResult(
            val username: String,
            val token: String
    )
}