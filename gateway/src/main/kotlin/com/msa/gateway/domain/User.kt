package com.msa.gateway.domain

import com.fasterxml.jackson.annotation.JsonIgnoreProperties
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder
import javax.persistence.*

@Entity
@JsonIgnoreProperties(value = ["password"])
data class User(
        @Id @GeneratedValue
        var id: Long? = null,

        @Column(name="username", unique = true, length = 200)
        var username: String,
        var password: String,
        var firstName: String,
        var lastName: String
) {
    constructor() : this(
            username = "",
            password = "",
            firstName = "",
            lastName = ""
    )
}