import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { IData } from "../types";

type GrafProps = {
  dataLine: IData[];
};

const Graf: React.FC<GrafProps> = ({ dataLine }) => {
  const lineData = dataLine[0];
  const data = lineData
    ? [
        {
          name: "Вчера",
          param: lineData.lastDay,
        },
        {
          name: "Текущий день",
          param: lineData.thisDay,
        },
        {
          name: "Этот день недели",
          param: lineData.dayOfWeek,
        },
      ]
    : [];

  return (
    <ResponsiveContainer width={"100%"} height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="param"
          stroke="#11d131"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};
export default Graf;
