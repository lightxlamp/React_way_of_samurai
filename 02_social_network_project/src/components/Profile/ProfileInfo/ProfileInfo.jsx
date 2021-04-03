import s from './ProfileInfo.module.scss'
import wallpaper from './../../../img/wallpaper.jpeg'
import avatar from './../../../img/avatar.jpeg'

const ProfileInfo = () => {
    return (
        <div>
            <section className={s.user_wallpaper}>
                <figure>
                    <img className="user-info__wallpaper" src={wallpaper}></img>
                </figure>
            </section>

            <section className={s.user_info}>
                <figure>
                    <img className={s.user_info__avatar} src={avatar}
                         alt="Avatar"/>
                    <figcaption>User avatar</figcaption>
                </figure>
            </section>

        </div>
    )
}

export default ProfileInfo;