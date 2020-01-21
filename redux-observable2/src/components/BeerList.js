import React from 'react';
import { connect } from 'react-redux';
// import Beers from './Beers';

export function BeerList(props) {
  const { data, loading } = props;
  console.log(' props = ', props );

  return (
    <div>
        {loading && (<p> Please wait ... </p> )}

    {!loading && (

    <div>

      <h3> Inside BeerList component  </h3>
      <p> Got {data.length} beers </p>

    </div>
    )}

</div> );
}

// export default BeerList;
export default connect(state => state.beers ) (BeerList);

