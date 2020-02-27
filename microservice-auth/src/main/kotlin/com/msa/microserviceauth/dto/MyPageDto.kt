package com.msa.microserviceauth.dto

import com.msa.microserviceauth.domain.User

class MyPageDto {
    data class MyPageResult(
            val userInfo: User
    )
}