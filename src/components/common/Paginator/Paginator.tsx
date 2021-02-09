import React from "react";
import s from "./Paginator.module.css";

export type PaginatorProps = {
    pageSize: number,
    totalUsersCount: number,
    onPageChanged: (pageNumber: number) => void,
    currentPage: number,
}

const Paginator: React.FC<PaginatorProps> = ({totalUsersCount, pageSize, onPageChanged, currentPage, ...props}) => {

    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages: Array<number> = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
            {pages.map(p => {
                // @ts-ignore
                return <span className={currentPage === p && s.selectedPage}
                             onClick={(e) => {
                                 onPageChanged(p)
                             }}
                >{p}</span>
            })}

    </div>
}

export default Paginator;