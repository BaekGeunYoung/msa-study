package com.msa.microserviceauth.exception

import java.lang.RuntimeException

class UsernameNotFoundException(val username: String): RuntimeException()