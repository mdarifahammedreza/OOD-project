import Book from "./Book";

const BookArea = () => {
  return (
    <div className="grid grid-cols-3 gap-4">
      <Book></Book>
      <Book></Book>
      <Book></Book>
      <Book></Book>
      <Book></Book>
    </div>
  );
};

export default BookArea;
