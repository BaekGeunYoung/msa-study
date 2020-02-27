package com.msa.gateway.exception

import java.lang.RuntimeException

class JwtValidationException(override val message: String?) : RuntimeException()