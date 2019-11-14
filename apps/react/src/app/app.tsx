import React, { useEffect, useRef } from 'react';
import '@caterpillar-elements-demo/ng-element-types';
import './app.css';

export const App = () => {
  const person = { name: 'Joe' };
  const ngElement = useRef(null);
  useEffect(() => {
    ngElement.current.addEventListener('greet', (event: any) => {
      console.log(event);
      console.log(event.detail);
    });

    return () => {
      ngElement.current.removeEventListener('greet');
    };
  }, [ngElement]);

  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./${fileName}.${style} file.
   */
  return (
    <div className="app">
      <h1>React</h1>
      <ng-element ref={ngElement} person={JSON.stringify(person)}></ng-element>
    </div>
  );
};

export default App;
