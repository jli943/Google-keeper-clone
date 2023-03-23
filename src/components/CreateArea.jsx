import React from "react";

function CreateArea(props) {
  const [title, updateTitle] = React.useState("");
  const [content, updateContent] = React.useState("");

  function changeTitle(event) {
    const updatedTitle = event.target.value;
    updateTitle(updatedTitle);
  }

  function changeContent(event) {
    const updatedContent = event.target.value;
    updateContent(updatedContent);
  }
  return (
    <div>
      <form
        onSubmit={(event) => {
          props.addLists(title, content);
          updateTitle("");
          updateContent("");
          event.preventDefault();
        }}
      >
        <input
          name="title"
          placeholder="Title"
          onChange={changeTitle}
          value={title}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          onChange={changeContent}
          value={content}
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
