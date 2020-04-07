import React from "react";
import { PDFExport } from '@progress/kendo-react-pdf';
import DeveloperTemplate from '../../Templates/DeveloperTemplate/developerTemplate';
import './pdfViewer.scss';

class PDFViewer extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    exportPDF = () => {
        this.resume.save();
    }

    render(){
        return(
            <div className="PDFViewer">
                <PDFExport paperSize='A4' scale={0.775} fileName="resume.pdf" title="" subject="" keywords="" ref={(r) => this.resume = r}>
                    <DeveloperTemplate />
                </PDFExport>
                <button onClick={this.exportPDF}>download</button>
            </div>
        )
    }
}

export default PDFViewer;