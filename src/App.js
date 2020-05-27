import React from 'react';
import PdfViewer from './Containers/PdfViewer/PdfViewer';
import RightNav from './Containers/RightNav/RightNav';
import LeftNav from './Containers/LeftNav/LeftNav';
import './App.css';

class App extends React.Component {
 
  render(){
    let content;
    if(window.innerWidth < 1024){
      content = <div className="App--Mobile">
        <h1 className="App--MobileText">This website is for desktop view only!</h1>
      </div>
    }
    else{
      content = <div className="App">
        <LeftNav />
        <PdfViewer/>
        <RightNav />
      </div>
    } 
    return (
      <div>
        {content}
      </div>
    );
  }
}

export default App;