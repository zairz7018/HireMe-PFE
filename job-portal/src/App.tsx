// import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { MantineProvider, Slider } from '@mantine/core';
// core styles are required for all packages
import '@mantine/core/styles.css';

function App() {
  return (
    <MantineProvider>
      <h1 className="text-3xl text-red-950 font-bold underline">
        hello world
      </h1>
      <Slider
      color="pink"
      marks={[
        { value: 20, label: '20%' },
        { value: 50, label: '50%' },
        { value: 80, label: '80%' },
      ]}
    />
    </MantineProvider>
    
  );
}

export default App;