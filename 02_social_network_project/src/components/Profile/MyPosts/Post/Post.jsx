import s from './Post.module.scss'
import avatar from '../../../../img/avatar.jpeg'

const Post = (props) => {
    return (
      <li className={s.item}>
        <img src={avatar}></img>
        {props.title}
        <span className={s.likes}>Likes: {props.likes}</span>
      </li>
    )
}

export default Post;