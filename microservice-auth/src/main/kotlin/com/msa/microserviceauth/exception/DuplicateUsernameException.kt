package com.msa.microserviceauth.exception

import java.lang.RuntimeException

class DuplicateUsernameException(val username: String): RuntimeException()