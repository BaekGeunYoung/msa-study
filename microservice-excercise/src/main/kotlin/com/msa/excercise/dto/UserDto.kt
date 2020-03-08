package com.msa.excercise.dto


class UserDto {
    data class GetUserRes(
        val userInfo: User
    )

    data class User(
            var id: Long? = null,
            var username: String,
            var firstName: String,
            var lastName: String
    )
}