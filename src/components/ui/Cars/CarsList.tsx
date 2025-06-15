import { Box } from "@mui/material";
import { CarType } from "@/types";
import CarItem from "./CarsItem";
import styles from "./styles.module.scss";

type CarsListProps = {
  cars: CarType[];
};

const CarsList: React.FC<CarsListProps> = ({ cars }) => {
  return (
    <Box className={styles.wrapper}>
      {cars.map((item: CarType) => (
        <CarItem {...item} key={item.unique_id} />
      ))}
    </Box>
  );
};

export default CarsList;
