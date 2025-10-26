import '../../styles/DashboardPage/unread.css'
import {Link} from "react-router-dom"
function Unread({chats}){
    let unreadMessages =0;
    const statusCount = {
        "در انتظار پاسخ":{
            "count":0,
            "percentage":0
        },
        "در حال انجام":{
            "count":0,
            "percentage":0
        },
        "ایجاد شده":{
            "count":0,
            "percentage":0
        },
        "اختتام یافته":{
            "count":0,
            "percentage":0
        }
    }
    // TODO: aren't better ways for these?
    chats.forEach(element => {
        if(!element.read){
            unreadMessages+=1
        }
        if(element.status==="اختتام یافته"){
            statusCount["اختتام یافته"].count+=1
        }else if(element.status==="ایجاد شده"){
            statusCount["ایجاد شده"].count+=1
        }else if(element.status==="در انتظار پاسخ"){
            statusCount["در انتظار پاسخ"].count+=1
        }else if(element.status==="در حال انجام"){
            statusCount["در حال انجام"].count+=1
        }
    });
    Object.keys(statusCount).forEach(key => {
        statusCount[key].percentage = (statusCount[key].count / Object.keys(chats).length) * 100;
    });

    return(
        <div className="unread-and-states">
            <div className='unread'>
                <p>Unread Messages:</p>
                <Link 
                    // TODO: Should implement this
                    // to={} 
                    className='unread-number'>{unreadMessages}    
                </Link>
            </div>
            <div className="states">
                {/* TODO: fix this with the percentage */}
                <span><span className='red-colored-square'></span>tasks remaining</span>
                <div className='circles-container'>
                    <div className="circle" style={{animation: "angle-loop 2000ms forwards"}}></div>
                    <div className="circle-1"></div>
                </div>
            </div>
        </div>
    )
};
export default Unread;