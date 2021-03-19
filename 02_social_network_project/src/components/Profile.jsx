const ProfilePage = () => {
    return (
        <main className="App-main">

        <section className="user-wallpaper">
          <figure>
            <img className="user-info__wallpaper" src='https://res.cloudinary.com/practicaldev/image/fetch/s--dkFxTwJ2--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/ux6uf870i7esod0sx4sw.png'></img>
          </figure>
        </section>

        <section className="user-info">
          <figure>
              <img className="user-info__avatar" src="https://lh3.googleusercontent.com/proxy/cv0VyZgXfUWmvOVtUs1mOUrIg5iuAZkbkykAFAH6i8ei80OfT4iOPdAzcjZClk4s3Y81TYayjXKDJvJ7kibqIY5G1Q"
                  alt="Avatar" />
              <figcaption>User avatar</figcaption>
          </figure>
        </section>

        <section className="user-posts">
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