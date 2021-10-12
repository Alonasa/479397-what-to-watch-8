import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';

function Error(): JSX.Element {
  return (
    <Fragment>
      <h3 className="error">404 Not Found</h3>
      <Link to="/">Go to main page</Link>
    </Fragment>
  );
}

export default Error;
