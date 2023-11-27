import React, { useContext, useReducer } from 'react';
import './App.scss'
import Button, { ButtonSize, ButtonType } from './components/button/Button';

function App() {


  return (
    <div className="App">
      <div className="huge">
        <Button size={ButtonSize.huge}   onClick={(e)=>{console.log(e)}}>点击</Button>
        <Button size={ButtonSize.huge} btnType={ButtonType.default}>click</Button>
        <Button size={ButtonSize.huge} btnType={ButtonType.black}>click</Button>
        <Button size={ButtonSize.huge} btnType={ButtonType.cool}>click</Button>
        <Button size={ButtonSize.huge} btnType={ButtonType.primary}>click</Button>
        <Button size={ButtonSize.huge} btnType={ButtonType.danger}>click</Button>
        <Button size={ButtonSize.huge} btnType={ButtonType.text}>click</Button>
        <Button size={ButtonSize.huge} btnType={ButtonType.link}>click</Button>
        <Button size={ButtonSize.huge} btnType={ButtonType.warm}>click</Button>
        <Button size={ButtonSize.huge} btnType={ButtonType.lovely}>click</Button>
        <Button size={ButtonSize.huge} btnType={ButtonType.purple}>click</Button>
        <Button size={ButtonSize.huge} btnType={ButtonType.green}>click</Button>
      </div>
      <div className="large">
        <Button size={ButtonSize.large}>点击</Button>
        <Button size={ButtonSize.large} btnType={ButtonType.default}></Button>
        <Button size={ButtonSize.large} btnType={ButtonType.black}>click</Button>
        <Button size={ButtonSize.large} btnType={ButtonType.cool}>click</Button>
        <Button size={ButtonSize.large} btnType={ButtonType.primary}>click</Button>
        <Button size={ButtonSize.large} btnType={ButtonType.danger}>click</Button>
        <Button size={ButtonSize.large} btnType={ButtonType.text}>click</Button>
        <Button size={ButtonSize.large} btnType={ButtonType.link}>click</Button>
        <Button size={ButtonSize.large} btnType={ButtonType.warm}>click</Button>
        <Button size={ButtonSize.large} btnType={ButtonType.lovely}>click</Button>
        <Button size={ButtonSize.large} btnType={ButtonType.purple}>click</Button>
        <Button size={ButtonSize.large} btnType={ButtonType.green}>click</Button>
      </div>
      <div className='default'>
        <Button >click</Button>
        <Button btnType={ButtonType.default}></Button>
        <Button btnType={ButtonType.black}>click</Button>
        <Button btnType={ButtonType.cool}>click</Button>
        <Button btnType={ButtonType.primary}>click</Button>
        <Button btnType={ButtonType.danger}>click</Button>
        <Button btnType={ButtonType.text}>click</Button>
        <Button btnType={ButtonType.link}>click</Button>
        <Button btnType={ButtonType.warm}>click</Button>
        <Button btnType={ButtonType.lovely}>click</Button>
        <Button btnType={ButtonType.purple}>click</Button>
        <Button btnType={ButtonType.green}>click</Button>
      </div>
      <div className="small">
        <Button size={ButtonSize.small}></Button>
        <Button size={ButtonSize.small} btnType={ButtonType.default}>click</Button>
        <Button size={ButtonSize.small} btnType={ButtonType.black}>click</Button>
        <Button size={ButtonSize.small} btnType={ButtonType.cool}>click</Button>
        <Button size={ButtonSize.small} btnType={ButtonType.primary}>click</Button>
        <Button size={ButtonSize.small} btnType={ButtonType.danger}>click</Button>
        <Button size={ButtonSize.small} btnType={ButtonType.text}>click</Button>
        <Button size={ButtonSize.small} btnType={ButtonType.link}>click</Button>
        <Button size={ButtonSize.small} btnType={ButtonType.warm}>click</Button>
        <Button size={ButtonSize.small} btnType={ButtonType.lovely}>click</Button>
        <Button size={ButtonSize.small} btnType={ButtonType.purple}>click</Button>
        <Button size={ButtonSize.small} btnType={ButtonType.green}>click</Button>
      </div>

    </div>
  );
}

export default App;
