import "../../styles/DashboardPage/dashboard.css"
import "../../styles/DashboardPage/ProfilePage/profile.css"
import SideBar from "./SideBar";
import image from "../../assets/images/profile.jpeg"

function Profile({username,email,setUsername}){
    return(
        <main>
            <SideBar/>
            <section className="profile section-dashboard">
                <div>
                    <div className="profile-image-container">
                        <img src={image} />    
                    </div>
                    <div className="user-details">
                        <h2>username: </h2>
                        <p>{username}</p>
                        <h2>email: </h2>
                        <p>{email}</p>
                    </div>
                </div>
                <button
                    className="profile-button"
                    onClick={
                        ()=>{
                            setUsername("")
                        }
                    }
                >logout</button>
            </section>
            
        </main>
    )
}
export default Profile;