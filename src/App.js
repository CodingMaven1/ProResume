import React from 'react';
import { PDFExport } from '@progress/kendo-react-pdf';
import Template from './templates/template1';
import './App.css';

class App extends React.Component {
 
  exportPDF = () => {
    this.resume.save();
}

  render(){
    return (
      <div className="App">
        <PDFExport paperSize={'Letter'} fileName="_____.pdf" title="" subject="" keywords="" ref={(r) => this.resume = r}>
          <Template />
        </PDFExport>
        <button onClick={this.exportPDF}>download</button>

      </div>
    );
  }
}

export default App;
