import {useForm} from "react-hook-form";
import type {ICar} from "../../models/CarModel.ts";
import {joiResolver} from "@hookform/resolvers/joi";
import {carValidator} from "../../validators/carValidator.ts";
import {addCar} from "../../services/api.service.ts";

const CreateCar = () => {
    const {register, handleSubmit, formState: {errors}} = useForm<ICar>({
        mode: 'all',
        resolver: joiResolver(carValidator)
        
    });

    const createHandler = (data: ICar) => {
        addCar(data);
    }
    return (
        <div className={'flex justify-center mt-[100px]'}>
            <form onSubmit={handleSubmit(createHandler)}
                className={' p-[100px] flex flex-col items-center gap-5 '}>

                <h2 className={'font-normal text-2xl mb-[20px]'}>
                    Add New Car
                </h2>
                <div>
                    <div>{errors.brand?.message}</div>
                        <label className={'flex gap-2 font-medium'}>Brand:
                            <input className={'border'} type="text" {...register('brand')}/>
                        </label>
                </div>

                <div>
                    <div>{errors.price?.message}</div>
                    <label className={'flex gap-3.5 font-medium'}>Price:
                        <input className={'border'} type="number" {...register('price')}/>
                    </label>
                </div>

                <div>
                    <div>{errors.year?.message}</div>
                    <label className={'flex gap-4 font-medium'}>Year:
                        <input className={'border'} type="number" {...register('year')}/>
                    </label>
                </div>
                <button className={'mt-[20px] bg-indigo-500 pt-[3px] pb-[3px] pl-[10px] pr-[10px] rounded-sm'}>
                    Save Car
                </button>

            </form>

        </div>
    );
};

export default CreateCar;
