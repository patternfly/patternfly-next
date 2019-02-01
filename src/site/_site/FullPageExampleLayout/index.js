import React from 'react';
import Helmet from 'react-helmet';
import '../../../patternfly/patternfly-base.scss';

export default ({ children }) => (
  <div>
    <Helmet>
      <title>PatternFly 4</title>
      <html lang="en-US" />
    </Helmet>
    <div>{children}</div>
  </div>
);
