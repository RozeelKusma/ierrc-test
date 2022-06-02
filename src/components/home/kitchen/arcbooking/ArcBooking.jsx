import React from 'react'
import './arcbooking.css'

const ArcBooking = () => {
    var day = new Date();

    if(day.getDay()===0)
    {
        return(
            <div>
                Sunday Menu
            </div>
        )
    }
    else if(day.getDay()===3){
        return(
            <div>
                Wednesday Menu
            </div>
        )
    }
    else if(day.getDay()===5){
        return(
            <div>
                Friday Menu
            </div>
        )
    }
    else{

        return (
            <div>
                Welcome
    </div>
  )
}
}

export default ArcBooking