import React from 'react';
import {getStaff} from './dataService';
import {
    Select,
    MenuItem,
  } from '@material-ui/core';
class StaffList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        data: getStaff(),
        selected: 1
   
       };
   
       // this.handleChange1 = this.handleChange1.bind(this)
    }
   
    handleChange = event => {
      this.setState({ selected: event.target.value, name: event.target.name});
    };
  renderOptions() {
       return this.state.data.map((dt, i) => {
        console.log(dt);
         return (
             <MenuItem
               label="Select Staff"
               value={dt.id}
              key={i} name={dt.name}>{dt.name}
              </MenuItem>
           
         );
       });
      }
      render() {
        console.log(this.state.selected);
        return (
           <div className="padd50">
             <Select className="width50" 
             value={this.state.selected} 
             onChange={this.handleChange}>
               {this.renderOptions()}
             </Select>
  <h3>Selected user - {this.state.selected}</h3>
           </div>
        );
      }
  }

export default StaffList;