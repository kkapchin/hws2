import React, {Dispatch, SetStateAction} from 'react';
import Affair from './affair/Affair';
import {AffairType, Filter, FilterType} from '../HW2';
import s from './Affairs.module.css';

type AffairsPropsType = {
    data: Array<AffairType>;
    setFilter: Dispatch<SetStateAction<FilterType>>;
    deleteAffairCallback: (id: number) => void;
    filter: FilterType;
}

function Affairs(props: AffairsPropsType) {
    const {data, setFilter, filter, deleteAffairCallback} = props;

    const setAll = () => {
        setFilter(Filter.ALL);
    }
    const setHigh = () => {
        setFilter(Filter.HIGH);
    }
    const setMiddle = () => {
        setFilter(Filter.MIDDLE);
    }
    const setLow = () => {
        setFilter(Filter.LOW);
    }

    const cnAll = `${s.button} ${s.all} ${filter === Filter.ALL && s.active}`;
    const cnHigh = `${s.button} ${s.high} ${filter === Filter.HIGH && s.active}`;
    const cnMiddle = `${s.button} ${s.middle} ${filter === Filter.MIDDLE && s.active}`;
    const cnLow = `${s.button} ${s.low} ${filter === Filter.LOW && s.active}`;

    const mappedAffairs = data.map((a: AffairType) => (
        <Affair
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={deleteAffairCallback}
        />
    ))

    return (
        <div>
            <div className={s.buttonContainer}>
                <button
                    id={'hw2-button-all'}
                    onClick={setAll}
                    className={cnAll}
                >
                    All
                </button>
                <button
                    id={'hw2-button-high'}
                    onClick={setHigh}
                    className={cnHigh}
                >
                    High
                </button>
                <button
                    id={'hw2-button-middle'}
                    onClick={setMiddle}
                    className={cnMiddle}
                >
                    Middle
                </button>
                <button
                    id={'hw2-button-low'}
                    onClick={setLow}
                    className={cnLow}
                >
                    Low
                </button>
            </div>
            <div className={s.affairs}>{mappedAffairs}</div>
        </div>
    )
}

export default Affairs