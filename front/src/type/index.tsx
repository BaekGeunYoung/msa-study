export type ExerciseDetail = {
    weight: number
    rep: number
    set: number
    volume: number
    exercise: Exercise
}

export type DietDetail = {
    id: number
    food: Food
}

export enum ExercisePart {
    CHEST = "CHEST",
    BACK = "BACK",
    LEG = "LEG",
    SHOULDER = "SHOULDER",
    BICEPS = "BICEPS",
    TRICEPS = "TRICEPS",
    ABDOMEN = "ABDOMEN"
}

export type DietStatistics = {
    date: string
    quantity: number
}

export type Food = {
    id: number,
    name: string,
    calorie: number,
    carboHydrate: number,
    protein: number,
    fat: number
}

export type TotalDietDetail = {
    name: string,
    calorie: number | undefined,
    carboHydrate: number | undefined,
    protein: number | undefined,
    fat: number | undefined
}

export type ExerciseStatistics = {
    date: string
    volume: number
}

export type Exercise = {
    id: number,
    name: string,
    part: ExercisePart
}

export enum DietStatisticsType {
    CAL = "CAL",
    C = "C",
    P = "P",
    F = "F"
}

export enum ExerciseStatisticsType {
    CHEST = "CHEST",
    BACK = "BACK",
    LEG = "LEG",
    SHOULDER = "SHOULDER",
    BICEPS = "BICEPS",
    TRICEPS = "TRICEPS",
    ABDOMEN = "ABDOMEN",
    ALL = "ALL"
}