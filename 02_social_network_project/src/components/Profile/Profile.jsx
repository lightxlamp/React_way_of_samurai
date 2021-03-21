import s from './Profile.module.scss'
import wallpaper from './../../img/wallpaper.jpeg'
import avatar from './../../img/avatar.jpeg'

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

        <section className={s.user_posts}>
          <section className="user-posts__new">New Post</section>
          <section className="new-post__list">
            <ul className="list-of-posts">
              <li>React vs Vue: What is the best choice for 2021?</li>
              <li>Isolated React component development environment with a living style guide</li>
              <li>GRID: A simple visual cheatsheet for CSS Grid Layout</li>
            </ul>
            </section>
        </section>
      </main>
    )
}

export default ProfilePage;