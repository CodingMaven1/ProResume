import React from "react";
import Satiny from '../../Templates/Satiny/Satiny';
import TemplateDummyData from './TemplateDummyData';
import './PdfViewer.scss';

class PdfViewer extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            satiny: TemplateDummyData.Satiny
        }
    }

    render(){
        return(
            <div>
                <Satiny name={this.state.satiny.Name} pos={this.state.satiny.Pos} about={this.state.satiny.About} achievements={this.state.satiny.Achievements} 
                        contact={this.state.satiny.Contact} careerHistory={this.state.satiny.CareerHitsory} education={this.state.satiny.Eduation} 
                        skills={this.state.satiny.Skills} />
            </div>
        )
    }
}

export default PdfViewer;