import React from 'react';
import './index.scss';
import {Table} from 'reactstrap';
import {ExercisePart} from "../../../../type";
import {IoIosArrowBack} from 'react-icons/io'

interface Props {
    onClickExercisePart: (exercisePart: ExercisePart) => void
    onClickBackButton: () => void
}

const ExercisePartList = (props: Props) => {
    const exercisePartList: Array<ExercisePart> = [
        ExercisePart.CHEST,
        ExercisePart.BACK,
        ExercisePart.LEG,
        ExercisePart.SHOULDER,
        ExercisePart.BICEPS,
        ExercisePart.TRICEPS,
        ExercisePart.ABDOMEN
    ];

    return (
        <div className={"exercise-part-list-container"}>
            <Table>
                <thead className={"table-head"}>
                    <tr>
                        <th>
                            <div className={"table-head-content"}>
                                <div>PART</div>
                                <div
                                    className={"back-button"}
                                    onClick={props.onClickBackButton}
                                >
                                    <IoIosArrowBack/>
                                </div>
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody>
                {
                    exercisePartList.map(exercisePart =>
                        <tr onClick={() => props.onClickExercisePart(exercisePart)}
                            key={exercisePart}
                        >
                            <td>{exercisePart}</td>
                        </tr>
                    )
                }
                </tbody>
            </Table>
        </div>
    )
};

export default ExercisePartList;