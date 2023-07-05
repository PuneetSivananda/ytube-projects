import DashboardBox from "@/components/DashboardBox";
import { useGetKpisQuery } from "@/state/api";
import { useTheme } from "@mui/material";
import React, { useState } from "react";

type Props = {};

const Predictions = (props: Props) => {
  const { palette } = useTheme();
  const [isPredictions, setIsPredictions] = useState(false);
  const { data: kpiData } = useGetKpisQuery();
  return <DashboardBox>Sample Page</DashboardBox>;
};

export default Predictions;
