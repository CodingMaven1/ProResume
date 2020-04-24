import React from "react";
import { connect } from 'react-redux';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import Satiny from '../../Templates/Satiny/Satiny';
import Euphony from '../../Templates/Euphony/Euphony';

import download from '../../Assets/download.svg';
import './PdfViewer.scss';

class PdfViewer extends React.Component {

    onPdfHandler = (event) => {
        event.preventDefault();

        window.scrollTo(0,0);     

        const input = document.getElementById('capture');

        html2canvas(input)
        .then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            let pdf = new jsPDF();
            pdf.addImage(imgData, 'PNG', 0, 0, 210, 297);
            pdf.save("ProResume.pdf");  
        });
    }

    render(){
        let {data, template}  = this.props;
        let userTemplate;
        if(template === "Satiny"){
            userTemplate =  <Satiny name={data.Name} pos={data.Pos} about={data.About}
                            Mobile={data.Mobile} Email={data.Email} Address={data.Address} Website={data.Website} CareerHistory={data.CareerHistory} 
                            education={data.Education} skills={data.Skills} />
        }
        else if(template === "Euphony"){
            userTemplate = <Euphony name={data.Name} pos={data.Pos} about={data.About} achievements={data.Achievements} 
                            Mobile={data.Mobile} Email={data.Email} Address={data.Address} Website={data.Website} CareerHistory={data.CareerHistory} 
                            education={data.Education} skills={data.Skills}  />
        }

        return(
            <div className="PdfViewer">
                <div id="capture">
                    {userTemplate}
                </div>
                <div className="PdfViewer--Options">
                    <div className="PdfViewer--OptionsContainer">
                        <img src={download} onClick={e => this.onPdfHandler(e)} className="PdfViewer--Option" alt="Download Resume"/>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    data: state.user.data,
    template: state.user.template
})


export default connect(mapStateToProps)(PdfViewer);