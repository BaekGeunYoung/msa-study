package com.msa.gateway

import com.netflix.zuul.ZuulFilter
import com.netflix.zuul.context.RequestContext
import org.springframework.cloud.netflix.zuul.filters.support.FilterConstants
import org.springframework.stereotype.Component

@Component
class ValidateTokenFilter : ZuulFilter() {
    override fun run(): Any? {
        val context = RequestContext.getCurrentContext()
        context.addZuulRequestHeader("Custom", "abc")
        return null
    }

    override fun shouldFilter(): Boolean {
        val context = RequestContext.getCurrentContext()
        val request = context.request

        val authHeader = request.getHeader("Authorization")

        authHeader?: return false
        return true
    }

    override fun filterType(): String {
        return FilterConstants.PRE_TYPE
    }

    override fun filterOrder(): Int {
        return 2
    }

}