import React from "react"
import './header.css'

export default function Header() {

    const Menu = () =>
        <>
            <p><a href="#home">Home</a></p>
            <p><a href="#new">New</a></p>
            <p><a href="#popular">Popular</a></p>
            <p><a href="#trending">Trending</a></p>
            <p><a href="#categories">Categories</a></p>
        </>

    return(
        <div className="header">
            <div className="header__logo">
                <img src="../src/assets/images/logo.svg" alt="logo" />
            </div>
            <div className="header__menu">
                <Menu />
            </div>
        </div>
    )
}