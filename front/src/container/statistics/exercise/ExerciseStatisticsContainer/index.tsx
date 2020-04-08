import React, {ChangeEvent, useEffect, useState} from 'react';
import ExerciseStatisticsForm from "../../../../component/statistics/exercise/ExerciseStatisticsForm";
import {ExerciseStatistics, ExerciseStatisticsType} from "../../../../type";
import './index.scss';
import {getWithAuth} from "../../../../utils";

const ExerciseStatisticsContainer = () => {
    const [exerciseStatistics, setExerciseStatistics] = useState<Array<ExerciseStatistics>>();
    const [period, setPeriod] = useState(1);
    const [type, setType] = useState<ExerciseStatisticsType>(ExerciseStatisticsType.ALL);

    useEffect(() => {
        getWithAuth(`${process.env.REACT_APP_API_ENDPOINT}/statistics/exercise?period=${period}&part=${type}`)
            .then(response => response.data)
            .then(data => {
                setExerciseStatistics(data)
            })
    }, []);

    const handleChangePeriod = (e: ChangeEvent<HTMLInputElement>) => {
        setPeriod((e.target as any).value)
    };

    const handleChangeType = (e: ChangeEvent<HTMLInputElement>) => {
        setType((e.target as any).value)
    };

    return (
        <div className={"exercise-statistics-container"}>
            <ExerciseStatisticsForm
                onChangePeriod={handleChangePeriod}
                onChangeType={handleChangeType}
                period={period}
                data={exerciseStatistics}
                type={type}
            />
        </div>
    )
};

export default ExerciseStatisticsContainer;