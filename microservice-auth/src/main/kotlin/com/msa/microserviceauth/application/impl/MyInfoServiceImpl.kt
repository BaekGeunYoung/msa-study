package com.msa.microserviceauth.application.impl

import com.msa.microserviceauth.application.MyInfoService
import com.msa.microserviceauth.domain.User
import com.msa.microserviceauth.repostiory.UserRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service

@Service
class MyInfoServiceImpl(
        @Autowired private val userRepository: UserRepository
): MyInfoService {
    override fun myInfo(username: String): User {
        return userRepository.findByUsername(username)!!
    }
}