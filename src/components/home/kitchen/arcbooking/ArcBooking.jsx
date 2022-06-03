import React from 'react'
import './arcbooking.css'

const ArcBooking = () => {
    return(
        <div className="booking_main">
            <div className="booking_content">
                <div className="booking_title">
                Which menu do you want to cook???
                </div>
                <div className="wed">
                    <div className="wed_left">
                    <img src='https://shikharsamachar.com/wp-content/uploads/2020/03/maxresdefault-2.jpg' alt="" className="wed_img" />
                    </div>
                    <div className="wed_right">
                    Nepalese Traditional food for Wednesday.
                    </div>
                </div>
                <div className="fri">
                <div className="wed_left">
                    <img src='https://ps.w.org/dummy-images/assets/icon-256x256.png?rev=2024916' alt="" className="wed_img" />
                    </div>
                    <div className="wed_right">
                    Friday Menu
                    </div> 
                </div>
                <div className="sun">
                <div className="wed_left">
                    <img src='https://ps.w.org/dummy-images/assets/icon-256x256.png?rev=2024916' alt="" className="wed_img" />
                    </div>
                    <div className="wed_right">
                    Sunday Menu
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ArcBooking