import React from 'react';
import './index.scss';
import {Table, Button} from "reactstrap";
import {ExerciseDetail} from "../../../type";

interface Props {
    exerciseDetails: Array<ExerciseDetail>
    totalVolume: number
}

const ExerciseDetailTable = (props: Props) => {
    return (
        <div className={"exercise-detail"}>
            <Table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Weight</th>
                        <th>Reps</th>
                        <th>Sets</th>
                        <th>Volume</th>
                    </tr>
                </thead>
                <tbody>
                {
                    props.exerciseDetails.map(exerciseDetail =>
                        <tr>
                            <td>{exerciseDetail.name}</td>
                            <td>{exerciseDetail.weight}</td>
                            <td>{exerciseDetail.rep}</td>
                            <td>{exerciseDetail.set}</td>
                            <td>{exerciseDetail.volume}</td>
                        </tr>
                    )
                }
                </tbody>
                <tfoot>
                    <tr>
                        <th>Total</th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th>{props.totalVolume}</th>
                    </tr>
                </tfoot>
            </Table>
            <div className={"add-exercise-button-container"}>
                <Button
                    className={"add-exercise-button"}
                    color={"success"}
                >
                    Add Exercise
                </Button>
            </div>
        </div>
    )
};

export default ExerciseDetailTable;