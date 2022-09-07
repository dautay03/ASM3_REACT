import React, { memo } from "react";
import Category from "../component/HomeComponent/ category";
import Barner from "../component/HomeComponent/barner";
import CategoryProduct from "../component/HomeComponent/categoryProduct";
import Information from "../component/HomeComponent/information";


function Home() {
    return (
        <>
            <Barner />
            <Category />
            <CategoryProduct />
            <Information />
        </>
    )
}
export default memo(Home);