import React from 'react';

export const App = (): React.ReactElement => {
  return (
    <div className="App">
      {[1, 2, 3].map(item => (
        <span>{item}</span>
      ))}
    </div>
  );
};
