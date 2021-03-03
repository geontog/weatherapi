import React from 'react';

const CityForm = ({handleChange, handleSubmit, searchVal }) => (
  <div className="needsAligning topAndBottomMargin">
    <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
      <label className="lead">
        City: {" "}
        <input type="text" autoComplete="off" value={searchVal} id="form input"
              onChange={handleChange} />
      </label>
      <input type="submit" value="Submit" className="btn btn-info"/>
    </form>
  </div>
)

export default CityForm;
