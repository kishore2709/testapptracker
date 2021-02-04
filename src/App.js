import './App.css';
import {Component} from 'react';
import FileDetails from './FileDetails';
import StaffList from './StaffList';
import NotesManager from './NotesManager';
import AppProcessStage from './AppProcessStage';
import FormCode from './FormCode';
import MaterialUiForm from './MaterialUiForm';


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
        <FormCode onSubmit={this.submit} />
      </div>
    
      <h2>Form </h2>

<MaterialUiForm onSubmit={this.submit} />

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
