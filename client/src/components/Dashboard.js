import React from 'react';
import { Link } from 'react-router-dom';
import SurveyList from './surveys/SurveyList';

const Dashboard = () => {

    return(
        <div className="container">
            <SurveyList />
            <div class="fixed-action-btn">
                <Link to="/surveys/new" class="btn-floating btn-large red">
                    <i class="material-icons">add</i>
                </Link>
            </div>
        </div>
    );

};

export default Dashboard;