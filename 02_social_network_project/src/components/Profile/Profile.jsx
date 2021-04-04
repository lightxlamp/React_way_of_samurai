import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const ProfilePage = (props) => {
    return (
        <main>
            <ProfileInfo></ProfileInfo>
            <MyPosts PostsData={props.PostsData}></MyPosts>
        </main>
    )
} 

export default ProfilePage;