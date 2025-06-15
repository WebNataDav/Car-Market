"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Box } from "@mui/material";
import { getCars } from "@/lib/api";
import { Errors } from "@/constants/errors";
import { CarType, PaginationMeta } from "@/types";
import CarsList from "@/components/ui/Cars/CarsList";
import Pagination from "@/components/library/Pagination";
import Sorting from "@/components/library/Sorting";
import styles from "./styles.module.scss";

const CarCatalog = () => {
  const [cars, setCars] = useState<CarType[]>([]);
  const [meta, setMeta] = useState<PaginationMeta>({ page: 1, totalPages: 1 });
  const [loading, setLoading] = useState(true);

  const searchParams = useSearchParams();

  const page = searchParams.get("page") || "1";
  const sort = searchParams.get("sort") || "default";
  const currentPage = parseInt(page, 10);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const { data, meta } = await getCars({ page: currentPage, sort });
        setCars(data);
        setMeta(meta);
      } catch (error) {
        console.error(Errors.FAILED_TO_FETCH, error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [searchParams]);

  return (
    <Box className={styles.wrapper}>
      <h1 className={styles.title}>Car Catalog</h1>
      {!loading && (
        <Box className={styles.sortingWrapper}>
          <Sorting />
        </Box>
      )}
      {loading && <p>Loading...</p>}
      {cars.length > 0 && !loading && <CarsList cars={cars} />}
      {meta.totalPages > 1 && !loading && (
        <Pagination currentPage={meta.page} totalPages={meta.totalPages} />
      )}
    </Box>
  );
};

export default CarCatalog;
