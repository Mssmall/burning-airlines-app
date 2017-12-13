import React from 'react';
import { Link } from 'react-router-dom';
import Flight from './Flight';

function Results(props) {
  return (
    <div>
      <h3>Flights</h3>
      <div className="results-grid headings">
        <span className="results-date">Date</span>
        <span className="results-flight">Flight</span>
        <span className="results-from">From > To</span>
        <span className="results-plane">Plane</span>
      </div>
      { props.flights.map( f =>
        <div className="results-grid" key={ f.id }>
          <span className="results-date">{ f.date }</span>
          <span className="results-flight"><Link to="/flights/1">{ f.flight_num }</Link></span>
          <span className="results-from">{ f.origin } > { f.destination }</span>
          <span className="results-plane">{ f.airplane_id }</span>
        </div>
      ) }
    </div>
  );
}

export default Results;
