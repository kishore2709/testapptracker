import './App.css';
import {Component} from 'react';
import FileDetails from './FileDetails';
import StaffList from './StaffList';
import NotesManager from './NotesManager';
import AppProcessStage from './AppProcessStage';
import FormCode from './FormCode';

class App extends Component {
  state = {
      filedetails: {
          details: { complete: 'yes', incomplete: 'no' },
          assignmentList: { name1: 'Jimmy', name2: 'Ily',name3: 'Carol', },
          assignedfor: 'Jimmy' 
      }
  };
  handleChange = event => {
    this.setState({ value: event.target.value });
  };

render() {
  return (
    <div className="App">
        <h1 className="App-title">Welcome to App Tracker</h1>
    {/* Pass props twice */}
    <div className="container">
        <h3 className="jumbotron">Redux Form Validation</h3>
        <FormCode onSubmit={this.submit} />
      </div>
    
    <FileDetails
        filedetails={this.state.filedetails}  onChange={this.handleChange.bind(this)}
    />
    <StaffList/>
    <NotesManager/>
    <AppProcessStage/>
</div>
  );
}
}
export default App;
