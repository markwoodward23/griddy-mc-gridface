import React from 'react';
import './App.scss';

const Block = () => (
  <div style={{ width: '25px', height: '25px', backgroundColor: 'red' }} />
)

const length1 = [0];
const length2 = [0, 1];
const length3 = [0, 1, 2];
const length4 = [0, 1, 2, 3];
const length5 = [0, 1, 2, 3, 4];
const length6 = [0, 1, 2, 3, 4, 5];
const length7 = [0, 1, 2, 3, 4, 5, 6];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="grid" style={{ paddingTop: '50px'}}>
          {length1.map((_, i) => (
          <div className={`grid-item-${i}`}>
            <Block />
          </div>
        ))}
        </div>
        <div className="grid" style={{ paddingTop: '50px'}}>
          {length2.map((_, i) => (
          <div className={`grid-item-${i}`}>
            <Block />
          </div>
        ))}
        </div>
        <div className="grid" style={{ paddingTop: '50px'}}>
          {length3.map((_, i) => (
          <div className={`grid-item-${i}`}>
            <Block />
          </div>
        ))}
        </div>
        <div className="grid" style={{ paddingTop: '50px'}}>
          {length4.map((_, i) => (
          <div className={`grid-item-${i}`}>
            <Block />
          </div>
        ))}
        </div>
        <div className="grid" style={{ paddingTop: '50px'}}>
          {length5.map((_, i) => (
          <div className={`grid-item-${i}`}>
            <Block />
          </div>
        ))}
        </div>
        <div className="grid" style={{ paddingTop: '50px'}}>
          {length6.map((_, i) => (
          <div className={`grid-item-${i}`}>
            <Block />
          </div>
        ))}
        </div>
        <div className="grid" style={{ paddingTop: '50px'}}>
          {length7.map((_, i) => (
          <div className={`grid-item-${i}`}>
            <Block />
          </div>
        ))}
        </div>
      </header>
    </div>
  );
}

export default App;
