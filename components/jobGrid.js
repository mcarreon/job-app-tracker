import { Table, Label, Menu, Icon, Accordion, Tab } from "semantic-ui-react";
import ReactTable from "react-table";
import { useState, useEffect } from 'react';
import "react-table/react-table.css";
import columns from './gridColumns';

const list = [
  {
    date: "9/1/2019",
    company: "Versus Systems",
    title: "Software Engineer",
    location: "Los Angeles, CA",
    url: "https://www.versussystems.com/careers?gh_jid=1258339",
    followUp: "False",
    phoneScreen: "False",
    techScreen: "False",
    onsite: "False",
    status: 0,
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse imperdiet ut neque nec faucibus. Nam a magna eros. Sed tincidunt nunc vitae ullamcorper mollis. Maecenas sodales quam vel nulla commodo, eu pellentesque ex dapibus. Donec eget massa elit.",
    stack: ["React", "Redux", "Node", "Express"],
    notes:
      "Donec eget massa elit. Curabitur tristique, nunc elementum malesuada congue, enim orci rutrum ipsum, sit amet viverra nisl nulla quis augue. Nunc eget sem quis libero porttitor consequat. Cras maximus tellus eget massa cursus dignissim. Vestibulum non semper lacus."
  },
  {
    date: "9/1/2019",
    company: "Bersus Systems",
    title: "Software Engineer",
    location: "Los Angeles, CA",
    url: "https://www.versussystems.com/careers?gh_jid=1258339",
    followUp: "False",
    phoneScreen: "False",
    techScreen: "False",
    onsite: "False",
    status: 1,
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse imperdiet ut neque nec faucibus. Nam a magna eros. Sed tincidunt nunc vitae ullamcorper mollis. Maecenas sodales quam vel nulla commodo, eu pellentesque ex dapibus. Donec eget massa elit.",
    stack: ["React", "Redux", "Node", "Express"],
    notes:
      "Donec eget massa elit. Curabitur tristique, nunc elementum malesuada congue, enim orci rutrum ipsum, sit amet viverra nisl nulla quis augue. Nunc eget sem quis libero porttitor consequat. Cras maximus tellus eget massa cursus dignissim. Vestibulum non semper lacus."
  },
  {
    date: "9/1/2019",
    company: "Versus Systems",
    title: "Software Engineer",
    location: "Los Angeles, CA",
    url: "https://www.versussystems.com/careers?gh_jid=1258339",
    followUp: "False",
    phoneScreen: "False",
    techScreen: "False",
    onsite: "False",
    status: 1,
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse imperdiet ut neque nec faucibus. Nam a magna eros. Sed tincidunt nunc vitae ullamcorper mollis. Maecenas sodales quam vel nulla commodo, eu pellentesque ex dapibus. Donec eget massa elit.",
    stack: ["React", "Redux", "Node", "Express"],
    notes:
      "Donec eget massa elit. Curabitur tristique, nunc elementum malesuada congue, enim orci rutrum ipsum, sit amet viverra nisl nulla quis augue. Nunc eget sem quis libero porttitor consequat. Cras maximus tellus eget massa cursus dignissim. Vestibulum non semper lacus."
  },
  {
    date: "9/1/2019",
    company: "Versus Systems",
    title: "Software Engineer",
    location: "Los Angeles, CA",
    url: "https://www.versussystems.com/careers?gh_jid=1258339",
    followUp: "False",
    phoneScreen: "False",
    techScreen: "False",
    onsite: "False",
    status: 2,
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse imperdiet ut neque nec faucibus. Nam a magna eros. Sed tincidunt nunc vitae ullamcorper mollis. Maecenas sodales quam vel nulla commodo, eu pellentesque ex dapibus. Donec eget massa elit.",
    stack: ["React", "Redux", "Node", "Express"],
    notes:
      "Donec eget massa elit. Curabitur tristique, nunc elementum malesuada congue, enim orci rutrum ipsum, sit amet viverra nisl nulla quis augue. Nunc eget sem quis libero porttitor consequat. Cras maximus tellus eget massa cursus dignissim. Vestibulum non semper lacus."
  },
  {
    date: "9/1/2019",
    company: "Versus Systems",
    title: "Software Engineer",
    location: "Los Angeles, CA",
    url: "https://www.versussystems.com/careers?gh_jid=1258339",
    followUp: "False",
    phoneScreen: "False",
    techScreen: "False",
    onsite: "False",
    status: 0,
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse imperdiet ut neque nec faucibus. Nam a magna eros. Sed tincidunt nunc vitae ullamcorper mollis. Maecenas sodales quam vel nulla commodo, eu pellentesque ex dapibus. Donec eget massa elit.",
    stack: ["React", "Redux", "Node", "Express"],
    notes:
      "Donec eget massa elit. Curabitur tristique, nunc elementum malesuada congue, enim orci rutrum ipsum, sit amet viverra nisl nulla quis augue. Nunc eget sem quis libero porttitor consequat. Cras maximus tellus eget massa cursus dignissim. Vestibulum non semper lacus."
  }
];

const JobGrid = () => {

  const [data, setData] = useState([]);

  useEffect (() => {
    setData(list);
  });
  

  return (
    <div>
      <ReactTable 
        data={data} 
        loading={data ? false : true}
        columns={columns} 
        SubComponent= {row => {
        
          return (
          <div>{row.original.desc}</div>
        )
        }}
        getTdProps={() => ({
          style: {
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
          }
        })}
      />
    </div>
  );
};

export default JobGrid;
