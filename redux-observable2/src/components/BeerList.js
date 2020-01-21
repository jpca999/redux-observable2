import React from 'react';
import { connect } from 'react-redux';
// import Beers from './Beers';

export function BeerList(props) {
  // const { data, loading } = props;
  const { beers } = props;
  console.log(' props = ', props );

  return (
    <div>

      {/* {beers.map(beer =>{
        return(
          <li key={beer.id} className="List-item">
            <figure className=


          </li>
        )

      })} */}
  <p> no of beers = {beers.length} </p>



</div> );
}

export default BeerList;
// export default connect(state => state.beers ) (BeerList);

