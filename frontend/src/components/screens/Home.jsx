import React from 'react'
import Header from "../parts/Header"
import Footer from "../parts/Footer"
import FreshStories from "../parts/FreshStories"
import Slider from "../parts/Slider"
import TrendingPosts from "../parts/TrendingPosts"

const Home = () => {
    return(
        <>
        <Header/>
        <Slider/>
        <TrendingPosts/>
        <FreshStories/>
        <Footer/>
        </>
    )
}

export default Home;