import React, { useEffect, useRef } from 'react';
import '@caterpillar-elements-demo/ng-element-types';
import './app.css';
import { AppComponentType } from '@caterpillar-elements-demo/ng-element-types';

export const App = () => {
  const person = { name: 'Joe' };
  const ngElement = useRef<AppComponentType>(null);
  useEffect(() => {
    console.log(ngElement.current);
    ngElement.current.registerCallback(name => `Howdy, ${name}`);
    function greetListener(event) {
      console.log(event);
      console.log(event.detail);
    }
    ngElement.current.addEventListener('greet', greetListener);

    return () => {
      ngElement.current.removeEventListener('greet', greetListener);
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
