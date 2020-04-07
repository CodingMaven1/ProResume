import React from 'react';
import PDFViewer from './Containers/PDFViewer/pdfViewer';
import './App.css';

class App extends React.Component {
 
  exportPDF = () => {
    this.resume.save();
}

  render(){
    return (
      <div className="App">
        <PDFViewer />
      </div>
    );
  }
}

export default App;
