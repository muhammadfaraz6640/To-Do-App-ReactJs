import React , { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import uuid from "uuid";
export default class TodoInput extends Component {
    render(){
        const {item,handleChange,handleSubmit} = this.props;
        return (  
        <form onSubmit={handleSubmit}>
           <div className="input-group flex-nowrap">
               <div className="input-group-prepend">
                    <span className="input-group-text" id="addon-wrapping"><i class="fa fa-tasks" aria-hidden="true"></i></span>                    
               </div>
               <input type="text" className="form-control" placeholder="Write your activity" value={item} onChange={handleChange}/>
           </div>    
           <button type="submit" className="btn btn-primary btn-block">Add Item</button>    
           </form>
          );       
    }
}