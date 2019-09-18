import { useState, useEffect } from "react";
import { Form, Button } from "semantic-ui-react";
import SemanticDatepicker from "react-semantic-ui-datepickers";

const options = [
  { key: "ha", text: "Haven't Applied", value: -1 },
  { key: "a", text: "Applied", value: 0 },
  { key: "r", text: "Responded", value: 1 },
  { key: "re", text: "Rejected", value: -2 },
  { key: "acc", text: "Accepted", value: 2 }
];

const defaults = {
  location: "",
  url: "",
  stack: "",
  followUp: 0,
  phoneScreen: 0,
  techScreen: 0,
  onsite: 0,
  desc: "",
  notes: "",
  date: "",
  company: "",
  title: "",
  status: 0
};

const AddEntry = props => {
  const [entry, setEntry] = useState(defaults);
  const [dateHolder, setDate] = useState({});
  const [collapsed, setCollapsed] = useState(true);
  const {
    location,
    url,
    stack,
    followUp,
    phoneScreen,
    techScreen,
    onsite,
    desc,
    notes,
    date,
    company,
    title,
    status
  } = entry;

  const collapseStyle = {
    display: collapsed ? "none" : "flex"
  };

  const onDateChange = value => {
  
    setEntry({
      ...entry, 
      date: value
    });
  };

  const onExpand = () => {
    setCollapsed(!collapsed);
  };

  const handleChange = (e, { name, value }) => {
    setEntry({
      ...entry,
      [name]: value
    });
  };

  const handleCheckbox = (e, { name }) => {
    
    setEntry({
      ...entry,
      [name]: !entry.name
    });
    
  };

  const handleSubmit = () => {
    props.addRow(entry);
    setEntry(defaults);
  };

  useEffect(() => {
    console.log(date);
  });

  return (
    <div className="entry">
      <Form className="entry--form" onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Input
            fluid
            label="Company"
            placeholder="Company Name"
            width={4}
            name="company"
            onChange={handleChange}
            value={company}
            required
          />
          <Form.Input
            fluid
            label="Title"
            placeholder="Job Title"
            name="title"
            onChange={handleChange}
            value={title}
            required
            width={4}
          />
          <SemanticDatepicker
            label="Date"
            onDateChange={value => onDateChange(value)}
            className="entry--date"
            name="date"
            selected={date ? date : null}
            value={date}
            required
          />
          <Form.Select
            label="Status"
            options={options}
            name="status"
            onChange={handleChange}
            value={status}
            required
          />
          <Form.Button className="entry--button">Save</Form.Button>
        </Form.Group>
        <Form.Group style={collapseStyle}>
          <Form.Input
            fluid
            label="Location"
            placeholder="Location"
            name="location"
            onChange={handleChange}
            value={location}
            width={3}
          />
          <Form.Input
            fluid
            label="Link"
            placeholder="Link to Posting"
            name="url"
            onChange={handleChange}
            value={url}
            width={3}
          />
          <Form.Input
            label="Stack"
            placeholder="List technology as a comma'd list"
            name="stack"
            onChange={handleChange}
            value={stack}
            width={3}
          />
        </Form.Group>
        <Form.Group inline style={collapseStyle}>
          <label>Events</label>
          <Form.Checkbox
            label="Follow-Up"
            name="followUp"
            onChange={handleCheckbox}
            checked={followUp}
          />
          <Form.Checkbox
            label="Phone Screen"
            name="phoneScreen"
            onChange={handleCheckbox}
            checked={phoneScreen}
          />
          <Form.Checkbox
            label="Tech Screen"
            name="techScreen"
            onChange={handleCheckbox}
            checked={techScreen}
          />
          <Form.Checkbox
            label="Onsite"
            name="onsite"
            onChange={handleCheckbox}
            checked={onsite}
          />
        </Form.Group>
        <Form.Group style={collapseStyle}>
          <Form.TextArea
            label="Description"
            placeholder="Add a description..."
            name="desc"
            onChange={handleChange}
            value={desc}
            width={4}
          />
          <Form.TextArea
            label="Notes"
            placeholder="Add some notes..."
            name="notes"
            onChange={handleChange}
            value={notes}
            width={4}
          />
        </Form.Group>
      </Form>
      <Button fluid onClick={onExpand} className="entry--collapse">
        {collapsed ? "Expand" : "Collapse"}
      </Button>
    </div>
  );
};

export default AddEntry;
