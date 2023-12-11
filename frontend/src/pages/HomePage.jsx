import React from "react"
import Blogs from "../components/Blogs/Blogs"
import Brands from "../components/Brands/Brands"
import CampaignSingle from "../components/CampaignSingle/CampaignSingle"
import Campaigns from "../components/Campaigns/Campaign"
import Categories from "../components/Categories/Categories"
import Policy from "../components/Layout/Policy/Policy"
import Products from "../components/Products/Products"
import Sliders from "../components/Slider/Sliders"



const HomePage = () => {


    return (
        <div>
            <React.Fragment>

                <Sliders />
                <Categories />
                <Products />
                <Campaigns />
                <Products />
                <Blogs />
                <Brands />
                <CampaignSingle />
                <Policy />

            </React.Fragment>
        </div>
    )
}

export default HomePage