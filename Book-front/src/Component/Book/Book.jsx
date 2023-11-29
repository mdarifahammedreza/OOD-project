const Book = () => {
  return (
    <div>
      <div className=" bg-[#5C8374] shadow-xl rounded-sm">
        <div className="card-body">
          <h2 className="card-title text-[#93B1A6]">BookName</h2>
          <p>If a dog chews shoes whose</p>
          <div className="card-actions justify-center">
            <button className="py-2 px-3 rounded-xl hover:text-emerald-400 text-[#93B1A6] bg-[#183D3D]">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
