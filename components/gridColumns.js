import { Icon, Button } from "semantic-ui-react";

const getStatus = status => {
  switch (status) {
    case 0:
      return (
        <div className="grid--applied">
          <span>Applied</span>
        </div>
      );
    case 1:
      return (
        <div className="grid--responded">
          <span>Responded</span>
        </div>
      );
    case 2:
      return (
        <div className="grid--rejected">
          <span>Rejected</span>
        </div>
      );
    default:
      return <div></div>;
  }
};

const columns = [
  {
    Header: "",
    expander: true
  },
  {
    id: "status",
    Header: "Status",
    Cell: rowInfo => {
      console.log(rowInfo);

      return getStatus(rowInfo.row.status);
    },
    getProps: (state, rowInfo, column) => {
      console.log(rowInfo);

      return {
        style: {
          borderLeftColor:
            rowInfo && rowInfo.row.status === 0
              ? "#fbbd08"
              : rowInfo && rowInfo.row.status === 1
              ? "#21ba45"
              : rowInfo && rowInfo.row.status === 2
              ? "#db2828"
              : "",
          borderLeftWidth: rowInfo ? "5px" : "",
          borderLeftStyle: rowInfo ? "solid" : "",
          boxSizing: "border-box"
        }
      };
    },
    accessor: "status"
  },
  {
    Header: "Date",
    accessor: "date"
  },
  {
    Header: "Company",
    accessor: "company"
  },
  {
    Header: "Title",
    accessor: "title"
  },
  {
    Header: "Location",
    accessor: "location"
  },
  {
    id: "url",
    Header: "Posting Link",
    accessor: props => <a href={props.url}>{props.url}</a>
  },
  {
    Header: "Follow Up?",
    accessor: "followUp",
    maxWidth: 150
  },
  {
    Header: "Phone Screen?",
    accessor: "phoneScreen",
    maxWidth: 150
  },
  {
    Header: "Tech Screen?",
    accessor: "techScreen",
    maxWidth: 150
  },
  {
    Header: "Onsite?",
    accessor: "onsite",
    maxWidth: 150
  },
  {
    Header: "Options",
    id: "delete",
    accessor: str => "delete",
    maxWidth: 115,
    minWidth: 115,
    Cell: row => {
      return (
        <div>
          <Button.Group compact size="mini" fluid>
            <Button color="blue">
              <Icon name="edit" fitted/>
            </Button>
            <Button.Or />
            <Button color="red">
              <Icon name="delete" fitted/>
            </Button>
          </Button.Group>
        </div>
      );
    }
  }
];

export default columns;
