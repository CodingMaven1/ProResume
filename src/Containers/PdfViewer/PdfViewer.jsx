import React from "react";
import { connect } from 'react-redux';
import Satiny from '../../Templates/Satiny/Satiny';
import './PdfViewer.scss';

class PdfViewer extends React.Component {

    render(){
        let data = this.props.data;

        return(
            <div>
                <Satiny name={data.Name} pos={data.Pos} about={data.About} achievements={data.Achievements} 
                        contact={data.Contact} careerHistory={data.CareerHitsory} education={data.Education} 
                        skills={data.Skills} />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    data: state.user.data,
    template: state.user.template
})

export default connect(mapStateToProps)(PdfViewer);