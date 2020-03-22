import React, {useState} from 'react';
import './index.scss';
import ExerciseDetailTable from "../../../../component/detail/exercise/ExerciseDetailTable";
import {ExerciseDetail, ExercisePart} from "../../../../type";
import {ExerciseDetailViewMode} from "../../../../constants";
import ExercisePartList from "../../../../component/detail/exercise/ExercisePartList";
import ExerciseListContainer from "../ExerciseListContainer";

const ExerciseDetailContainer = () => {
    const exerciseDetails: Array<ExerciseDetail> = [
        {
            name: "one",
            weight: 75,
            rep: 10,
            set: 4,
            volume: 3000
        },
        {
            name: "two",
            weight: 75,
            rep: 10,
            set: 4,
            volume: 3000
        },
        {
            name: "three",
            weight: 75,
            rep: 10,
            set: 4,
            volume: 3000
        }
    ];
    const [viewMode, setViewMode] = useState(ExerciseDetailViewMode.TABLE);
    const [selectedPart, setSelectedPart] = useState<ExercisePart>();

    const handleClickAddExerciseButton = () => {
        setViewMode(ExerciseDetailViewMode.LIST)
    };

    const handleClickExercisePart = (exercisePart: ExercisePart) => {
        setViewMode(ExerciseDetailViewMode.DETAIL)
        setSelectedPart(exercisePart)
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
                        exerciseDetails={exerciseDetails}
                        totalVolume={9000}
                        onClickAddExerciseButton={handleClickAddExerciseButton}
                    />
                    : viewMode === ExerciseDetailViewMode.LIST ?
                    <ExercisePartList
                        onClickExercisePart={handleClickExercisePart}
                    />
                    : <ExerciseListContainer
                            selectedPart={selectedPart!!}
                        />
                }
            </div>
        </div>
    )
};

export default ExerciseDetailContainer;