import React from 'react';
import { connect } from 'react-redux';

/**
  * builds markup for loading image
  *
  * state props:
  *   @loading - boolean
**/
let Loading = ({ loading }) => (loading
  ? <div style={{ textAlign: 'center' }}>
      <img src='/loading.gif' alt='loading' />
    </div>
  : null
);

const mapStateToProps = (state) => ({loading: state.loading})

Loading = connect(mapStateToProps, null)(Loading)

export default Loading;
