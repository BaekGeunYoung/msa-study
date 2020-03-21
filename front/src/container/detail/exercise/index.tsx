import React from 'react';
import './index.scss';
import ExerciseDetailTable from "../../../component/detail/exercise";
import {ExerciseDetail} from "../../../type";

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
    return (
        <div className={"exercise-detail-container"}>
            <div className={"exercise-title"}>
                EXERCISE
            </div>
            <div>
                <ExerciseDetailTable
                    exerciseDetails={exerciseDetails}
                    totalVolume={9000}
                />
            </div>
        </div>
    )
};

export default ExerciseDetailContainer;