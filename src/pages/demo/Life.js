import React, { Component } from 'react';
import Child from './Child';
import {Button} from 'antd';
import 'antd/dist/antd.css';
import './index.less';
// import 'antd/dist/antd.css';

export default class Life extends Component {
    constructor(props) {
        super(props);
        this.state= {
            count:0
        }
        this.handleAdd=this.handleAdd.bind(this);
        this.handleSub=this.handleSub.bind(this);
    }
    handleAdd=()=>{
        this.setState({
            count:this.state.count+1
        })
    }
    handleSub=()=>{
        this.setState({
            count:this.state.count-1
        })
    }
    render() {
        const {count} = this.state;
        const {handleAdd,handleSub} = this;
        return (
            <div className="content">
                <p>React生命周期介绍</p>
                <Button onClick={handleAdd} type="primary">antd点击</Button>
                <button onClick={handleAdd}>点击+</button>
                <button onClick={handleSub}>点击-</button>
                <p>{count}</p>
                <Child count={this.state.count}/>
            </div>
        )
    }
}