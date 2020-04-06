export interface ExerciseInputState {
    weight: number
    reps: number
    sets: number
}

enum ExerciseInputEnum {
    WEIGHT = 'weight',
    REPS = 'reps',
    SETS = 'sets',
}

export interface ExerciseInputAction {
    type: ExerciseInputEnum
    value: string | number
}

export const exerciseInputReducer = (state: ExerciseInputState, action: ExerciseInputAction) => {
    return {
        ...state,
        [action.type] : action.value
    }
};

export const exerciseInputInitialState: ExerciseInputState = {
    weight: 0,
    reps: 0,
    sets: 0
};