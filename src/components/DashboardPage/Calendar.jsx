import dayjs from 'dayjs'
import jalaliday from 'jalaliday/dayjs'
import { useState } from 'react'
import '../../styles/DashboardPage/calendar.css'

dayjs.extend(jalaliday)
const WEEKDAYS = ['Saturday','Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']

function Calendar({isDarkMode}){
    
    const today = dayjs();
    const [currentDate , setCurrentDate] = useState(dayjs())
    const jalaliCurrent = currentDate.calendar('jalali');
    const jalaliToday = today.calendar('jalali');
    let stop = true;

    return(
        <div className={`calendar-container ${isDarkMode ? 'text-white' : 'text-dark'}`}>
            
            <header>

                <div className='Year'>
                    <p>{jalaliCurrent.format("YYYY")}</p>
                </div>

                <div className='Month'>
                    <span
                        className="month-after calendar-button"
                        onClick={() => setCurrentDate(d => d.add(1, 'month'))}
                    > {"<"} </span>
                    <p>{jalaliCurrent.format("MMMM")}</p>
                    <span 
                        className="month-before calendar-button"
                        onClick={() => setCurrentDate(d => d.subtract(1, 'month'))}
                    > {">"} </span>
                </div>

            </header>

            <div className="weekdays">
                {WEEKDAYS.reverse().map((day) => {return <span key={day} className={"day-name"}>{day}</span>})}
            </div>

            <div className='days-container'>
                {WEEKDAYS.reverse().map((day)=>{
                    if(stop){
                    if(day!==currentDate.calendar('jalali').startOf('month').format("dddd")){
                        return (<span></span>);
                    }else{
                        stop=false;
                    }}
                })}
                {Array.from({ length: jalaliCurrent.daysInMonth() }, (_, i) => {
                    jalaliCurrent.startOf('month').add(i, 'day').format('DD')}).map((dayMap, index) => {
                        if(index+1 == jalaliToday.format("DD") && currentDate.format("MMMM") === today.format("MMMM")){
                            return <span key={index} className={"day active-day text-dark"}>{index+1}</span>    
                        }
                        return <span key={index} className={"day"}>{index+1}</span>
                    })}
            </div>

        </div>
    )
}
export default Calendar;