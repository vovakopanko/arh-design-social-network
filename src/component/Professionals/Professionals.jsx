import React from "react";
import style from "./Professionals.module.css";
import Pagination from "../common/Pagination/Pagination";
import Professional from "./Professional";
import Search from "./Search/Search";

const Professionals = ({
  searchName,
  totalUsersCount,
  pageSize,
  currentPage,
  onPageChanged,
  setPortionNumber,
  currentPortion,
  followingInProgress,
  follow,
  unfollow,
  startDialog,
  professionals,
}) => {
  return (
    <div className={style.professionals}>
      <div className={style.professionals__block}>
        <div className={style.professionals__title + " " + style.professionals__title_border}>
          Список специалистов:
        </div>
        <div >
          <div className={style.professionals__search}>
            <Search searchName={searchName} />
          </div>
          <div className={style.professionals__pagination}>
            <Pagination
              totalUsersCount={totalUsersCount}
              pageSize={pageSize}
              currentPage={currentPage}
              onPageChanged={onPageChanged}
              setPortionNumber={setPortionNumber}
              portionNumber={currentPortion}
            />
          </div>
          <div className={style.professionals__professional}>
            {professionals.map((u) => (
              <Professional
                key={u.id}
                user={u}
                followingInProgress={followingInProgress}
                follow={follow}
                unfollow={unfollow}
                startDialog={startDialog}
              />
            ))}
          </div>

          <div className={style.professionals__pagination_wight}>
            <span>{currentPage}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Professionals;
