export type ExerciseDetail = {
    name: string
    weight: number
    rep: number
    set: number
    volume: number
}

export type DietDetail = {
    name: string
    calorie: number
    C: number
    P: number
    F: number
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