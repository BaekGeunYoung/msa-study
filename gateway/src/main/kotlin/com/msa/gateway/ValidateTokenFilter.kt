package com.msa.gateway

import com.netflix.zuul.ZuulFilter
import com.netflix.zuul.context.RequestContext
import io.jsonwebtoken.Claims
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.cloud.netflix.zuul.filters.support.FilterConstants
import org.springframework.stereotype.Component

@Component
class ValidateTokenFilter(
        @Autowired private val jwtTokenProvider: JwtTokenProvider
) : ZuulFilter() {
    override fun run(): Any? {
        val authHeader = getAuthHeader()
        val token = jwtTokenProvider.getToken(authHeader!!)

        val claims = jwtTokenProvider.resolveToken(token)
        if(jwtTokenProvider.isValid(claims)) {
            val username = claims.subject

            val context = RequestContext.getCurrentContext()
            context.addZuulRequestHeader("username", username)
        }

        return null
    }

    override fun shouldFilter(): Boolean {
        val authHeader = getAuthHeader()

        authHeader?.let {
            return authHeader.startsWith("Bearer ")
        }

        return false
    }

    private fun getAuthHeader(): String? {
        val context = RequestContext.getCurrentContext()
        val request = context.request

        return request.getHeader("Authorization")
    }

    override fun filterType(): String {
        return FilterConstants.PRE_TYPE
    }

    override fun filterOrder(): Int {
        return 2
    }
}