import React from 'react';

function Nav() {
    return (
      <div className="App">
  
  
  
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          
          <a class="navbar-brand" href="#">
              <img src="./image.png" width="30" height="30" alt=""/>
              <a style = {{margin: 10}}>Anti Asian Hate Crime Alert</a>
          </a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-item nav-link" href="/">Home <span class="sr-only">(current)</span></a>
              <a class="nav-item nav-link" href="/report">Report</a>
              <a class="nav-item nav-link" href="/how-to-help">How to Help</a>
          </div>
        </div>
      </nav>
  
      </div>
    );
  }
export default Nav;