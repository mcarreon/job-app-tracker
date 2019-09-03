import { Table, Label, Menu, Icon, Accordion, Tab } from "semantic-ui-react";
import GridHeader from './gridHeader';
import GridRow from './gridRow';
import GridFooter from './gridFooter';

const list = [
  [
    "9/1/2019",
    "Versus Systems",
    "Software Engineer",
    "Los Angeles, CA",
    "https://www.versussystems.com/careers?gh_jid=1258339",
    "False",
    "False",
    "False",
    "False" /* ... */
  ],
  [
    "9/1/2019",
    "Versus Systems",
    "Software Engineer",
    "Los Angeles, CA",
    "https://www.versussystems.com/careers?gh_jid=1258339",
    "False",
    "False",
    "False",
    "False" /* ... */
  ],
  [
    "9/1/2019",
    "Versus Systems",
    "Software Engineer",
    "Los Angeles, CA",
    "https://www.versussystems.com/careers?gh_jid=1258339",
    "False",
    "False",
    "False",
    "False" /* ... */
  ],
  [
    "9/1/2019",
    "Versus Systems",
    "Software Engineer",
    "Los Angeles, CA",
    "https://www.versussystems.com/careers?gh_jid=1258339",
    "False",
    "False",
    "False",
    "False" /* ... */
  ],
  [
    "9/1/2019",
    "Versus Systems",
    "Software Engineer",
    "Los Angeles, CA",
    "https://www.versussystems.com/careers?gh_jid=1258339",
    "False",
    "False",
    "False",
    "False" /* ... */
  ],
  [
    "9/1/2019",
    "Versus Systems",
    "Software Engineer",
    "Los Angeles, CA",
    "https://www.versussystems.com/careers?gh_jid=1258339",
    "False",
    "False",
    "False",
    "False" /* ... */
  ],
  [
    "9/1/2019",
    "Versus Systems",
    "Software Engineer",
    "Los Angeles, CA",
    "https://www.versussystems.com/careers?gh_jid=1258339",
    "False",
    "False",
    "False",
    "False" /* ... */
  ],
  [
    "9/1/2019",
    "Versus Systems",
    "Software Engineer",
    "Los Angeles, CA",
    "https://www.versussystems.com/careers?gh_jid=1258339",
    "False",
    "False",
    "False",
    "False" /* ... */
  ],
  [
    "9/1/2019",
    "Versus Systems",
    "Software Engineer",
    "Los Angeles, CA",
    "https://www.versussystems.com/careers?gh_jid=1258339",
    "False",
    "False",
    "False",
    "False" /* ... */
  ],
  [
    "9/1/2019",
    "Versus Systems",
    "Software Engineer",
    "Los Angeles, CA",
    "https://www.versussystems.com/careers?gh_jid=1258339",
    "False",
    "False",
    "False",
    "False" /* ... */
  ],
  [
    "9/1/2019",
    "Versus Systems",
    "Software Engineer",
    "Los Angeles, CA",
    "https://www.versussystems.com/careers?gh_jid=1258339",
    "False",
    "False",
    "False",
    "False" /* ... */
  ],
  [
    "9/1/2019",
    "Versus Systems",
    "Software Engineer",
    "Los Angeles, CA",
    "https://www.versussystems.com/careers?gh_jid=1258339",
    "False",
    "False",
    "False",
    "False" /* ... */
  ],
  [
    "9/1/2019",
    "Versus Systems",
    "Software Engineer",
    "Los Angeles, CA",
    "https://www.versussystems.com/careers?gh_jid=1258339",
    "False",
    "False",
    "False",
    "False" /* ... */
  ],
  [
    "9/1/2019",
    "Versus Systems",
    "Software Engineer",
    "Los Angeles, CA",
    "https://www.versussystems.com/careers?gh_jid=1258339",
    "False",
    "False",
    "False",
    "False" /* ... */
  ],
  [
    "9/1/2019",
    "Versus Systems",
    "Software Engineer",
    "Los Angeles, CA",
    "https://www.versussystems.com/careers?gh_jid=1258339",
    "False",
    "False",
    "False",
    "False" /* ... */
  ],
  [
    "9/1/2019",
    "Versus Systems",
    "Software Engineer",
    "Los Angeles, CA",
    "https://www.versussystems.com/careers?gh_jid=1258339",
    "False",
    "False",
    "False",
    "False" /* ... */
  ],
  [
    "9/1/2019",
    "Versus Systems",
    "Software Engineer",
    "Los Angeles, CA",
    "https://www.versussystems.com/careers?gh_jid=1258339",
    "False",
    "False",
    "False",
    "False" /* ... */
  ],
  [
    "9/1/2019",
    "Versus Systems",
    "Software Engineer",
    "Los Angeles, CA",
    "https://www.versussystems.com/careers?gh_jid=1258339",
    "False",
    "False",
    "False",
    "False" /* ... */
  ],
  [
    "9/1/2019",
    "Versus Systems",
    "Software Engineer",
    "Los Angeles, CA",
    "https://www.versussystems.com/careers?gh_jid=1258339",
    "False",
    "False",
    "False",
    "False" /* ... */
  ],
  [
    "9/1/2019",
    "Versus Systems",
    "Software Engineer",
    "Los Angeles, CA",
    "https://www.versussystems.com/careers?gh_jid=1258339",
    "False",
    "False",
    "False",
    "False" /* ... */
  ],
  [
    "9/1/2019",
    "Versus Systems",
    "Software Engineer",
    "Los Angeles, CA",
    "https://www.versussystems.com/careers?gh_jid=1258339",
    "False",
    "False",
    "False",
    "False" /* ... */
  ],
  [
    "9/1/2019",
    "Versus Systems",
    "Software Engineer",
    "Los Angeles, CA",
    "https://www.versussystems.com/careers?gh_jid=1258339",
    "False",
    "False",
    "False",
    "False" /* ... */
  ],
  [
    "9/1/2019",
    "Versus Systems",
    "Software Engineer",
    "Los Angeles, CA",
    "https://www.versussystems.com/careers?gh_jid=1258339",
    "False",
    "False",
    "False",
    "False" /* ... */
  ],
  [
    "9/1/2019",
    "Versus Systems",
    "Software Engineer",
    "Los Angeles, CA",
    "https://www.versussystems.com/careers?gh_jid=1258339",
    "False",
    "False",
    "False",
    "False" /* ... */
  ],
  [
    "9/1/2019",
    "Versus Systems",
    "Software Engineer",
    "Los Angeles, CA",
    "https://www.versussystems.com/careers?gh_jid=1258339",
    "False",
    "False",
    "False",
    "False" /* ... */
  ],
  [
    "9/1/2019",
    "Versus Systems",
    "Software Engineer",
    "Los Angeles, CA",
    "https://www.versussystems.com/careers?gh_jid=1258339",
    "False",
    "False",
    "False",
    "False" /* ... */
  ],
  [
    "9/1/2019",
    "Versus Systems",
    "Software Engineer",
    "Los Angeles, CA",
    "https://www.versussystems.com/careers?gh_jid=1258339",
    "False",
    "False",
    "False",
    "False" /* ... */
  ],
  [
    "9/1/2019",
    "Versus Systems",
    "Software Engineer",
    "Los Angeles, CA",
    "https://www.versussystems.com/careers?gh_jid=1258339",
    "False",
    "False",
    "False",
    "False" /* ... */
  ],
  [
    "9/1/2019",
    "Versus Systems",
    "Software Engineer",
    "Los Angeles, CA",
    "https://www.versussystems.com/careers?gh_jid=1258339",
    "False",
    "False",
    "False",
    "False" /* ... */
  ],
  [
    "9/1/2019",
    "Versus Systems",
    "Software Engineer",
    "Los Angeles, CA",
    "https://www.versussystems.com/careers?gh_jid=1258339",
    "False",
    "False",
    "False",
    "False" /* ... */
  ],
  
];

