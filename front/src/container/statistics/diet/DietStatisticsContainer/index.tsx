import React, {ChangeEvent, useEffect, useState} from 'react';
import {DietStatistics, DietStatisticsType} from "../../../../type";
import DietStatisticsForm from "../../../../component/statistics/diet/DietStatisticsForm";
import './index.scss';
import {getWithAuth} from "../../../../utils";

const DietStatisticsContainer = () => {
    const [dietStatistics, setDietStatistics] = useState<Array<DietStatistics>>();
    const [period, setPeriod] = useState(1);
    const [type, setType] = useState<DietStatisticsType>(DietStatisticsType.CAL);

    useEffect(() => {
        getWithAuth(`${process.env.REACT_APP_API_ENDPOINT}/statistics/diet?period=${period}&option=${type}`)
            .then(response => response.data)
            .then(data => {
                setDietStatistics(data)
            })
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