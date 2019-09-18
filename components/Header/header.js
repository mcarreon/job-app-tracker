import { Menu, Icon } from "semantic-ui-react";

import useAuth from "../../utils/hooks/useAuth";


const CompHeader = () => {
  

  return (
    <Menu attached="top" >
      <Menu.Item
        name="bars"
      >
        <Icon name="bars" />
      </Menu.Item>
      <Menu.Item header>Job Application Tracker</Menu.Item>
      <Menu.Menu position="right">
        <div className="ui right aligned category search item">
          <div className="ui transparent icon input">
            <input
              className="prompt"
              type="text"
              placeholder="Search animals..."
            />
            <i className="search link icon" />
          </div>
          <div className="results" />
        </div>
      </Menu.Menu>
    </Menu>
  );
};

export default CompHeader;
