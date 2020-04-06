import React, {useEffect, useState} from 'react';
import './index.scss';
import ExerciseDetailTable from "../../../../component/detail/exercise/ExerciseDetailTable";
import {ExerciseDetail, ExercisePart} from "../../../../type";
import {ExerciseDetailViewMode} from "../../../../constants";
import ExercisePartList from "../../../../component/detail/exercise/ExercisePartList";
import ExerciseListContainer from "../ExerciseListContainer";
import {getWithAuth} from "../../../../utils";

const ExerciseDetailContainer = () => {
    const [dailyExercise, setDailyExercise] = useState<Array<ExerciseDetail>>();

    useEffect(() => {
        getWithAuth(`${process.env.REACT_APP_API_ENDPOINT}/exercise/today`)
            .then(response => response.data)
            .then(data => {
                setDailyExercise(data)
            });
    }, []);

    const [viewMode, setViewMode] = useState(ExerciseDetailViewMode.TABLE);
    const [selectedPart, setSelectedPart] = useState<ExercisePart>();

    const handleClickAddExerciseButton = () => {
        setViewMode(ExerciseDetailViewMode.LIST)
    };

    const handleClickExercisePart = (exercisePart: ExercisePart) => {
        setViewMode(ExerciseDetailViewMode.DETAIL)
        setSelectedPart(exercisePart)
    };

    const handleClickBackButton = () => {
        setViewMode(ExerciseDetailViewMode.TABLE)
    };

    const getTotalVolume = () => {
        return dailyExercise?.reduce((initValue, currValue, currIndex, array) => {
            return initValue + currValue.volume
        }, 0);
    };

    return (
        <div className={"exercise-detail-container"}>
            <div className={"exercise-title"}>
                EXERCISE
            </div>
            <div>
                {
                    viewMode === ExerciseDetailViewMode.TABLE ?
                    <ExerciseDetailTable
                        exerciseDetails={dailyExercise}
                        totalVolume={getTotalVolume()}
                        onClickAddExerciseButton={handleClickAddExerciseButton}
                    />
                    : viewMode === ExerciseDetailViewMode.LIST ?
                    <ExercisePartList
                        onClickExercisePart={handleClickExercisePart}
                        onClickBackButton={handleClickBackButton}
                    />
                    : <ExerciseListContainer
                            selectedPart={selectedPart!!}
                            handleClickBackButton={handleClickBackButton}
                        />
                }
            </div>
        </div>
    )
};

export default ExerciseDetailContainer;