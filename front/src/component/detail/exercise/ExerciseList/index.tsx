import React, {ChangeEvent} from 'react';
import {Button, Input, Table} from 'reactstrap';
import './index.scss';
import {IoIosArrowBack} from "react-icons/io";
import {Exercise} from "../../../../type";


interface Props {
    exercises: Array<Exercise>
    onClickExercise: (exercise: Exercise) => void
    onClickAddExercise: () => void
    onClickBackButton: () => void
    selectedExercise: Exercise | undefined
    weight: number
    reps: number
    sets: number
    onChangeInput: (e: ChangeEvent<HTMLInputElement>) => void
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
                            <td>{exercise.name}</td>
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
                                name={"weight"}
                                className={"add-exercise-input"}
                                placeholder={"weight"}
                                value={props.weight}
                                onChange={props.onChangeInput}
                            />
                            <Input
                                name={"reps"}
                                className={"add-exercise-input"}
                                placeholder={"reps"}
                                value={props.reps}
                                onChange={props.onChangeInput}
                            />
                            <Input
                                name={"sets"}
                                className={"add-exercise-input"}
                                placeholder={"sets"}
                                value={props.sets}
                                onChange={props.onChangeInput}
                            />
                        </div>
                        <div className={"add-exercise-button-container"}>
                            <Button
                                onClick={props.onClickAddExercise}
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