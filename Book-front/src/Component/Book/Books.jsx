import { useState } from "react";
import BookArea from "./BookArea";
import AddBookArea from "../AddBook/AddBookArea";

const Books = () => {
  const [book, setBook] = useState(true);
  const border = "border-b-2 shadow-inner font-bold";
  const nullborder = "";
  return (
    <div className="">
      <div className="flex">
        <button
          className={`bg-[#183D3D] rounded-tl-xl py-3 w-1/2  ${book && border}`}
          onClick={() => setBook(true)}>
          Books
        </button>
        <button
          className={`bg-[#183D3D] rounded-tr-xl py-3 w-1/2 ${
            book ? nullborder : border
          }`}
          onClick={() => setBook(false)}>
          Add Books+
        </button>
      </div>
      <div>{book ? <BookArea></BookArea> : <AddBookArea></AddBookArea>}</div>
    </div>
  );
};

export default Books;
