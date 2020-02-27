package com.msa.microserviceauth.application.impl

import com.msa.microserviceauth.application.SignInService
import com.msa.microserviceauth.config.JwtTokenProvider
import com.msa.microserviceauth.dto.SignInDto
import com.msa.microserviceauth.exception.UsernameNotFoundException
import com.msa.microserviceauth.exception.WrongPasswordException
import com.msa.microserviceauth.repostiory.UserRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder
import org.springframework.stereotype.Service

@Service
class SignInServiceImpl(
        @Autowired private val userRepository: UserRepository,
        @Autowired private val jwtTokenProvider: JwtTokenProvider,
        @Autowired private val bCryptPasswordEncoder: BCryptPasswordEncoder
): SignInService {
    override fun signIn(signInReq: SignInDto.SignInReq): SignInDto.SignInResult {
        val user = userRepository.findByUsername(signInReq.username)
        user?: throw UsernameNotFoundException("cannot find such user : ${signInReq.username}")

        if(!user.isRightPassword(bCryptPasswordEncoder, signInReq.password)) throw WrongPasswordException()

        val token = jwtTokenProvider.createToken(signInReq.username)

        return SignInDto.SignInResult(username = signInReq.username, token = token)
    }
}