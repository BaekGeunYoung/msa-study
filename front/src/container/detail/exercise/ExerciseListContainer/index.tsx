import React, {ChangeEvent, useEffect, useReducer, useState} from 'react';
import {Exercise, ExercisePart} from "../../../../type";
import ExerciseList from "../../../../component/detail/exercise/ExerciseList";
import {getWithAuth} from "../../../../utils";
import {
    exerciseInputInitialState,
    exerciseInputReducer
} from "../../../../reducers/ExerciseReducer";

interface Props {
    selectedPart: ExercisePart
    handleClickBackButton: () => void
}

const ExerciseListContainer = (props: Props) => {
    const [exercises, setExercises] = useState<Array<Exercise>>([]);
    const [selectedExercise, setSelectedExercise] = useState<Exercise>();
    const [exerciseInputState, dispatchExerciseInput] = useReducer(exerciseInputReducer, exerciseInputInitialState);

    useEffect(() => {
        getWithAuth(`${process.env.REACT_APP_API_ENDPOINT}/exercise?part=${props.selectedPart}`)
            .then(response => response.data)
            .then(data => {
                setExercises(data)
            })
    }, []);

    const handleClickExercise = (exercise: Exercise) => {
        setSelectedExercise(exercise)
    };

    const handleClickAddExercise = () => {
        getWithAuth(`${process.env.REACT_APP_API_ENDPOINT}/exercise?part=${props.selectedPart}`)
            .then(response => {
                alert('added exercise successfully')
            })
    };

    const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        const action = {
            type: e.target.name,
            value: e.target.value
        };

        // @ts-ignore
        dispatchExerciseInput(action)
    };

    return (
        <div>
            <ExerciseList
                exercises={exercises}
                onClickExercise={handleClickExercise}
                onClickAddExercise={handleClickAddExercise}
                onClickBackButton={props.handleClickBackButton}
                selectedExercise={selectedExercise}
                weight={exerciseInputState.weight}
                reps={exerciseInputState.reps}
                sets={exerciseInputState.sets}
                onChangeInput={handleChangeInput}
            />
        </div>
    )
};

export default ExerciseListContainer;