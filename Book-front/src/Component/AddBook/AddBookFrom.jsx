import axios from "axios";
const AddBookFrom = () => {
  const formhandle = (e) => {
    e.preventDefault();
    const CatagoryName = e.target.category.value;
    const BookName = e.target.name.value;

    axios
      .post("http://localhost:8081/api/v1/books", {
        category: CatagoryName,
        name: BookName,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div>
      <p>Add Book</p>
      <div className="mb-5">
        <form action="" method="post" className="p-10" onSubmit={formhandle}>
          <div className="flex justify-start flex-col">
            <label htmlFor="" className="text-left font-semibold mb-1">
              Category name:
            </label>
            <input
              type="text"
              placeholder="Category name"
              className=" mb-5 input input-bordered input-info w-full"
              name="category"
              id="category"
            />
          </div>
          <div className="flex justify-start flex-col">
            <label htmlFor="" className="text-left font-semibold mb-1">
              Book name:
            </label>
            <input
              type="text"
              placeholder="Book name"
              className=" mb-5 input input-bordered input-info w-full"
              name="name"
              id="name"
            />
          </div>
          <input className="btn btn-info w-full" type="submit" />
        </form>
        <p>
          Alredy have the book?To update{" "}
          <button>
            <u>clickhere</u>
          </button>
        </p>
      </div>
    </div>
  );
};

export default AddBookFrom;
