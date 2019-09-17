import Link from "next/link";
import { Segment } from 'semantic-ui-react';

import AddEntry from '../components/AddEntry';
import JobGrid from '../components/JobGrid';

const Index = () => (
  <div className="table--body">
    <AddEntry />
    <div className="table--grid">
      <JobGrid />
    </div>
  </div>
);

export default Index;
