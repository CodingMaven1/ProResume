import React from "react";
import { connect } from 'react-redux';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import Satiny from '../../Templates/Satiny/Satiny';
import Euphony from '../../Templates/Euphony/Euphony';

import download from '../../Assets/download.svg';
import refresh from '../../Assets/refresh.svg';
import user from '../../Assets/user.png';
import './PdfViewer.scss';

class PdfViewer extends React.Component {

    state = {
        url: '',
        file: ''
    }

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

    onRefreshHandler = () => {
        window.location.reload()
    }

    onImageUploadHandler = (e) => {
    
        let reader = new FileReader();
        let file = e.target.files[0];
    
        reader.onload = () => {
          this.setState({
            file: file,
            url: reader.result,
          });
        }
    
        reader.readAsDataURL(file)
      }

    render(){
        let {template}  = this.props;
        let userTemplate;
        if(template === "Satiny"){
            userTemplate = <Satiny url={this.state.url}/>
        }
        else if(template === "Euphony"){
            userTemplate = <Euphony />
        }

        return(
            <div className="PdfViewer">
                <div style={{zoom: 0.8}}>
                    <div id="capture">
                        {userTemplate}
                    </div>
                </div>
                <div className="PdfViewer--Options">
                    <div className="PdfViewer--OptionsContainer">
                        <img src={download} onClick={e => this.onPdfHandler(e)} className="PdfViewer--Option" alt="Download Resume"/>
                        <img src={refresh} onClick={e => this.onRefreshHandler(e)} className="PdfViewer--Option" alt="Refresh"/>
                        <label for="img-upload" style={{display: 'inline-block'}}><img src={user} className="PdfViewer--Option" alt="User"/></label>
                        <input id="img-upload" className="PdfViewer--ImgUpload" onChange={e => this.onImageUploadHandler(e)} type="file" />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    data: state.user.data,
    template: state.user.template,
    colors: state.actions.color
})


export default connect(mapStateToProps)(PdfViewer);