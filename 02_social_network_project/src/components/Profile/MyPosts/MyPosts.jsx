import s from './MyPosts.module.scss'
import Post from './Post/Post';

const MyPosts = () => {

    let postsData = [
        {id: 1, title: 'React vs Vue: What is the best choice for 2021?', likes: 78},        
        {id: 2, title: 'Isolated React component development environment with a living style guide', likes: 183},        
        {id: 3, title: 'GRID: A simple visual cheatsheet for CSS Grid Layout', likes: 1721},        
    ]

    let postsList = postsData.map((post) => {
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