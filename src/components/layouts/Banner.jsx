import { useState } from "react";
import Flex from "../Flex";

const Banner = () => {
    let [count, setcount] = useState(1);
    const Increment = () => {
        setcount(count + 1);
    };
    const Decrement = () => {
        if (count > 1) {
            setcount(count - 1);
        }
    };
    return (
        <>
            <div className="w-[400px] mx-auto">
                <Flex className={"border-2 border-gray-500 rounded-2xl py-1 px-5.5 justify-between"}>
                    <p
                        className="text-[32px] cursor-pointer"
                        onClick={Decrement}
                    >
                        -
                    </p>
                    <p className="text-xl px-9">{count}</p>
                    <p
                        className="text-[28px] cursor-pointer"
                        onClick={Increment}
                    >
                        +
                    </p>
                </Flex>
            </div>
        </>
    )
}

export default Banner
