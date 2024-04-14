import React from "react";
import { PaginationPropsType } from "@/app/_components/Crud/types";
import Button from "@/app/_components/Button";

function Pagination(props: PaginationPropsType) {
  const [totalPages, setTotalPages] = React.useState(
    Math.floor(props.totalItems / props.itemsPerPage),
  );

  React.useEffect(() => {
    setTotalPages(Math.floor(props.totalItems / props.itemsPerPage));
  }, [props.totalItems, props.itemsPerPage]);

  const pages = [];
  for (
    let pageIndex = Math.max(0, props.currentPage - 2);
    pageIndex <= Math.min(props.currentPage + 2, totalPages);
    ++pageIndex
  ) {
    pages.push({
      pageIndex,
      label: pageIndex + 1,
    });
  }

  return (
    <div className="flex flex-row bg-primary-500 rounded-md">
      <Button
        disabled={props.currentPage === 0}
        onClick={() => props.onPageChange(0)}
      >
        <svg
          className="w-3 h-3 rtl:rotate-180"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 6 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 1 1 5l4 4"
          />
        </svg>
      </Button>
      <Button
        disabled={props.currentPage === 0}
        onClick={() => props.onPageChange(props.currentPage - 1)}
      >
        <svg
          className="w-2.5 h-2.5 rtl:rotate-180"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 6 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 1 1 5l4 4"
          />
        </svg>
      </Button>

      {pages.map((page) => {
        return (
          <Button
            key={page.pageIndex}
            onClick={() => props.onPageChange(page.pageIndex)}
            active={page.pageIndex === props.currentPage}
            disabled={page.pageIndex === props.currentPage}
          >
            {page.label}
          </Button>
        );
      })}

      <Button
        disabled={props.currentPage === totalPages}
        onClick={() => props.onPageChange(props.currentPage + 1)}
      >
        <svg
          className="w-2.5 h-2.5 rtl:rotate-180"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 6 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 9 4-4-4-4"
          />
        </svg>
      </Button>
      <Button
        disabled={props.currentPage === totalPages}
        onClick={() => props.onPageChange(totalPages)}
      >
        <svg
          className="w-3 h-3 rtl:rotate-180"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 6 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 9 4-4-4-4"
          />
        </svg>
      </Button>
    </div>
  );
}

export default Pagination;
