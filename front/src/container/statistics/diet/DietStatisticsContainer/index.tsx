import React, {ChangeEvent, useEffect, useState} from 'react';
import {DietStatistics, DietStatisticsType} from "../../../../type";
import DietStatisticsForm from "../../../../component/statistics/diet/DietStatisticsForm";
import './index.scss';

const DietStatisticsContainer = () => {
    const [dietStatistics, setDietStatistics] = useState<Array<DietStatistics>>();
    const [period, setPeriod] = useState(1);
    const [type, setType] = useState<DietStatisticsType>(DietStatisticsType.CAL);

    useEffect(() => {
        //TODO diet에 대한 통계 정보 받아오기
        const data: Array<DietStatistics> = [
            {
                date: "2020-03-21",
                quantity: 100
            },
            {
                date: "2020-03-22",
                quantity: 200
            },
            {
                date: "2020-03-23",
                quantity: 300
            },
        ];
        setDietStatistics(data)
    }, []);

    const handleChangePeriod = (e: ChangeEvent<HTMLInputElement>) => {
        setPeriod((e.target as any).value)
    };

    const handleChangeType = (e: ChangeEvent<HTMLInputElement>) => {
        setType((e.target as any).value)
    };

    return (
        <div className={"diet-statistics-container"}>
            <DietStatisticsForm
                onChangePeriod={handleChangePeriod}
                onChangeType={handleChangeType}
                period={period}
                data={dietStatistics}
                type={type}
            />
        </div>
    )
};

export default DietStatisticsContainer;