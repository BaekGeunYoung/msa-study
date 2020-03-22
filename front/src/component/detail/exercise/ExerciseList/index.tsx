import React from 'react';
import {Button, Input, Table} from 'reactstrap';
import './index.scss';
import {IoIosArrowBack} from "react-icons/io";


interface Props {
    exercises: Array<string>
    onClickExercise: (exercise: string) => void
    onClickBackButton: () => void
    selectedExercise: string | undefined
}

const ExerciseList = (props: Props) => {
    return(
        <div className={"exercise-list-container"}>
            <Table>
                <thead className={"exercise-list-table-head"}>
                    <tr>
                        <th className={"table-head-content"}>
                            <div>NAME</div>
                            <div
                                className={"back-button"}
                                onClick={props.onClickBackButton}
                            >
                                <IoIosArrowBack/>
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody>
                {
                    props.exercises.map(exercise =>
                        <tr onClick={() => props.onClickExercise(exercise)}>
                            <td>{exercise}</td>
                        </tr>
                    )
                }
                </tbody>
            </Table>
            <div className={"add-exercise-form-container"}>
                <div className={"add-exercise-title"}>
                    ADD EXERCISE
                </div>
                {
                    props.selectedExercise ?
                    <div className={"add-exercise-form"}>
                        <div className={"selected-exercise"}>
                            exercise : {props.selectedExercise}
                        </div>
                        <div className={"add-exercise-input-group"}>
                            <Input
                                className={"add-exercise-input"}
                                placeholder={"weight"}
                            />
                            <Input
                                className={"add-exercise-input"}
                                placeholder={"reps"}
                            />
                            <Input
                                className={"add-exercise-input"}
                                placeholder={"sets"}
                            />
                        </div>
                        <div className={"add-exercise-button-container"}>
                            <Button
                                className={"add-exercise-button"}
                                color={"success"}
                            >Add</Button>
                        </div>
                    </div>
                    : <div className={"add-exercise-message"}>
                        select exercise to add !
                    </div>
                }
            </div>
        </div>
    )
};

export default ExerciseList;