import React from 'react'
import "./Plan.css";

function Plan({ plan, quality, currentSub = false }) {
    return (
        <div className="profile__subscription">
            <div>
                <h4>{plan}</h4>
                <p style={{ marginTop: "4px" }}>{quality}</p>
            </div>
            {currentSub ? <button className="profile__currentPlan__buton">Current Package</button> :
                <button className="profile__subscribe__button">Subscribe</button>
            }
        </div>
    )
}

export default Plan;