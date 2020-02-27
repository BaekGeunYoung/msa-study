package com.msa.microserviceauth.application

import com.msa.microserviceauth.domain.User
import com.msa.microserviceauth.dto.SignUpDto

interface SignUpService {
    fun signUp(signUpReq: SignUpDto.SignUpReq): User
}