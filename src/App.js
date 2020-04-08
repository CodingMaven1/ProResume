import React from 'react';
import PdfViewer from './Containers/PdfViewer/PdfViewer';
import './App.css';

class App extends React.Component {
 
  render(){
    return (
      <div className="App">
        <PdfViewer type="Satiny"/>
      </div>
    );
  }
}

export default App;
