import React from "react"
import './hero.css'

export default function Hero() {

    return(
        <div className="hero">
            <div className="hero__article">
                <img src="../src/assets/images/image-web-3-desktop.jpg" atl="web3" className="hero__article-img"/>
                <div className="hero__article__text">
                    <h1 className="hero__article-title">The Bright Future of Web 3.0?</h1>
                    <div className="hero__article__cta">
                        <p className="hero__article__cta-desc">
                            We dive into the next evolution of the web that claims 
                            to put the power of the platforms back into the hands of the people. 
                            But is it really fulfilling its promise?
                        </p>
                        <button className="hero__article__cta-btn">read more</button>
                    </div>
                </div>
            </div>
            <div className="hero__new">
                <h2 className="hero__new-title">New</h2>
                <div className="hero__new__article">
                    <h4 className="hero__new__article-title">Hydrogen VS Electric Cars</h4>
                    <p className="hero__new__article-desc">Will hydrogen-fueled cars ever catch up to EVs?</p>
                </div>
                <div className="hero__new__article">
                    <h4 className="hero__new__article-title">The Downsides of AI Artistry</h4>
                    <p className="hero__new__article-desc">What are the possible adverse effects of on-demand AI image generation?</p>
                </div>
                <div className="hero__new__article">
                    <h4 className="hero__new__article-title">Is VC Funding Drying Up?</h4>
                    <p className="hero__new__article-desc">Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
                </div>
            </div>
                <div className="hero__rankings-one">
                    <div className="hero__rankings-preview">
                        <img src="../../src/assets/images/image-retro-pcs.jpg" alt="retro-pc" className="hero__rankings-preview_img" />
                        <h2 className="hero__rankings-preview_number">01</h2>
                        <h4 className="hero__rankings-preview_title">Reviving Retro PCs</h4>
                        <p className="hero__rankings-preview_desc">What happens when old PCs are given modern upgrades?</p>
                    </div>
                </div>
                <div className="hero__rankings-two">
                    <div className="hero__rankings-preview">
                        <img src="../../src/assets/images/image-top-laptops.jpg" alt="laptop" className="hero__rankings-preview_img" />
                        <h2 className="hero__rankings-preview_number">02</h2>
                        <h4 class4ame="hero__rankings-preview_title">Top 10 Laptops of 2022</h4>
                        <p className="hero__rankings-preview_desc">Our best picks for various needs and budgets.</p>
                    </div>
                </div>
                <div className="hero__rankings-three">
                    <div className="hero__rankings-preview">
                        <img src="../../src/assets/images/image-gaming-growth.jpg" alt="gaming" className="hero__rankings-preview_img" />
                        <h2 className="hero__rankings-preview_number">03</h2>
                        <h4 className="hero__rankings-preview_title">The Growth of Gaming</h4>
                        <p className="hero__rankings-preview_desc">How the pandemic has sparked fresh opportunities.</p>
                    </div>
            </div>
        </div>
    )
}