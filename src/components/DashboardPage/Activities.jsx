import image from '../../assets/images/profile.jpeg';
import Calendar from './Calendar';
import Chats from './Chats';
import ActivityChart from './ActivityChart';
import Unread from './Unread';
import { Link } from 'react-router-dom';

const STATUSES = [
  "در انتظار پاسخ",
  "در حال انجام",
  "ایجاد شده",
  "اختتام یافته"
];

function Activities({ username, chats }) {
  const initialStatusCount = Object.fromEntries(
    STATUSES.map(status => [status, { count: 0, percentage: 0 }])
  );

  const { statusCount, unreadMessages } = chats.reduce(
    (acc, chat) => {
      if (!chat.read) {
        acc.unreadMessages += 1;
      }

      if (STATUSES.includes(chat.status)) {
        acc.statusCount[chat.status].count += 1;
      }

      return acc;
    },
    { statusCount: { ...initialStatusCount }, unreadMessages: 0 }
  );

  const totalChats = chats.length;
  const finalStatusCount = { ...statusCount };
  if (totalChats > 0) {
    STATUSES.forEach(status => {
      finalStatusCount[status].percentage = (finalStatusCount[status].count / totalChats) * 100;
    });
  }

  return (
    <>
      <header className="d-none d-md-flex justify-content-between p-3 bg-white">
        <h2>Activities</h2>
        <Link to="/dashboard/profile">
          <span className="header-profile">
            <img src={image} alt="Profile" />
            <p>{username}</p>
          </span>
        </Link>
      </header>
      <div className="activities-content m-0 p-4 bg-grey">
        <div className="content-container container-1"><Calendar /></div>
        <div className="content-container container-2"><Unread unreadMessages={unreadMessages} /></div>
        <div className="content-container container-3"><ActivityChart statusCount={finalStatusCount} /></div>
        <div className="content-container container-4"><Chats chats={chats} /></div>
      </div>
    </>
  );
}

export default Activities;