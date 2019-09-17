import { Table, Label, Menu, Icon, Button, Checkbox } from "semantic-ui-react";
import ReactTable from "react-table";
import { useState, useEffect } from "react";
import "react-table/react-table.css";

import GridExpand from "./GridExpand";

const JobGrid = (props) => {
  const { data } = props;

  const toggleCheck = (column, key) => {
    const index = data.findIndex(x => x.id === key);
    const newArr = [...data];
    newArr[index][column] = !newArr[index][column];
    setData(newArr);
  };

  const handleDelete = key => {
    const index = data.findIndex(x => x.id === key);
    const newArr = [...data];
    newArr.splice(index, 1);
    console.log(newArr);

    setData(newArr);
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
        return getStatus(rowInfo.row.status);
      },
      getProps: (state, rowInfo, column) => {
        return {
          style: {
            borderLeftColor:
              rowInfo && rowInfo.row.status === 0
                ? "#fbbd08"
                : rowInfo && rowInfo.row.status === 1
                ? "#2185D0"
                : rowInfo && rowInfo.row.status === 2
                ? "#21ba45"
                : rowInfo && rowInfo.row.status === -1
                ? "black"
                : rowInfo && rowInfo.row.status === -2
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
      id: "followup",
      Header: "Follow Up?",
      accessor: "followUp",
      Cell: rowInfo => {
        return (
          <div>
            <Checkbox
              checked={rowInfo.row.followup ? true : false}
              onChange={() => toggleCheck("followUp", rowInfo.original.id)}
            />
          </div>
        );
      },
      getHeaderProps: () => {
        return {
          style: {
            borderLeft: "5px solid rgba(0,0,0,0.05)"
          }
        };
      },
      getProps: (state, rowInfo, column) => {
        return {
          style: {
            ...getCheckStyle(rowInfo, column),
            borderLeft: rowInfo ? "5px solid rgba(0,0,0,0.05)" : "none"
          }
        };
      },
      maxWidth: 100
    },
    {
      id: "phonescreen",
      Header: "Phone Screen?",
      accessor: "phoneScreen",
      Cell: rowInfo => {
        return (
          <div>
            <Checkbox
              checked={rowInfo.row.phonescreen ? true : false}
              onChange={() => toggleCheck("phoneScreen", rowInfo.original.id)}
            />
          </div>
        );
      },
      getProps: (state, rowInfo, column) => {
        return { style: getCheckStyle(rowInfo, column) };
      },
      maxWidth: 125
    },
    {
      id: "techscreen",
      Header: "Tech Screen?",
      accessor: "techScreen",
      Cell: rowInfo => {
        return (
          <div>
            <Checkbox
              checked={rowInfo.row.techscreen ? true : false}
              onChange={() => toggleCheck("techScreen", rowInfo.original.id)}
            />
          </div>
        );
      },
      getProps: (state, rowInfo, column) => {
        return { style: getCheckStyle(rowInfo, column) };
      },
      maxWidth: 115
    },
    {
      id: "onsite",
      Header: "Onsite?",
      accessor: "onsite",
      Cell: rowInfo => {
        return (
          <div>
            <Checkbox
              checked={rowInfo.row.onsite ? true : false}
              onChange={() => toggleCheck("onsite", rowInfo.original.id)}
            />
          </div>
        );
      },
      getProps: (state, rowInfo, column) => {
        return { style: getCheckStyle(rowInfo, column) };
      },
      maxWidth: 75
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
                <Icon name="edit" fitted />
              </Button>
              <Button.Or />
              <Button color="red" onClick={() => handleDelete(row.original.id)}>
                <Icon name="trash" fitted />
              </Button>
            </Button.Group>
          </div>
        );
      }
    }
  ];

  return (
    <div>
      <ReactTable
        data={data}
        loading={data ? false : true}
        columns={columns}
        pageSizeOptions={[10, 15, 20, 25, 50, 100]}
        defaultPageSize={20}
        className="-highlight"
        SubComponent={row => {
          return (
            <GridExpand
              desc={row.original.desc}
              notes={row.original.notes}
              stack={row.original.stack}
            />
          );
        }}
        getTdProps={(state, rowInfo, column) => {
          return {
            style: {
              display: "flex",
              flexDirection: "column",
              justifyContent: "center"
            }
          };
        }}
      />
    </div>
  );
};

const getStatus = status => {
  switch (status) {
    case -2:
      return (
        <div className="grid--rejected">
          <span>Rejected</span>
        </div>
      );
    case -1:
      return (
        <div className="grid--not-applied">
          <span>Haven't Applied</span>
        </div>
      );
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
        <div className="grid--accepted">
          <span>Accepted</span>
        </div>
      );
    default:
      return <div></div>;
  }
};

const getCheckStyle = (rowInfo, column) => {
  return {
    backgroundColor:
      rowInfo && rowInfo.row[column.id] == 0
        ? "rgba(251, 191, 9, 0.1)"
        : rowInfo && rowInfo.row[column.id] == 1
        ? "rgba(33, 186, 69, 0.1)"
        : "rgba(0, 0, 0, 0)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  };
};

export default JobGrid;
