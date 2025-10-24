import dayjs from 'dayjs'
import jalaliday from 'jalaliday/dayjs'
import { useState } from 'react'
import '../../styles/DashboardPage/calendar.css'

function Calendar(){
    dayjs.extend(jalaliday)
    const today = dayjs();
    const [currentDate , setCurrentDate] = useState(dayjs())
    const weekDays = ['Saturday','Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
    let stop = true;
    return(
        <div className="calendar-container">
            <header>
                <div className='Year'>
                    <p>{currentDate.calendar("jalali").format("YYYY")}</p>
                </div>
                <div className='Month'>
                    <span
                        className="month-after  calendar-button"
                        onClick={() => setCurrentDate(d => d.add(1, 'month'))}
                    > {"<"} </span>
                    {/* TODO: should this be persian or not */}
                    <p>{currentDate.calendar("jalali").format("MMMM")}</p>
                    <span 
                        className="month-before calendar-button"
                        onClick={() => setCurrentDate(d => d.subtract(1, 'month'))}
                    > {">"} </span>
                </div>
            </header>
            <div className="weekdays">
                {weekDays.reverse().map((day) => {return <span key={day} className={"day-name"}>{day}</span>})}
            </div>
            <div className='days-container'>
                {weekDays.reverse().map((day)=>{
                    if(stop){
                    if(day!==currentDate.calendar('jalali').startOf('month').format("dddd")){
                        return (<span></span>);
                    }else{
                        stop=false;
                    }}
                })}
                {Array.from({ length: currentDate.calendar("jalali").daysInMonth() }, (_, i) => {
                    currentDate.calendar("jalali").startOf('month').add(i, 'day').format('DD')}).map((dayMap, index) => {
                        if(index+1 == today.calendar("jalali").format("DD") && currentDate.format("MMMM") === today.format("MMMM")){
                            return <span key={index} className={"day active-day"}>{index+1}</span>    
                        }
                        return <span key={index} className={"day"}>{index+1}</span>
                    })}
            </div>
        </div>
    )
}
export default Calendar;