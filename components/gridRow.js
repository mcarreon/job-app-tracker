import { Table, Accordion, Label } from "semantic-ui-react";

const GridRow = ({data}) => {
  return (
    <Table.Row>
      <Table.Cell>{data[0]}</Table.Cell>
      <Table.Cell>{data[1]}</Table.Cell>
      <Table.Cell>{data[2]}</Table.Cell>
      <Table.Cell>{data[3]}</Table.Cell>
      <Table.Cell>{data[4]}</Table.Cell>
      <Table.Cell>{data[5]}</Table.Cell>
      <Table.Cell>{data[6]}</Table.Cell>
      <Table.Cell>{data[7]}</Table.Cell>
      <Table.Cell>{data[8]}</Table.Cell>
    </Table.Row>
  );
};

export default GridRow;
