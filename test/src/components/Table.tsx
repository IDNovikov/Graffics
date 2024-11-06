import Line from "./line/Line";
import { IData } from "../types";

type TableProps = {
  data: IData[];
};

const Table: React.FC<TableProps> = ({ data }) => {
  return (
    <>
      {data.map((elem, index: number) => {
        return <Line Elem={elem} key={index} />;
      })}
    </>
  );
};

export default Table;
