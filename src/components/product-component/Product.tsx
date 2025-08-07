import './Product.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import type { IProduct } from "../../models/ProductModel";
import type {FC} from "react";
import {Review} from "../review-component/Review.tsx";

type PropsProductType = {
    product: IProduct
}
export const Product: FC<PropsProductType> = ({product}) => {

    return (
        <div className={'product flex flex-col '}>

            <div className={'w-full flex gap-10 mb-[100px]'}>
                <div className={'swiper'}>

                    <Swiper
                        modules={[Navigation]}
                        navigation={true}
                        spaceBetween={10}
                        slidesPerView={1}
                        loop={true}
                        className={'overflow-hidden'}
                    >
                    {
                        product.images.map((image, index) => (
                            <SwiperSlide key={index}>
                                <img src={image} alt={product.title}/>
                            </SwiperSlide>
                        ))
                    }
                    </Swiper>
                </div>

                <div className={'flex flex-col gap-4'}>
                    <div className={'title flex gap-3 items-end'}>
                        <p className={'font-medium text-xl'}>{product.id}{'.'}</p>
                        <h2 className={'text-4xl font-medium'}>{product.title}</h2>
                    </div>
                    <div className={'flex justify-between'}>
                        <div className={'flex gap-3'}>
                            <img src='public/image/free-icon-rating.png' alt={'rating'} className={'icon'}/>
                            <p>{product.rating}</p>
                            <p>{product.availabilityStatus}</p>
                        </div>
                        <p>{product.sku}</p>
                    </div>
                    <div className={'flex flex-col gap-6 mt-[50px]'}>
                        <p className={'text-2xl font-medium ml-[30px]'}>{product.price} {'USD'}</p>
                        <p>{product.description}</p>
                    </div>
                    <ul>
                        {
                            product.tags.map((tag, index) => (
                                <li key={index} className={'font-medium'}>
                                    {'#'}{tag}
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>

            <h2 className={'text-2xl font-medium mb-[10px]'}>{'Characteristics'}</h2>
            <div className={'flex gap-20  w-full'}>
                <div className={'characteristics flex'}>
                    <div className={'flex gap-10'}>
                        <div className={'flex flex-col gap-1 font-medium'}>
                            <p>{'Brand'}</p>
                            <p>{'Weight'}</p>
                            <p>{'Category'}</p>
                            <p>{'Discount'}</p>
                            <p>{'Stock'}</p>
                            <p>{'Width'}</p>
                            <p>{'Height'}</p>
                            <p>{'Depth'}</p>
                            <p>{'Warranty'}</p>
                            <p>{'Shipping'}</p>

                        </div>
                        <div className={'flex flex-col gap-1'}>
                            <p>{product.brand}</p>
                            <p>{product.weight} {'g'}</p>
                            <p>{product.category}</p>
                            <p>{product.discountPercentage} {'%'}</p>
                            <p>{product.stock}</p>
                            <p>{product.dimensions.width} {'cm'}</p>
                            <p>{product.dimensions.height} {'cm'}</p>
                            <p>{product.dimensions.depth} {'cm'}</p>
                            <p>{product.warrantyInformation}</p>
                            <p>{product.shippingInformation}</p>
                        </div>
                    </div>
                   <div>
                       <img src={product.thumbnail} alt={product.title} />
                   </div>
                </div>

                <div className={'flex flex-col gap-5 border rounded-lg border-gray-300 p-[40px]'}>
                    <div>
                        <p className={'pl-[15px]'}>{product.meta.createdAt}</p>
                        <p className={'pl-[15px]'}>{product.meta.updatedAt}</p>
                        <p className={'pl-[15px]'}>{product.meta.barcode}</p>
                        <img src={product.meta.qrCode} alt={'qrcode'}/>
                    </div>
                    <div className={'flex flex-col items-center'}>
                        <p>{product.returnPolicy}</p>
                        <p>{'Min Order - '}{product.minimumOrderQuantity}</p>
                    </div>
                </div>
            </div>

            <div>
                <div className={'review'}>
                    {
                        product.reviews.map((review, index) => (
                            <Review key={index} review={review} />
                        ))
                    }
                </div>

            </div>
        </div>
    );
};
