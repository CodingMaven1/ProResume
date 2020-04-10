import React from "react";
import { connect } from 'react-redux';
import Satiny from '../../Templates/Satiny/Satiny';
import Euphony from '../../Templates/Euphony/Euphony';
import './PdfViewer.scss';

class PdfViewer extends React.Component {

    render(){
        let {data, template}  = this.props;
        let userTemplate;
        if(template === "Satiny"){
            userTemplate =  <Satiny name={data.Name} pos={data.Pos} about={data.About} achievements={data.Achievements} 
                            contact={data.Contact} careerHistory={data.CareerHitsory} education={data.Education} 
                            skills={data.Skills} />
        }
        else if(template === "Euphony"){
            userTemplate = <Euphony name={data.Name} pos={data.Pos} about={data.About} achievements={data.Achievements} 
                            contact={data.Contact} careerHistory={data.CareerHitsory} education={data.Education} 
                            skills={data.Skills}  />
        }

        return(
            <div>
                {userTemplate}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    data: state.user.data,
    template: state.user.template
})

export default connect(mapStateToProps)(PdfViewer);