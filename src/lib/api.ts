import { Errors } from "@/constants/errors";

export async function getCars({ page = 1, limit = 12, sort = "default" }) {
  const params = new URLSearchParams({
    _page: String(page),
    _limit: String(limit),
  });

  if (sort !== "default") {
    const [sortField, sortOrder] = sort.split("_");
    params.set("_sort", sortField);
    params.set("_order", sortOrder);
  }

  const res = await fetch(`/api/cars?${params.toString()}`);

  if (!res.ok) throw new Error(Errors.FAILED_TO_FETCH);

  const response = await res.json();
  const allCars = response.data;
  const totalItems = allCars.length;
  const totalPages = Math.ceil(totalItems / limit);
  const start = (page - 1) * limit;
  const end = start + limit;

  return {
    data: allCars.slice(start, end),
    meta: {
      page,
      totalPages,
    },
  };
}
