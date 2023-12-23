import { Button } from "@material-tailwind/react";
import React from "react";

const SubTitle = ({ title, btnTitle }) => {
    return (
        <>
            <div className=" flex mb-6 mt-6 justify-between md:container md:mx-auto">
                <div className="text-3xl mt-2 font-extrabold font-serif text-indigo-700 p-5 md:p-0 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5 items-start">
                    <h1>{title}</h1>
                </div>
                {btnTitle ? (
                    <div><Button variant="outlined">{btnTitle}</Button></div>
                ) : null}
            </div>
        </>
    );
};

export default SubTitle;
