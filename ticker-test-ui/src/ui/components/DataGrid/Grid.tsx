import GridData from "./GridData";
import GridHeader from "./GridHeader";
import { Table } from "./gridStyles";

const Grid = () => {
  return (
    <Table>
      <GridHeader />
      <GridData />
    </Table>
  );
};

export default Grid;