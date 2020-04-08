import React from "react";
import Satiny from '../../Templates/Satiny/Satiny';
import TemplateDummyData from './TemplateDummyData';
import './PdfViewer.scss';

class PdfViewer extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            data: TemplateDummyData[this.props.type]
        }
    }

    render(){
        return(
            <div>
                <Satiny name={this.state.data.Name} pos={this.state.data.Pos} about={this.state.data.About} achievements={this.state.data.Achievements} 
                        contact={this.state.data.Contact} careerHistory={this.state.data.CareerHitsory} education={this.state.data.Education} 
                        skills={this.state.data.Skills} />
            </div>
        )
    }
}

export default PdfViewer;