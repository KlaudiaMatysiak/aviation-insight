import { Dispatch, SetStateAction, useEffect, useMemo, useState } from "react";
import { Document } from "../aviation-types";

function getPageList(totalPages: number, page: number, maxLength: number) {
  if (maxLength < 5) return [];
  function range(start: number, end: number) {
    return Array.from(Array(end - start + 1), (_, i) => i + start);
  }

  var sideWidth = maxLength < 9 ? 1 : 2;
  var leftWidth = (maxLength - sideWidth * 2 - 3) >> 1;
  var rightWidth = (maxLength - sideWidth * 2 - 2) >> 1;
  if (totalPages <= maxLength) {
    // no breaks in list
    return range(1, totalPages);
  }
  if (page <= maxLength - sideWidth - 1 - rightWidth) {
    // no break on left of page
    return range(1, maxLength - sideWidth - 1).concat(
      0,
      range(totalPages - sideWidth + 1, totalPages)
    );
  }
  if (page >= totalPages - sideWidth - 1 - rightWidth) {
    // no break on right of page
    return range(1, sideWidth).concat(
      0,
      range(totalPages - sideWidth - 1 - rightWidth - leftWidth, totalPages)
    );
  }
  // Breaks on both sides
  return range(1, sideWidth).concat(
    0,
    range(page - leftWidth, page + rightWidth),
    0,
    range(totalPages - sideWidth + 1, totalPages)
  );
}
interface PaginantionProps {
  pageSize: number;
  totalElements: number;
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
  position: string;
}

export default function Paginantion({
  pageSize,
  totalElements,
  page,
  setPage,
  position,
}: PaginantionProps) {
  const totalPages = useMemo(() => {
    return Math.ceil(totalElements / pageSize);
  }, [pageSize, totalElements]);

  const paginantionPages = useMemo(() => {
    return getPageList(totalPages, page, 6);
  }, [totalPages, page]);

  return (
    <>
      {totalElements > pageSize && (
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            <li className="page-item">
              <button
                className="page-link"
                aria-label="Previous"
                onClick={() => setPage((state) => Math.max(1, state - 1))}
              >
                <span aria-hidden="true">&laquo;</span>
              </button>
            </li>
            {paginantionPages?.map((pageNumber, i) => (
              <li
                key={`${pageNumber}-${position}-${i}`}
                className={`page-item${page === pageNumber ? " active" : ""}`}
              >
                <button
                  className="page-link"
                  disabled={!pageNumber}
                  onClick={() => setPage(pageNumber)}
                >
                  {pageNumber || "..."}
                </button>
              </li>
            ))}

            <li className="page-item">
              <button
                className="page-link"
                aria-label="Next"
                onClick={() =>
                  setPage((state) => Math.min(totalPages, state + 1))
                }
              >
                <span aria-hidden="true">&raquo;</span>
              </button>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
}
