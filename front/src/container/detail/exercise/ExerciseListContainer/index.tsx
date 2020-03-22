import React, {useEffect, useState} from 'react';
import {ExercisePart} from "../../../../type";
import ExerciseList from "../../../../component/detail/exercise/ExerciseList";

interface Props {
    selectedPart: ExercisePart
}

const ExerciseListContainer = (props: Props) => {
    const [exercises, setExercises] = useState<Array<string>>([]);
    const [selectedExercise, setSelectedExercise] = useState<string>();

    useEffect(() => {
        //TODO : part에 해당하는 exercise 목록을 조회하는 api 보냄
        setExercises([
            "incline bench press",
            "decline bench press",
            "dumbell fly",
            "cable cross over"
        ])
    }, []);

    const handleClickExercise = (exercise: string) => {
        setSelectedExercise(exercise)
    };

    return (
        <div>
            <ExerciseList
                exercises={exercises}
                onClickExercise={handleClickExercise}
                selectedExercise={selectedExercise}
            />
        </div>
    )
};

export default ExerciseListContainer;