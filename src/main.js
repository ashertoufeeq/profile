import React, {Component} from 'react';
import profile from "./assests/profile.jpg"

const aboutMe = [{
    title: "Introduction",
    description: "Asher Toufeeq an Undergraduate student persuing B.tech(Electrical) from Jamia Millia Islamia,New Delhi(110025)."
}, {
    title: "My Skillset",
    description: "I possess a sharp eye for detail, which I use to find even the smallest errors in text. I work well under pressure and can produce high-quality work in short periods of time. I have strong interpersonal skills and work with a wide variety of people."
}, {
    title: "My Goals",
    description: "I  am looking for an opportunity to work with a team that runs on clear communication.I want to align myself with a company I believe in and where I can create positive change. I am always looking to learn more and am open to taking on challenging projects."
},];

class Main extends Component {
    render() {

        return (
            <div className={"column"} style={{backgroundColor: "rgba(255, 255, 255, 1)", margin: 0, padding: 0}}>
                <div className="header">
                    <h1 className={"ruthie"} style={{margin: 0, fontWeight: "bold"}}> Asher Toufeeq </h1>
                </div>
                <div className={"bg-img column align-center justify-center"}>
                    <div className="arrow"/>
                    <div className={"column align-lg-start title-wrapper m-4"}>
                        <h2>Get to know me!</h2>
                        <div style={{marginTop: "10px"}}>
                            <h1 className={"floating-text "}>FrontEnd</h1>
                            <h1 className={"floating-text "}> Developer</h1>
                        </div>
                    </div>
                    <img className={"m-4"} style={{height: "60%", width: "60%"}} alt={"profile"} src={profile}/>
                </div>
                <div className={"column justify-center align-center"}>
                    <h1 className={"cfg p-4 m-4"} style={{fontWeight:"bold"}}>  About Me</h1>
                    {aboutMe.map((item,i) =>
                        <div key={i} className={"col-s-12  col-6 column align-center p-4"}>
                            <h2 style={{marginTop: "50px", marginBottom: "25px",fontWeight:"normal",fontSize:"22px",color:"#1b1b1b"}}>{item.title}</h2>
                            <h3 style={{fontSize:"16px",color:"#1b1b1b",fontWeight:"normal"}}> {item.description}</h3>
                        </div>)}
                </div>
                <div className={"column align-center"}>
                <div className="arrow-bottom"/>
                </div>
                <div className={"row justify-around bg p-5"}>
                    <h6 style={{fontSize:"12px",color:"#595959"}}>COPYRIGHT © 2019 ASHER TOUFEEQ BUSINESS PROFILE - ALL RIGHTS RESERVED.
                    </h6>

                    <h6 style={{fontSize:"12px",color:"#595959"}}>Powered By Ggg
                    </h6>
                </div>
            </div>
        );
    }
}

export default Main;