import React, { useEffect, useState } from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'

const Contact = () => {
    const [avtar, setAvtar] = useState();

    const data = "https://api.github.com/users/sumitsuyal344";
    const fetchData = async () => {
        try {
            const response = await fetch(data);
            const json = await response.json();
            setAvtar(json)
        } catch (error) {
            console.log("error", error);
        }
    };
    useEffect(() => {
        fetchData();
    }, [])
    // console.log("avtar", avtar)
    return (
        <div className="main-container">
            <Header />
            <div className="container">
                <img src="/Images/emailus.webp" alt="" style={{ paddingTop: "80px", width: "100%", height:"500px" }} className='img-container' />
                <div className="user-profile-container">
                    <div className="user-profile-card">
                        <img
                            src={avtar ? avtar.avatar_url : ""}
                            className="user-profile-image"
                            alt="Sumit Suyal"
                        />
                        <div className="user-profile-details text-center">
                            <div className="user-profile-name font-bold">{avtar ? avtar.name : avtar}</div><br />
                            <div>{avtar ? avtar.bio : ""}</div><br />
                            <div>Bhimtal, Nainital</div>
                        </div>
                        <div className="user-profile-links">
                            <a
                                href="https://github.com/sumitsuyal344"
                                target="_blank"
                                rel="noreferrer"
                                className="user-profile-link mr-3"
                            >
                                <img
                                    src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                                    alt="Github"
                                    className="user-profile-link-icon"
                                />
                            </a>
                            <a
                                 href="https://www.linkedin.com/in/sumit-suyal-0bb133208/"
                                target="_blank"
                                rel="noreferrer"
                                className="user-profile-link mr-3"
                            >
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/LinkedIn_icon_circle.svg/800px-LinkedIn_icon_circle.svg.png"
                                    alt="LinkedIn"
                                    className="user-profile-link-icon"
                                />
                            </a>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default Contact