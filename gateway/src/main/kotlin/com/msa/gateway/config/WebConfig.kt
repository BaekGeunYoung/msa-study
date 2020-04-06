package com.msa.gateway.config

import org.springframework.beans.factory.annotation.Value
import org.springframework.context.annotation.Configuration
import org.springframework.web.servlet.config.annotation.CorsRegistry
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer

@Configuration
class WebConfig : WebMvcConfigurer {
    @Value("\${DEPLOY_HOST:127.0.0.1}")
    private val deployHost: String = ""

    @Value("\${DEPLOY_PORT:80}")
    private val deployPort: String = ""

    override fun addCorsMappings(registry: CorsRegistry) {
        registry.addMapping("/**")
                .allowedOrigins("http://localhost:3000", "$deployHost:$deployPort", deployHost)
                .allowedMethods("GET", "POST", "PUT", "DELETE")
                .allowedHeaders("authorization", "content-type")
                .exposedHeaders("authorization")
                .maxAge(3600)

        println("deploy host : $deployHost")
        println("deploy port : $deployPort")
    }
}