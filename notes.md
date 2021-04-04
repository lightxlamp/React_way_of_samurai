1) It is better to start name component with a capital letter. To avoid tags/components confusion (<header> / <Header>)
comment by Stas: Do not believe author =) Read react style guide. Because just noticed, we have <logo> tag in React sample app
2) JSX can return only 1 root element 
3) To use JSX we must import React/ {Component}
4) JSX: we are not in HTML, so write className not just a "class"
5) It is so easy to add SCSS... https://www.w3schools.com/react/react_sass.asp
6) Component used this way: <Header /> has { } as a props  
7) Component used this way: <Header name="Stas S." /> has { name: "Stas S." } as a props  
8) CRA = Create React App in docs
9) Using usual <a href="/profile">Profile</a> leads to page reloading. So for links we should use <NavLink to="/profile">Profile</NavLink> instead
10) UI - React. BLL (Business logic layer) - Redux
11) Simply, BrowserRouter syncs the UI with the current URL in your browser, This is done by the means of HTML-5 History API. On the other hand, HashRouter uses the Hash part of your URL to sync

### Links 
1) CSS Evolution: From CSS, SASS, BEM, CSS Modules to Styled Components - https://medium.com/@perezpriego7/css-evolution-from-css-sass-bem-css-modules-to-styled-components-d4c1da3a659b

2) A Beginner’s Guide To React Router - https://javascript.plainenglish.io/a-beginners-guide-to-react-router-34b4e86fded3
Just checked that in 2021 we still have to install "react-router-dom" for routing. (like it has been done in 2018-2019)
Added routes using this article. Not a video lesson

3) History API (NavLink - lesson) 
https://developer.mozilla.org/en-US/docs/Web/API/History_API
https://css-tricks.com/using-the-html5-history-api/

4) Lecture 23. Author missed 'active' class for dialog component. So how we can pass boolean:
https://spicefactory.co/blog/2019/03/26/how-to-avoid-the-boolean-trap-when-designing-react-components/
How to Avoid the “Boolean Trap” When Designing React Components =) Let's read
Read... Interesting. Nice part about Uncle Bob. But this one helped more: https://jaketrent.com/post/expose-enum-props-in-react

### Errors / Mistakes
1) Got "Error: Invariant failed: You should not use <NavLink> outside a <Router>". Because I've made decision to wrap
<Route>'s component with <Router> only. Instead of wrapping all <App> with <Nav> inside it