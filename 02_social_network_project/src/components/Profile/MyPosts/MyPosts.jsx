import s from './MyPosts.module.scss'
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <section className={s.user_posts}><h3>My posts</h3>
            <section className={s.user_posts__new}>
                <textarea></textarea>
                <button>Add post</button>
            </section>
            <section className={s.posts_list}>
                <ul className={s.list_of_posts}>
                    <Post title="React vs Vue: What is the best choice for 2021?" likesCount="78"></Post>
                    <Post title="Isolated React component development environment with a living style guide"
                          likesCount="183"></Post>
                    <Post title="GRID: A simple visual cheatsheet for CSS Grid Layout" likesCount="1721"></Post>
                </ul>
            </section>
        </section>
    )
}

export default MyPosts;