package com.msa.gateway

import com.msa.gateway.exception.JwtValidationException
import io.jsonwebtoken.*
import org.springframework.beans.factory.annotation.Value
import org.springframework.stereotype.Component
import java.util.*

@Component
class JwtTokenProvider() {
    @Value("\${jwt.secretKey}")
    private lateinit var secretKey: String
    private val validityInMilliseconds: Long = 36000000


    fun getToken(authHeader : String): String {
        return authHeader.substring(7, authHeader.length)
    }

    fun resolveToken(token: String): Claims {
        try{
            return Jwts.parser()
                    .setSigningKey(secretKey)
                    .parseClaimsJws(token)
                    .body
        } catch (e: Exception) {
            throw JwtValidationException(e.message)
        }
    }

    fun isValid(claims: Claims): Boolean {
        return !claims.expiration.before(Date())
    }
}