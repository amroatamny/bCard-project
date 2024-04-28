import React, { useState, MouseEvent } from "react";

interface post {
  title: string;
  subtitle: string;
  author: string;
  cratedAt: any;
}

type Event = MouseEvent<HTMLButtonElement>;

const SetPost = () => {
  const INITIAL_POST = {
    title: "",
    subtitle: "",
    author: "",
    cratedAt: `${new Date()}`,
  };

  const [isLogged, setIsLogged] = useState(false);
  const [post, setPost] = useState(INITIAL_POST);
  const [posts, setPosts] = useState<[] | post[]>([]);

  const createNewPost = (e: Event) => {
    e.preventDefault();
    setPosts((prev) => [...prev, post]);
    return setPost(INITIAL_POST);
  };
  return (
    <div style={{ padding: 16, backgroundColor: "#684300" }}>
      <p>is the user logged : {isLogged ? " logged" : "not logged"}</p>

      <button
        style={{ padding: 2, margin: 1 }}
        onClick={() => {
          setIsLogged((prev) => (prev = !prev));
        }}
      >
        change log status{" "}
      </button>

      {isLogged && (
        <form style={{ display: `${isLogged ? "block" : "none"}` }}>
          {" "}
          <h1>title: {post.title}</h1>
          <h2>subtitle: {post.subtitle}</h2>
          <p>author: {post.author}</p>
          <input
            type="text"
            placeholder="enter a title "
            onChange={(e) =>
              setPost((prev) => ({ ...prev, title: e.target.value }))
            }
            value={post.title}
          />
          <br />
          <input
            type="text"
            placeholder="enter a subtitle "
            onChange={(e) =>
              setPost((prev) => ({ ...prev, subtitle: e.target.value }))
            }
            value={post.subtitle}
          />
          <br />
          <input
            type="text"
            placeholder="enter a author "
            onChange={(e) =>
              setPost((prev) => ({ ...prev, author: e.target.value }))
            }
            value={post.author}
          />
          <br />
          <button
            onClick={createNewPost}
            disabled={!post.title && !post.author && !post.subtitle}
          >
            {" "}
            create new post{" "}
          </button>
          <ul>
            {posts.map((post, index) => (
              <li key={index}>
                <h1>new post</h1>
                <p>title: {post.title}</p>
                <p>subtitle: {post.subtitle}</p>
                <p>author: {post.author}</p>
                <p>date: {post.cratedAt}</p>
              </li>
            ))}
          </ul>
        </form>
      )}
    </div>
  );
};

export default SetPost;
