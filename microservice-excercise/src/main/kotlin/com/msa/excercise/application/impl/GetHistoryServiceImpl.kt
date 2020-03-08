package com.msa.excercise.application.impl

import com.msa.excercise.application.GetHistoryService
import com.msa.excercise.domain.ExerciseHistory
import com.msa.excercise.feign.UserServiceClient
import com.msa.excercise.repository.ExerciseHistoryRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service

@Service
class GetHistoryServiceImpl(
        @Autowired private val userServiceClient: UserServiceClient,
        @Autowired private val exerciseHistoryRepository: ExerciseHistoryRepository
): GetHistoryService {
    override fun getHistories(username: String): List<ExerciseHistory> {
        val userRes = userServiceClient.getUser(username)

        return exerciseHistoryRepository.findByUsername(username)
    }
}