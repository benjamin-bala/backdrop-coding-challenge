import React from 'react';

export const Connectivity = props => {
  if (props.isConnected) {
    return <h1>Connected</h1>;
  }

  return <h1>No internet connection!!</h1>;
};
