import image from '../../assets/images/profile.jpeg';
import Calendar from './Calendar';
import Chats from './Chats';
import ActivityChart from './ActivityChart';
import Unread from './Unread';
import { Link } from 'react-router-dom';

const STATUSES = {
  "در انتظار پاسخ": "waiting",
  "در حال انجام": "in-progress",
  "ایجاد شده": "created",
  "اختتام یافته": "closed"
};

function Activities({ username, chats, isDarkMode }) {
  
  const initialStatusCount = Object.fromEntries(
    Object.entries(STATUSES).map(([status, cssClass]) => [
      status,
      { count: 0, percentage: 0, css_class_name: cssClass }
    ])
  );

  const { statusCount, unreadMessages } = chats.reduce(
    (acc, chat) => {
      if (!chat.read) {
        acc.unreadMessages += 1;
      }

      if (chat.status in STATUSES) {
        acc.statusCount[chat.status].count += 1;
      }

      return acc;
    },
    { statusCount: { ...initialStatusCount }, unreadMessages: 0 }
  );

  const totalChats = chats.length;
  const finalStatusCount = { ...statusCount };
  if (totalChats > 0) {
    Object.keys(STATUSES).forEach(status => {
      finalStatusCount[status].percentage =
        (finalStatusCount[status].count / totalChats) * 100;
    });
  }

  return (
    <div className='d-flex flex-column h-100'>
      <header className="d-none d-md-flex justify-content-between p-3 bgc-dark">
        <div className='d-flex align-items-center text-center'><h2>Activities</h2></div>
        <Link to="/dashboard/profile" style={{textDecoration:"none"}}>
          <span className="header-profile">
            <img src={image} alt="Profile" />
            <p className='m-0'>{username}</p>
          </span>
        </Link>
      </header>
      <div className="activities-content m-0 p-4 bgc-dark flex-grow-1 overflow-y-auto">
        <div className="content-container container-1 bgc-lighter-dark"><Calendar isDarkMode={isDarkMode} /></div>
        <div className="content-container container-2 bgc-lighter-dark"><Unread unreadMessages={unreadMessages} /></div>
        <div className="content-container container-3 bgc-lighter-dark"><ActivityChart statusCount={finalStatusCount} /></div>
        <div className="content-container container-4 bgc-lighter-dark"><Chats chats={chats} /></div>
      </div>
    </div>
  );
}

export default Activities;
