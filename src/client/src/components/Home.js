import React, { Fragment } from 'react';
import User from './User';
import AgeDemographic from './AgeDemographic';

const Home = () => {
  return (
    <Fragment>
      <User />
      <br />
      <AgeDemographic />
    </Fragment>
  );
};

export default Home;
