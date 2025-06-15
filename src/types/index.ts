export type CarType = {
  readonly unique_id: number;
  readonly mark_id: string;
  readonly folder_id: string;
  modification_id: string;
  images: {
    image: string[];
  };
  price: number;
  gearbox: string;
  run: number;
  color: string;
  engine_type: string;
  year: string;
};

export type PaginationMeta = {
  page: number;
  totalPages: number;
};

export type SortOption = "default" | "price_asc" | "price_desc";
