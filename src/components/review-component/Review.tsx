import './Review.css';
import type {IReview} from "../../models/ReviewModel.ts";
import type {FC} from "react";

type PropsReviewType = {
    review: IReview;
}

export const Review: FC<PropsReviewType> = ({review}) => {

    return (
        <div className={'w-full p-[15px] flex flex-col gap-7 border rounded-lg border-gray-300'}>
            <div>
                <div className={' flex justify-between'}>
                    <p className={'font-medium text-xl'}>{review.reviewerName}</p>
                    <div className={'flex gap-2 justify-end items-end'}>
                        <img src='public/image/free-icon-rating.png' alt={'rating'} className={'w-[55%]'}/>
                        <p className={'font-medium'}>{review.rating}</p>
                    </div>
                </div>
                    <p>{review.reviewerEmail}</p>
            </div>
            <div className={'flex flex-col gap-1'}>
                <p className={'text-lg'}>{review.comment}</p>
                <p className={'text-xs'}>{review.date}</p>
            </div>
        </div>
    );
};
