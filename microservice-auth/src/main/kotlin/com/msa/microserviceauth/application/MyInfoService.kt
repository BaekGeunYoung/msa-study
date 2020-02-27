package com.msa.microserviceauth.application

import com.msa.microserviceauth.domain.User

interface MyInfoService {
    fun myInfo(username: String): User
}