import React from "react";
import style from "./../Pagination/Paginator.module.css";

type PropsType = {
  totalUsersCount:number
  pageSize: number
  currentPage : number
  onPageChanged : (leftPageNumber:number)=>void
  portionSize : number
  portionNumber : number
  setPortionNumber : (portionNumber:number)=>number
}

const Pagination: React.FC<PropsType> = ({
  totalUsersCount,
  pageSize,
  currentPage,
  onPageChanged,
  portionSize = 5,
  portionNumber,
  setPortionNumber,
}) => {
  let pagesCount = Math.ceil(totalUsersCount / pageSize);
  let portionCount = Math.ceil(pagesCount / portionSize);
  let leftPageNumber = (portionNumber - 1) * portionSize + 1;
  let rightPageNumber = portionSize * portionNumber;

  let pages:Array<number> = [];
  for (let i = leftPageNumber; i <= rightPageNumber; i++) {
    pages.push(i);
  }

  return (
    <div className={style.professionals__pagination}>
      <span
        className={
          style.pagination__button + " " + style.pagination__button_left
        }
      >
        {portionNumber > 1 && (
          <span
            onClick={() => {
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
          //@ts-ignore
          className={currentPage === p && style.pagination_active} Добавить пагинацию жирным
            key={p}
            onClick={() => {
              onPageChanged(p);
            }}
          >
            {p + " "}
          </span>
        );
      })}

      <span
        className={
          style.pagination__button + " " + style.pagination__button_right
        }
      >
        {portionCount > portionNumber && (
          <span
            onClick={() => {
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
