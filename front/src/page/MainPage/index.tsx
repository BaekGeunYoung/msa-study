import React, {useState} from 'react'
import {RouteComponentProps} from 'react-router'
import './index.scss'
import {MainPageViewMode} from "../../constants";
import DietDetailContainer from "../../container/detail/diet/DietDetailContainer";
import ExerciseDetailContainer from "../../container/detail/exercise/ExerciseDetailContainer";
import ExerciseStatisticsContainer from "../../container/statistics/exercise/ExerciseStatisticsContainer";
import DietStatisticsContainer from "../../container/statistics/diet/DietStatisticsContainer";

const MainPage = ({history}: RouteComponentProps) => {
    const [viewMode, setViewMode] = useState(MainPageViewMode.DETAIL)

    const handleChangeViewMode = () => {
        setViewMode(viewMode === MainPageViewMode.DETAIL ?
            MainPageViewMode.STATISTICS
            : MainPageViewMode.DETAIL)
    };

    return (
        <div className={"main-page-container"}>
            <div className={"circle-container"}>
                <div className={`circle ${viewMode}`} onClick={handleChangeViewMode}>
                    <img className={"main-img"} src={"/strong.png"} />
                </div>
            </div>
            {
                viewMode === MainPageViewMode.DETAIL ?
                    <div className={"detail-container"}>
                        <ExerciseDetailContainer />
                        <DietDetailContainer />
                    </div>
                    : <div className={"detail-container"}>
                        <ExerciseStatisticsContainer />
                        <DietStatisticsContainer />
                    </div>
            }
        </div>
    )
};

export default MainPage;