import s from './MyPosts.module.scss'
import Post from './Post/Post';

const MyPosts = (props) => {
    debugger
    let postsList = props.postsData.map((post) => {
       return <Post title={post.title} likesCount={post.likes}></Post>; 
    })

    return (
        <section className={s.user_posts}><h3>My posts</h3>
            <section className={s.user_posts__new}>
                <textarea></textarea>
                <button>Add post</button>
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