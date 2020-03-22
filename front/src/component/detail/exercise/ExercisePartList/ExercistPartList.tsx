import React from 'react';
import './index.scss';
import {Table} from 'reactstrap';
import {ExercisePart} from "../../../../type";

interface Props {
    onClickExercisePart: (exercisePart: ExercisePart) => void
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
        <div>
            <Table>
                <thead>
                    <tr>
                        <th>PART</th>
                    </tr>
                </thead>
                <tbody>
                {
                    exercisePartList.map(exercisePart =>
                        <tr onClick={() => props.onClickExercisePart(exercisePart)}>
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