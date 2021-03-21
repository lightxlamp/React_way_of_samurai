import s from './Profile.module.scss'
import wallpaper from './../../img/wallpaper.jpeg'
import avatar from './../../img/avatar.jpeg'
import MyPosts from './MyPosts/MyPosts';

const ProfilePage = () => {
    return (
        <main className="App-main">

        <section className={s.user_wallpaper}>
          <figure>
            <img className="user-info__wallpaper" src={wallpaper}></img>
          </figure>
        </section>

        <section className={s.user_info}>
          <figure>
              <img className={s.user_info__avatar} src={avatar} 
                  alt="Avatar" />
              <figcaption>User avatar</figcaption>
          </figure>
        </section>

      <MyPosts></MyPosts>
      </main>
    )
}

export default ProfilePage;