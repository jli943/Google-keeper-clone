import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [lists, updateLists] = React.useState([]);

  function addLists(title, content) {
    const list = { Title: title, Content: content };
    updateLists((preValue) => {
      return [...preValue, list];
    });
  }

  function deleteList(id) {
    updateLists(
      lists.filter((list, index) => {
        return index !== id;
      })
    );
  }

  return (
    <div>
      <Header />
      <CreateArea addLists={addLists} />
      <Note
        key={0}
        title="Note title"
        content="Note content"
        deleteList={deleteList}
      />
      {lists.map((list, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={list.Title}
            content={list.Content}
            deleteList={deleteList}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
