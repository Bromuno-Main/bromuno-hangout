import React, {useEffect} from 'react'
import {fetchTags} from "../../redux/questionSlice";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../redux/store";
import LoadingHandler from "../LoadingHandler";


interface TagsListProp {
    tag: string | null;
    setTag: (id: string) => void;
}

export default function TagsList({tag, setTag}: TagsListProp) {
    const {tags, fetching, error} = useSelector((state: RootState) => state.question);
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(fetchTags());
        return () => {
        };
    }, []);
    return (
        <div className="lg:w-[582px] flex flex-col ">

            <LoadingHandler
                loading={fetching}
                loadingComponent={<p>Loading tags...</p>}
                errorComponent={<p style={{color: 'red'}}>{error || 'Error fetching tags.'}</p>}
                idleComponent={<p>Nothing to load yet.</p>}
                successComponent={
                    <div className={`w-full gap-3 h-fit flex flex-row overflow-x-scroll scrollbar-hide`}>
                        {[...tags]
                            .map((item, index) => {
                                const current = item === tag
                                return (
                                    <div
                                        key={index}
                                        onClick={() => {
                                            setTag(item)
                                        }}
                                        className={`${current ? "bg-red-400 !text-white" : "bg-transparent"} flex flex-col cursor-pointer justify-start hover:bg-gray-50 duration-400 shadow-[#f3f3f3] items-start w-fit h-fit  rounded-3xl px-5 py-2`}
                                    >
                                        <p>{item}</p>
                                    </div>
                                );
                            })}
                    </div>
                }
            />
            <div className={`my-2`}/>

        </div>
    )
}
