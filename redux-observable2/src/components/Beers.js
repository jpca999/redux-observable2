import React from 'react';
import { connect } from 'react-redux';
import BeerList from './BeerList';
import { fetchData } from '../reducers/beersActions';

export function Beers(props) {
    const { data, status, fetchData } = props;
    console.log( ' 8- Beers props =', props );

    // disabled={status === "pending"}
    return (
  <div>
       {status && (<p> Please wait  .. </p> )}

       <button
       type="button"
       disabled={status === "pending"}
       onClick={fetchData}
       >
      Fetch Beers!
    </button>

{!status && (<div>


  <BeerList beers = {data} />

</div>)}

  </div> );
}

export default connect(state => state.beers, { fetchData }) (Beers);