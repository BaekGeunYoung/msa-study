import React, {ChangeEvent, FC, useEffect, useState} from 'react';
import './index.scss';
import DietDetailTable from "../../../../component/detail/diet/DietDetailTable";
import {DietDetail, Food} from "../../../../type";
import {getWithAuth, postWithAuth} from "../../../../utils";

const DietDetailContainer = () => {
    const [foods, setFoods] = useState<Array<Food>>();
    const [dailyDiet, setDailyDiet] = useState<Array<Food>>();
    const [selectedFoodId, setSelectedFoodId] = useState<number>();

    useEffect(() => {
        getWithAuth(`${process.env.REACT_APP_API_ENDPOINT}/diet?q=`)
            .then(response => response.data)
            .then(data => {
                setFoods(data)
            })

        getWithAuth(`${process.env.REACT_APP_API_ENDPOINT}/diet/today`)
            .then(response => response.data)
            .then(data => {
                setDailyDiet(data)
            })
    }, []);

    const getTotalDietDetail = () => {
        const totalCalorie = dailyDiet?.reduce((initValue, currValue, currIndex, array) => {
            return initValue + currValue.calorie
        }, 0);

        const totalCarbo = dailyDiet?.reduce((initValue, currValue, currIndex, array) => {
            return initValue + currValue.carboHydrate
        }, 0);

        const totalProtein = dailyDiet?.reduce((initValue, currValue, currIndex, array) => {
            return initValue + currValue.protein
        }, 0);

        const totalFat = dailyDiet?.reduce((initValue, currValue, currIndex, array) => {
            return initValue + currValue.fat
        }, 0);

        return {
            name: 'total',
            calorie: totalCalorie,
            carboHydrate: totalCarbo,
            protein: totalProtein,
            fat: totalFat
        }
    };

    const handleSelectFood = (e: ChangeEvent<HTMLInputElement>) => {
        setSelectedFoodId(parseInt(e.target.value))
    };

    const handleClickAddFood = () => {
        const data = {
            foodId: selectedFoodId,
            date: Date.now()
        };

        postWithAuth(`${process.env.REACT_APP_API_ENDPOINT}/diet/histories`, data)
            .then(response => {
                alert('added diet successfully')
            })
            .catch(e => {
                alert('add diet fail')
                console.log(e)
            })
    };

    return (
        <div className={"diet-detail-container"}>
            <div className={"diet-title"}>
                DIET
            </div>
            <div>
                <DietDetailTable
                    dailyDiet={dailyDiet}
                    totalDietDetail={getTotalDietDetail()}
                    foods={foods}
                    selectedFoodId={selectedFoodId}
                    onSelectFood={handleSelectFood}
                    onClickAddFood={handleClickAddFood}
                />
            </div>
        </div>
    )
};

export default DietDetailContainer;