// const panels = list.map((data, i) => {


//   return {
//     key: {i},
//     class: "tr",
//     title: {
//       as: Table.Row,
//       className: "",
//       children: [
//         <Table.Cell>{data[0]}</Table.Cell>,
//       <Table.Cell>{data[1]}</Table.Cell>,
//       <Table.Cell>{data[2]}</Table.Cell>,
//       <Table.Cell>{data[3]}</Table.Cell>,
//       <Table.Cell>{data[4]}</Table.Cell>,
//       <Table.Cell>{data[5]}</Table.Cell>,
//       <Table.Cell>{data[6]}</Table.Cell>,
//       <Table.Cell>{data[7]}</Table.Cell>,
//       <Table.Cell>{data[8]}</Table.Cell>
//       ]
//     },
//     content: {
//       as: "div",
//       content: (
//         <Table.Cell colSpan={9}>
//           <p>content content content content content content content content content content content content </p>
//           <p>content content content content content content content content content content content content </p>
//           <p>content content content content content content content content content content content content </p>
//         </Table.Cell>
//       )
//     }
//   }
// })


const JobGrid = () => {
  return (
    <Table celled striped>
      <GridHeader />
      <Table.Body>
        {list.map((data, i) => {
          return <GridRow data={data} key={i}/>
        })}
      </Table.Body>
      <GridFooter />
    </Table>
  );
};

{/*  */}

export default JobGrid;
