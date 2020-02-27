package com.msa.microserviceauth.application

import com.msa.microserviceauth.dto.SignInDto

interface SignInService {
    fun signIn(signInReq: SignInDto.SignInReq): SignInDto.SignInResult
}