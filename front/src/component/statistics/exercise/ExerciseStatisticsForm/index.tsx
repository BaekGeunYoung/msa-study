import React, {ChangeEvent} from 'react';
import {Input} from "reactstrap";
import {ExerciseStatistics, ExerciseStatisticsType} from "../../../../type";
import {Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import './index.scss';

interface Props {
    onChangePeriod: (e: ChangeEvent<HTMLInputElement>) => void
    onChangeType: (e: ChangeEvent<HTMLInputElement>) => void
    period: number
    data: Array<ExerciseStatistics> | undefined
    type: ExerciseStatisticsType
}

const ExerciseStatisticsForm = (props: Props) => {
    return(
        <div className={"exercise-statistics-form-container"}>
            <div className={"exercise-statistics-form-header"}>
                <div className={"header-title"}>EXERCISE</div>
                <div className={"header-option-group"}>
                    <Input type={"select"} className={"header-option type"}>
                        <option value={ExerciseStatisticsType.ALL}>all</option>
                        <option value={ExerciseStatisticsType.CHEST}>chest</option>
                        <option value={ExerciseStatisticsType.BACK}>back</option>
                        <option value={ExerciseStatisticsType.LEG}>leg</option>
                        <option value={ExerciseStatisticsType.SHOULDER}>shoulder</option>
                        <option value={ExerciseStatisticsType.BICEPS}>biceps</option>
                        <option value={ExerciseStatisticsType.TRICEPS}>triceps</option>
                        <option value={ExerciseStatisticsType.ABDOMEN}>abdomen</option>
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
                            <Bar dataKey={"volume"} fill={"#ff4714"} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            }
        </div>
    )
};

export default ExerciseStatisticsForm;