// Shows user form input values for review
import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions';
import { withRouter } from "react-router-dom";

const SuveyFormReview = ({onCancel, formValues, submitSurvey, history}) => {

    return(
        <div>
           <h5> Please confirm your enteries </h5>
           <div>
               <div>
                   <label>Survey Title</label>
                   <div>{formValues.title}</div>
               </div>
               <div>
                   <label>Subject Line</label>
                   <div>{formValues.subject}</div>
               </div>
               <div>
                   <label>Email Body</label>
                   <div>{formValues.body}</div>
               </div>
               <div>
                   <label>Recipients List</label>
                   <div>{formValues.recipients}</div>
               </div>

           </div>
            <button className = "yellow btn-flat darken-3 white-text " onClick={onCancel}>
                Back
            </button>
            <button className="green btn-flat right white-text" onClick={() => submitSurvey(formValues, history)}> 

                Send Survey
                <i className="material-icons right">email</i>
            </button>
        </div>
    );
};

function mapStateToProps(state){
    return{formValues : state.form.surveyForm.values};
    

}


export default connect(mapStateToProps, actions)(withRouter(SuveyFormReview));