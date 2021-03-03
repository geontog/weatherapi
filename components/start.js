import React from 'react';

const Start = ({handleChange, handleSubmit, searchVal}) => (
  <div>
    <div className="needsAligning topAndBottomMargin">
      <h2 className="container">Welcome</h2>
      <hr/>
      <p className="container lead">Enter the name of a city to get the current
       weather. Made using the Open Weather Map API.</p>
      <hr/>
    </div>
      <div className="needsAligning">
      <h5 className="lead">Enter the name of a city:</h5>
      <form onSubmit={(e) => { e.preventDefault(); handleSubmit();  }}>
        <label className="lead">
          <input type="text" autoComplete="off" value={searchVal} id="form input"
                  onChange={handleChange} />
        </label>
        <br/>
        <input type="submit" value="Submit" className="btn btn-info"
        id="startersubmit"/>
      </form>
    </div>
  </div>
)

export default Start;
