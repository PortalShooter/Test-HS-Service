import React from 'react';
import Button from './components/Button';
import PlusIcon from './icons/PlusIcon';

function App() {
  return (
    <div className="App">
      <div style={{width: '300px'}}>
          <Button 
            onClick={function (): void {console.log(123)}}
            type={'danger'}
            large
          >
            <PlusIcon />
            <span>Some text</span>
          </Button>
      </div>
    </div>
  );
}

export default App;
