import './App.css';
import {Component} from 'react';
import MaterialUiForm from './MaterialUiForm';


class App extends Component {
  state = {
      filedetails: {
          details: { complete: 'yes', incomplete: 'no' },
          assignmentList: { name1: 'Jimmy', name2: 'Ily',name3: 'Carol', },
          assignedfor: 'Jimmy' 
      },
      //sid, fno, acn, companyname, appdate
      filesList : [{
        sid : 1234,
        fno : 1234,
        acn : 'ACN-1234',
        companyname : 'SunBelt 1',
        appdate : '02/06/2021'
        }, {
          sid : 1235,
          fno : 1235,
          acn : 'ACN-1235',
          companyname : 'SunBelt 2',
          appdate : '02/07/2021'
          },
          {
            sid : 1236,
            fno : 1236,
            acn : 'ACN-1236',
            companyname : 'SunBelt 3',
            appdate : '02/08/2021'
            }],
  };
  handleChange = event => {
    this.setState({ value: event.target.value });
  };

render() {
  return (
    <div className="App">
        <h1 className="App-title">Welcome to App Tracker</h1>
    {/* Pass props twice 
    <div className="container">
        <FormCode onSubmit={this.submit} />
      </div>
    
      <h2>Form </h2>
*/}
<MaterialUiForm filedata={this.state} onSubmit={this.submit} />
</div>
  );
}
}
export default App;
