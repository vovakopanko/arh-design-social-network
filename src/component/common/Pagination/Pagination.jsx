import React from "react";
import style from "./../../Professionals/Professionals.module.css";

const Pagination = ({
  totalUsersCount,
  pageSize,
  currentPage,
  onPageChanged,
  portionSize = 7,
  portionNumber,
  setPortionNumber,
}) => {
  let pagesCount = Math.ceil(totalUsersCount / pageSize);
  let portionCount = Math.ceil(pagesCount / portionSize);
  let leftPageNumber = (portionNumber - 1) * portionSize + 1;
  let rightPageNumber = portionSize * portionNumber;

  let pages = [];
  for (let i = leftPageNumber; i <= rightPageNumber; i++) {
    pages.push(i);
  }

  return (
    <div className={style.paginator}>
      <span className={style.leftbutton}>
        {portionNumber > 1 && (
          <span
            onClick={() => {
              // setPortionNumber(portionNumber - 1);
              setPortionNumber(portionNumber - 1);
            }}
          >
            <b>LAST</b>
          </span>
        )}
      </span>

      {pages.map((p) => {
        return (
          <span
            className={currentPage === p && style.active}
            key={p.id}
            onClick={() => {
              onPageChanged(p);
            }}
          >
            {p + " "}
          </span>
        );
      })}

      <span className={style.rightbutton}>
        {portionCount > portionNumber && (
          <span
            onClick={() => {
              // setPortionNumber(portionNumber + 1);
              setPortionNumber(portionNumber + 1);
            }}
          >
            <b>NEXT</b>
          </span>
        )}
      </span>
    </div>
  );
};

export default Pagination;
