"use client";

const Pagination = ({ page, lastPage }: any) => {
  return (
    <div>
      <div>Ini adalah Pagination</div>
      <div className="flex">
        <button onClick={() => previousPage()}>-</button>
        <div>
          {page} of {lastPage}
        </div>
        <button onClick={() => nextPage()}>+</button>
      </div>
    </div>
  );
};

export default Pagination;
