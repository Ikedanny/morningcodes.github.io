import React, { Component } from 'react'

class AddTodo extends Component {
    state={
        content:''
    }

    handleChange=(e)=> {
        this.setState({
            content:e.target.value
        })
    }

    //Arrow function to handle submit events
    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.addTodo(this.state);
        this.setState({
            content:''
        })
    }
    
    render() {
        return (
            <div className="container">

               
               <div className="row">

                   <div className="col-md-6 offset-md-3">
                       
                       
                       <form onSubmit={this.handleSubmit}>

                           <div className="form-group">

                               <label >Add New Todo</label>

                               <div className="d-sm-flex d-grid gap-3" >
                                   
                                   <input type="text" className="form-control" id="todo"
                                   onChange={this.handleChange} value={this.state.content} />

                                 <button type="submit" className="btn btn-primary btn-lg">Submit</button>

                               </div>
                           
                           </div>

                       </form>

                   </div>
                </div> 
            </div>
        )
    }
}

export default AddTodo
