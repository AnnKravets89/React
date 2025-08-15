import {useEffect, useState} from "react";
import {getCars} from "../../services/api.service.ts";
import type {ICar} from "../../models/CarModel.ts";
import Car from "../car-component/Car.tsx";

const Cars = () => {
    const [cars, setCars] = useState<ICar[]>([]);

    useEffect(() => {

        getCars()
            .then((cars) => {
                setCars(cars);
            })
    }, []);

    return (
        <div className={'m-[30px] grid grid-cols-5 gap-4'}>
            {
                cars.map((car: ICar) => (<Car key={car.id} car={car}/>))
            }
        </div>
    );
};

export default Cars;
