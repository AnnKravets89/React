import type {ICar} from "../../models/CarModel.ts";
import type {FC} from "react";

type PropsCarType = {
    car: ICar
}
const Car: FC<PropsCarType> = ({car}) => {
    return (
        <div className={'border rounded-sm flex flex-col justify-center items-center'}>
            <p>{'Brand: '} {car.brand}</p>
            <p>{'Price: '} {car.price} {'USD'}</p>
            <p>{'Year: '} {car.year}</p>
        </div>
    );
};

export default Car;
