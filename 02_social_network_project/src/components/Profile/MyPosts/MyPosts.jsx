import s from './MyPosts.module.scss'
import Post from './Post/Post';

const MyPosts = (props) => {
    let postsList = props.PostsData.map((post) => {
       return <Post title={post.title} likesCount={post.likes}></Post>; 
    })

    return (
        <section className={s.user_posts}><h3>My posts</h3>
            <section className={s.user_posts__new}>
                <textarea></textarea>
                <button onClick={() => {alert('1')}}>Add post</button>
            </section>
            <section className={s.posts_list}>
                <ul className={s.list_of_posts}>
                    {postsList}
                </ul>
            </section>
        </section>
    )
}

export default MyPosts;