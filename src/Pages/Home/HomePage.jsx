import React from "react";
import Slider from "../../Components/Home/Slider";
import HomeCategory from "../../Components/Home/HomeCategory";
import DiscountSection from "../../Components/Home/DiscountSection";
import BrandSection from "../../Components/Brands/BrandSection";


const HomePage = () => {
    return (
        <>
            <div className=" md:container md:mx-auto">
                <Slider />
                <HomeCategory gender="mens" />
                <DiscountSection />
                <HomeCategory gender="womens" />
                <BrandSection />
                <HomeCategory gender="kids" />
            </div>
        </>
    );
};
export default HomePage;
