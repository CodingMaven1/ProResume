import React from 'react';
import PdfViewer from './Containers/PdfViewer/PdfViewer';
import RightNav from './Containers/RightNav/RightNav';
import LeftNav from './Containers/LeftNav/LeftNav';
import './App.css';

class App extends React.Component {
 
  render(){
    return (
      <div className="App">
        <LeftNav />
        <PdfViewer/>
        <RightNav />
      </div>
    );
  }
}

export default App;