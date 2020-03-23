import React, {ChangeEvent, useEffect, useState} from 'react';
import ExerciseStatisticsForm from "../../../../component/statistics/exercise/ExerciseStatisticsForm";
import {ExerciseStatistics, ExerciseStatisticsType} from "../../../../type";
import './index.scss';

const ExerciseStatisticsContainer = () => {
    const [exerciseStatistics, setExerciseStatistics] = useState<Array<ExerciseStatistics>>();
    const [period, setPeriod] = useState(1);
    const [type, setType] = useState<ExerciseStatisticsType>(ExerciseStatisticsType.ALL);

    useEffect(() => {
        //TODO exercise에 대한 통계 정보 받아오기
        const data: Array<ExerciseStatistics> = [
            {
                date: "2020-03-21",
                volume: 100
            },
            {
                date: "2020-03-22",
                volume: 150
            },
            {
                date: "2020-03-23",
                volume: 200
            },
        ];
        setExerciseStatistics(data)
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