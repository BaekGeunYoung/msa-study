import React from 'react';
import {Button, Input, Table} from "reactstrap";
import {DietDetail} from "../../../../type";
import './index.scss'

interface Props {
    dietDetails: Array<DietDetail>
    totalDietDetail: DietDetail
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
                    props.dietDetails.map(dietDetail =>
                        <tr>
                            <td>{dietDetail.name}</td>
                            <td>{dietDetail.calorie}</td>
                            <td>{dietDetail.C}</td>
                            <td>{dietDetail.P}</td>
                            <td>{dietDetail.F}</td>
                        </tr>
                    )
                }
                </tbody>
                <tfoot>
                <tr>
                    <th>Total</th>
                    <th>{props.totalDietDetail.calorie}</th>
                    <th>{props.totalDietDetail.C}</th>
                    <th>{props.totalDietDetail.P}</th>
                    <th>{props.totalDietDetail.F}</th>
                </tr>
                </tfoot>
            </Table>
            <div>
                <Input type={"select"}>
                    <option>qweqwe</option>
                    <option>qwwe</option>
                    <option>qweqwe</option>
                    <option>qweqwe</option>
                </Input>
            </div>
            <div className={"add-custom-food-button-container"}>
                <Button
                    className={"add-custom-food-button"}
                    color={"success"}
                >
                    Add Custom Food
                </Button>
            </div>
        </div>
    )
};

export default DietDetailTable;