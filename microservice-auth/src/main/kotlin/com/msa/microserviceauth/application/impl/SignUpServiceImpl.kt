package com.msa.microserviceauth.application.impl

import com.msa.microserviceauth.application.SignUpService
import com.msa.microserviceauth.domain.User
import com.msa.microserviceauth.dto.SignUpDto
import com.msa.microserviceauth.exception.DuplicateUsernameException
import com.msa.microserviceauth.repostiory.UserRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder
import org.springframework.stereotype.Service

@Service
class SignUpServiceImpl(
        @Autowired private val userRepository: UserRepository,
        @Autowired private val bCryptPasswordEncoder: BCryptPasswordEncoder
): SignUpService {
    override fun signUp(signUpReq: SignUpDto.SignUpReq): User {
        if(userRepository.existsByUsername(signUpReq.username)) {
            throw DuplicateUsernameException(signUpReq.username)
        }

        val newUser = signUpReq.toEntity(bCryptPasswordEncoder)
        return userRepository.save(newUser)
    }
}