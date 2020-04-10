import React, {ChangeEvent, SyntheticEvent} from 'react';
import {Button, Input, Table} from "reactstrap";
import {DietDetail, Food, TotalDietDetail} from "../../../../type";
import './index.scss'

interface Props {
    dailyDiet: Array<DietDetail> | undefined
    totalDietDetail: TotalDietDetail
    foods: Array<Food> | undefined
    selectedFoodId: number | undefined
    onSelectFood: (e: ChangeEvent<HTMLSelectElement>) => void
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
                    props.dailyDiet?.map(dietDetail =>
                        <tr key={dietDetail.id}>
                            <td>{dietDetail.food.name}</td>
                            <td>{dietDetail.food.calorie}</td>
                            <td>{dietDetail.food.carboHydrate}</td>
                            <td>{dietDetail.food.protein}</td>
                            <td>{dietDetail.food.fat}</td>
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
                <select className={"food-select-box"} onChange={(e) => props.onSelectFood(e)} value={props.selectedFoodId} defaultValue={-1}>
                    <option value={-1}>Select food to add.</option>
                    {
                        props.foods?.map(food => <option key={food.id} value={food.id}>{food.name}</option>)
                    }
                </select>
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