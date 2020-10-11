import React from "react";
import style from "./Professionals.module.css";
import Pagination from "../common/Pagination/Pagination";
import Professional from "./Professional";
import Search from "./Search/Search";

const Professionals = (props) => {
  return (
    <div className={style.wrapper}>
      <div className={style.poginator}>
        <div className={style.searchName}>
          <Search searchName={props.searchName} />
        </div>
        <Pagination
          totalUsersCount={props.totalUsersCount}
          pageSize={props.pageSize}
          currentPage={props.currentPage}
          onPageChanged={props.onPageChanged}
          setPortionNumber={props.setPortionNumber}
          portionNumber={props.currentPortion}
        />
      </div>

      <div>
        {props.professionals.map((u) => (
          <Professional
            key={u.id}
            user={u}
            followingInProgress={props.followingInProgress}
            follow={props.follow}
            unfollow={props.unfollow}
            startDialog={props.startDialog}
          />
        ))}
      </div>
      <div className={style.currentPage}>
        <span>{props.currentPage}</span>
      </div>
    </div>
  );
};

export default Professionals;
