import React, { memo } from "react";
import Category from "../component/HomeComponent/ category";
import Barner from "../component/HomeComponent/barner";
import CategoryProduct from "../component/HomeComponent/categoryProduct";
import Information from "../component/HomeComponent/information";
import LiveChat from "../component/HomeComponent/livechat";


function Home() {
    return (
        <>
            <Barner />
            <Category />
            <CategoryProduct />
            <Information />
            <LiveChat />
        </>
    )
}
export default memo(Home);