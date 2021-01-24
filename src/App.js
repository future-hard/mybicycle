import React from 'react';
import 'antd/dist/antd.css';
import { Button } from 'antd';
import './App.css';
import Life from './pages/demo/Life';


const App = () => (
  <div className="App">
    <Button type="primary">Button</Button>
    <hr/>
    <Life/>
  </div>
);

export default App;