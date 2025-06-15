"use client";

import { useRouter, useSearchParams } from "next/navigation";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { getPaginationPages } from "./helpers";
import styles from "./styles.module.scss";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
};

const Pagination = ({ currentPage, totalPages }: PaginationProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const goToPage = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", page.toString());
    router.push(`/?${params.toString()}`);
  };

  const pages = getPaginationPages(currentPage, totalPages);

  return (
    <div className={styles.pagination}>
      <button
        disabled={currentPage === 1}
        onClick={() => goToPage(currentPage - 1)}
        className={`${styles.arrow} ${currentPage === 1 ? styles.disabled : styles.active}`}
      >
        <ArrowBackIosNewIcon sx={{ fontSize: "13px" }} />
      </button>

      {pages.map((page, i) => (
        <button
          key={i}
          onClick={() => typeof page === "number" && goToPage(page)}
          disabled={page === "..."}
          className={`${styles.page} ${page === currentPage ? styles.current : ""}`}
        >
          {page}
        </button>
      ))}

      <button
        disabled={currentPage === totalPages}
        onClick={() => goToPage(currentPage + 1)}
        className={`${styles.arrow} ${currentPage === totalPages ? styles.disabled : styles.active}`}
      >
        <ArrowForwardIosIcon sx={{ fontSize: "13px" }} />
      </button>
    </div>
  );
};
export default Pagination;
