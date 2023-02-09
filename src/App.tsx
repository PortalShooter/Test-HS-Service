import React from 'react';
import Button from './components/Button';
import PlusIcon from './icons/PlusIcon';
import Dropdown from './components/Dropdown';

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
            Some text
          </Button>
      </div>

      <Dropdown text='Dropdown' listItem={[1,2,3]} />
    </div>
  );
}

export default App;
