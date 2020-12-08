import React from 'react';

const Landing = () => {

    return(
        <div>
        <div class="section no-pad-bot" id="index-banner">
    <div class="container">
      <br></br>
      <h1 class="header center orange-text">Emaily</h1>
      <div class="row center">
        <h5 class="header col s12 light">Sending surveys to people made easy.</h5>
      </div>
      <div class="row center">
        <a href="/auth/google" id="download-button" class="btn-large waves-effect waves-light orange">Get Started</a>
      </div>
      <br></br>
      </div>
      </div>

<div class="container">
<div class="section">

  <div class="row">
    <div class="col s12 m4">
      <div class="icon-block">
        <h2 class="center light-blue-text"><i class="material-icons">flash_on</i></h2>
        <h5 class="center">Speeds up surveying</h5>

        <p class="light">We did the most to ensure our users can send surveys to multiple emails all at once. All the responses from the surveys are recorded automatically and the respondants are kept anonymous.</p>
      </div>
    </div>

    <div class="col s12 m4">
      <div class="icon-block">
        <h2 class="center light-blue-text"><i class="material-icons">money</i></h2>
        <h5 class="center">Cost Effecient</h5>

        <p class="light">We offer cost effecient services with each surveys costing just $1. Users are allowed to send the survey to as many emails as wanted.</p>
      </div>
    </div>

    <div class="col s12 m4">
      <div class="icon-block">
        <h2 class="center light-blue-text"><i class="material-icons">settings</i></h2>
        <h5 class="center">Multiple survey templates</h5>

        <p class="light">We have provided a variety of different templates that user can choose to send with the surveys.</p>
      </div>
    </div>
  </div>

</div>
<br></br>
</div>
</div>

    
    );
};

export default Landing;