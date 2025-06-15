"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Select, MenuItem, FormControl } from "@mui/material";
import { SelectChangeEvent } from '@mui/material/Select';
import { SortOption } from "@/types";
import { Messages } from "@/constants/messages";
import styles from "./styles.module.scss";

const options: { value: SortOption; label: string }[] = [
  { value: "default", label: Messages.Sorting.DEFAULT },
  { value: "price_asc", label: Messages.Sorting.ASC },
  { value: "price_desc", label: Messages.Sorting.DESC },
];

const Sorting = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const sortParam = searchParams.get("sort") || "default";

  // const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
  //   const value = event.target.value as SortOption;
  //   const params = new URLSearchParams(searchParams.toString());

  //   if (value === "default") {
  //     params.delete("sort");
  //   } else {
  //     params.set("sort", value);
  //   }
  //   params.set("page", "1");
  //   router.push(`/?${params.toString()}`);
  // };
  const handleChange = (event: SelectChangeEvent) => {
    const value = event.target.value as SortOption;
    const params = new URLSearchParams(searchParams.toString());
  
    if (value === "default") {
      params.delete("sort");
    } else {
      params.set("sort", value);
    }
    params.set("page", "1");
    router.push(`/?${params.toString()}`);
  };

  return (
    <FormControl className={styles.form} size="small">
      <Select
        value={sortParam}
        onChange={handleChange}
        displayEmpty
        sx={{ color: "var(--secondary-main)" }}
      >
        {options.map((opt) => (
          <MenuItem key={opt.value} value={opt.value}>
            {opt.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default Sorting;
