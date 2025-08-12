import {useSearchParams} from "react-router-dom";

const Pagination = () => {
    const [searchParams, setSearchParams] = useSearchParams({page: '1'});
    let currentPage = Number(searchParams.get('page') || '1');

    return (
        <div className={'flex justify-center'}>
            <div className={'flex gap-5 p-[20px]'}>
                <button className={'rounded-md p-[7px] pl-[15px] pr-[15px] bg-cyan-500 text-white font-bold'} onClick={() => {
                    if (currentPage > 1) {
                        setSearchParams({page: (--currentPage).toString()});
                    }
                }}>Prev</button>

                <button className={'rounded-md p-[7px] pl-[15px] pr-[15px] bg-cyan-500 text-white font-bold'} onClick={() => {
                    if (currentPage >= 1) {
                        setSearchParams({page: (++currentPage).toString()});
                    }
                }}>Next</button>
            </div>
        </div>
    );
};

export default Pagination;
