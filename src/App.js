import React, { Component } from 'react';
import './App.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import "bootstrap/dist/css/bootstrap.min.css";
// import uuid from 'uuid/v4';
import {v4 as uuid} from 'uuid';


class App extends Component {
  state={
    items : [],
    id: uuid() ,  //uuid generates unique id at runtime
    item:'',
    editItem:false
  }
  handleChange = (e)=>{
    this.setState({
      item: e.target.value
    });
  }; 
  handleSubmit = (e)=>{
      e.preventDefault();
      const newItem = {
        id: this.state.id,
        title:this.state.item
      }
      console.log(newItem);
      const UpdatedItem = [...this.state.items,newItem]
      this.setState({
        items:UpdatedItem,
        item: "",
        id: uuid(),
        editItem:false
      });
  };
  clearlist = ()=>{
    this.setState({
      items : []  //empty array
    })      
  }
  handleDelete = id =>{
    const filteredItems = this.state.items.filter( item =>
      item.id !== id);
      this.setState({
        items: filteredItems
      });      
  };
  render(){
    return (
      <div className="container">
        <div className="row">
          <div className="col-10">
            <h3 className="text-capitalize text-center">
                WRITE TO DO ITEM 
            </h3>
          <TodoInput item={this.state.item} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
          <TodoList items={this.state.items} clearlist={this.clearlist} handleDelete={this.handleDelete}/>
          </div>
        </div>
      </div>         
    );
    }
  
}

export default App;
