import React, { useState } from "react";

export const AddPostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // const onTitleChanged = (e) => setTitle(e.target.value);
  const handleChangeTitle = (e) => setTitle(e.target.value);

  // const onContentChanged = (e) => setContent(e.target.value);
  const handleChangeContent = (e) => setContent(e.target.value);

  return (
    <section>
      <h2>Add a New Post</h2>
      <form>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={handleChangeTitle}
        />
        <label htmlFor="postContent">Content:</label>
        <textarea
          id="postContent"
          name="postContent"
          value={content}
          onChange={handleChangeContent}
        />
        <button type="button">Save Post</button>
      </form>
    </section>
  );
};
