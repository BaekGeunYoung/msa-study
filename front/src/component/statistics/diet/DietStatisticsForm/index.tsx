import React, {ChangeEvent, useEffect} from 'react';
import {DietStatistics, DietStatisticsType} from "../../../../type";
import {Bar, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer} from 'recharts'
import {Input} from "reactstrap";
import './index.scss';

interface Props {
    onChangePeriod: (e: ChangeEvent<HTMLInputElement>) => void
    onChangeType: (e: ChangeEvent<HTMLInputElement>) => void
    period: number
    data: Array<DietStatistics> | undefined
    type: DietStatisticsType
}

const DietStatisticsForm = (props: Props) => {
    useEffect(() => {
        console.log(props.data)
    })
    return(
        <div className={"diet-statistics-form-container"}>
            <div className={"diet-statistics-form-header"}>
                <div className={"header-title"}>DIET</div>
                <div className={"header-option-group"}>
                    <Input type={"select"} className={"header-option type"}>
                        <option value={DietStatisticsType.CAL}>calorie</option>
                        <option value={DietStatisticsType.C}>carbohydrate</option>
                        <option value={DietStatisticsType.P}>protein</option>
                        <option value={DietStatisticsType.F}>fat</option>
                    </Input>
                    <Input type={"select"} className={"header-option period"}>
                        <option value={1}>1 month</option>
                        <option value={2}>2 months</option>
                        <option value={3}>3 months</option>
                        <option value={6}>6 months</option>
                    </Input>
                </div>
            </div>
            {
                props.data && <div className={"hello"}>
                    <ResponsiveContainer width={"100%"} aspect={4.0/3.0}>
                        <BarChart data={props.data}>
                            <CartesianGrid strokeDasharray={"3 3"} />
                            <XAxis dataKey={"date"} />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey={"quantity"} fill={"#f5b042"} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            }
        </div>
    )
};

export default DietStatisticsForm;