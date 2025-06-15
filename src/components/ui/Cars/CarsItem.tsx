"use client";

import { useMemo } from "react";
import { Box, Typography, Card, CardContent, CardMedia } from "@mui/material";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import SpeedIcon from "@mui/icons-material/Speed";
import SettingsIcon from "@mui/icons-material/Settings";
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";
import PaletteIcon from "@mui/icons-material/Palette";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import { CarType } from "@/types";
import { Messages } from "@/constants/messages";
import Button from "@/components/library/Button";
import IconActionButton from "@/components/library/IconActionButton";
import { getMonthlyPayment } from "@/constants/math";
import styles from "./styles.module.scss";

type CarItemProps = CarType;

const CarItem: React.FC<CarItemProps> = ({
  mark_id,
  folder_id,
  images,
  price,
  modification_id,
  gearbox,
  run,
  color,
  engine_type,
  year,
}) => {
  const monthly = useMemo(() => getMonthlyPayment(price), [price]);

  return (
    <Card className={styles.card} elevation={2}>
      <CardMedia
        component="img"
        image={images.image[0]}
        alt={`${mark_id} ${folder_id}`}
        className={styles.image}
      />
      <CardContent className={styles.content}>
        <Typography
          variant="h6"
          sx={{ color: "var(--text-primary)", fontWeight: 500, mb: "4px" }}
        >
          {mark_id}
        </Typography>
        <Box className={styles.infoWrapper}>
          <Typography variant="h6" className={styles.price}>
            {price.toLocaleString("ru-RU")} ₽
          </Typography>
          <Typography variant="h6" color="text.secondary">
            от {monthly.toLocaleString("ru-RU")} ₽/мес
          </Typography>
        </Box>
        <Box className={styles.infoWrapper}>
          <DirectionsCarIcon
            className={styles.icon}
            sx={{ fontSize: "1rem" }}
          />
          <Typography variant="body2">{modification_id}</Typography>
        </Box>
        <Box className={styles.infoWrapper}>
          <Box className={styles.infoInner}>
            <SpeedIcon className={styles.icon} sx={{ fontSize: "1rem" }} />
            <Typography variant="body2">
              {run.toLocaleString("ru-RU")} км
            </Typography>
          </Box>

          <Box className={styles.infoInner}>
            <SettingsIcon className={styles.icon} sx={{ fontSize: "1rem" }} />
            <Typography variant="body2">{gearbox}</Typography>
          </Box>
        </Box>
        <Box className={styles.infoWrapper}>
          <Box className={styles.infoInner}>
            <LocalGasStationIcon
              className={styles.icon}
              sx={{ fontSize: "1rem" }}
            />
            <Typography variant="body2">{engine_type}</Typography>
          </Box>

          <Box className={styles.infoInner}>
            <PaletteIcon className={styles.icon} sx={{ fontSize: "1rem" }} />
            <Typography variant="body2">{color}</Typography>
          </Box>

          <Box className={styles.infoInner}>
            <CalendarTodayIcon
              className={styles.icon}
              sx={{ fontSize: "1rem" }}
            />
            <Typography variant="body2">{year}</Typography>
          </Box>
        </Box>

        <Box className={styles.actionsWrapper}>
          <Box className={styles.iconActions}>
            <IconActionButton
              icon={<FavoriteBorderIcon />}
              ariaLabel="like"
              title={Messages.Card.LIKE}
            />
            <IconActionButton
              icon={<BalanceIcon />}
              ariaLabel="compare"
              title={Messages.Card.COMPARE}
            />
          </Box>
          <Button>Купить</Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CarItem;
