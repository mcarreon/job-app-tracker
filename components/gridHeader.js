import { Table } from "semantic-ui-react";

const GridHeader = () => (
  <Table.Header>
    <Table.Row>
      <Table.HeaderCell>Date</Table.HeaderCell>
      <Table.HeaderCell>Company</Table.HeaderCell>
      <Table.HeaderCell>Position</Table.HeaderCell>
      <Table.HeaderCell>Location</Table.HeaderCell>
      <Table.HeaderCell>Posting Link</Table.HeaderCell>
      <Table.HeaderCell>Follow-up Contact</Table.HeaderCell>
      <Table.HeaderCell>Phone Screen</Table.HeaderCell>
      <Table.HeaderCell>Tech Screen/Assignment</Table.HeaderCell>
      <Table.HeaderCell>Onsite</Table.HeaderCell>
    </Table.Row>
  </Table.Header>
);

export default GridHeader;
