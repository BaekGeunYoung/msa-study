import React, {ChangeEvent} from 'react';
import {Button, Input, Table} from "reactstrap";
import {DietDetail, Food, TotalDietDetail} from "../../../../type";
import './index.scss'

interface Props {
    dietDetails: Array<Food> | undefined
    totalDietDetail: TotalDietDetail
    foods: Array<Food> | undefined
    selectedFoodId: number | undefined
    onSelectFood: (e: ChangeEvent<HTMLInputElement>) => void
    onClickAddFood: () => void
}

const DietDetailTable = (props: Props) => {
    return (
        <div className={"diet-detail"}>
            <Table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Calorie</th>
                    <th>C</th>
                    <th>P</th>
                    <th>F</th>
                </tr>
                </thead>
                <tbody>
                {
                    props.dietDetails?.map(dietDetail =>
                        <tr>
                            <td>{dietDetail.name}</td>
                            <td>{dietDetail.calorie}</td>
                            <td>{dietDetail.carboHydrate}</td>
                            <td>{dietDetail.protein}</td>
                            <td>{dietDetail.fat}</td>
                        </tr>
                    )
                }
                </tbody>
                <tfoot>
                <tr>
                    <th>Total</th>
                    <th>{props.totalDietDetail.calorie}</th>
                    <th>{props.totalDietDetail.carboHydrate}</th>
                    <th>{props.totalDietDetail.protein}</th>
                    <th>{props.totalDietDetail.fat}</th>
                </tr>
                </tfoot>
            </Table>
            <div>
                <Input type={"select"} onChange={props.onSelectFood} value={props.selectedFoodId}>
                    {
                        props.foods?.map(food => <option>{food.name}</option>)
                    }
                </Input>
            </div>
            <div className={"add-custom-food-button-container"}>
                <Button
                    onClick={props.onClickAddFood}
                    className={"add-custom-food-button"}
                    color={"success"}
                >
                    Add Food
                </Button>
            </div>
        </div>
    )
};

export default DietDetailTable;