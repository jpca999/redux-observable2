import React from 'react';
import { connect } from 'react-redux';
import BeerList from './BeerList';
import { fetchData } from '../reducers/beersActions';

export function Beers(props) {
    const { data, loading, fetchData } = props;
    console.log( ' 8- Beers props =', props );

    // disabled={status === "pending"}
    return (
  <div>
       {loading && (<p> Please wait .. onClick={fetchData} .. </p> )}

       <button
       type="button"
       onClick={fetchData}
      //  disabled={status === "pending"}
       >
      Fetch Beers!
    </button>

{!loading && (<div>

  <p> Got {data.length} beers </p>
  <BeerList beers = {data} />

</div>)}

  </div> );
}

export default connect(state => state.beers, { fetchData }) (Beers);