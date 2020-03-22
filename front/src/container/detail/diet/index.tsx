import React from 'react';
import './index.scss';
import DietDetailTable from "../../../component/detail/diet/DietDetailTable/DietDetailTable";
import {DietDetail} from "../../../type";

const DietDetailContainer = () => {
    const dietDetails: Array<DietDetail> = [
        {
            name: "one",
            calorie: 2000,
            C: 70,
            P: 20,
            F: 20
        },
        {
            name: "one",
            calorie: 2000,
            C: 70,
            P: 20,
            F: 20
        },
        {
            name: "one",
            calorie: 2000,
            C: 70,
            P: 20,
            F: 20
        }
    ];

    const totalDietDetail: DietDetail = {
        name: "total",
        calorie: 2000,
        C: 70,
        P: 20,
        F: 20
    };

    return (
        <div className={"diet-detail-container"}>
            <div className={"diet-title"}>
                DIET
            </div>
            <div>
                <DietDetailTable
                    dietDetails={dietDetails}
                    totalDietDetail={totalDietDetail}
                />
            </div>
        </div>
    )
};

export default DietDetailContainer;