import React from 'react';
import * as compose from 'lodash.flowright';
import {getAutorsQuery,addBookMutation, getBooksQuery} from '../../queries/queries';
import {graphql} from "react-apollo";

class AddBook extends React.Component{
      constructor(props){
          super(props);
          this.state={
              name:"",
              genre:"",
              authorId:""
          }
      }
   
     displayAuthors(){
         var data = this.props.getAutorsQuery;
         if(data.loading === true){
             return (<option disabled>Loading Authors...</option>)
         }else{
             return data.authors.map((author)=>{
                 return (<option key={author.id} value={author.id}>{author.name}</option>)
             });
         }
     }

     handleSubmit=(e)=>{
      e.preventDefault();
      this.props.addBookMutation({
          variables:{
              name:this.state.name,
              genre:this.state.genre,
              authorId:this.state.authorId
          },
          refetchQueries:[{query:getBooksQuery}]
      });
     }
    render(){
        
        return (
            <form id="add-book" onSubmit={this.handleSubmit} method="POST">
            <div className="field">
                <label>name</label>
                <input type="text" onChange = {(e)=>this.setState({name:e.target.value})}/>
            </div>
            <div className="field">
                <label>genre</label>
                <input type="text" onChange = {(e)=>this.setState({genre:e.target.value})} />
            </div>
            <div className="field">
                <label>Author</label>
                <select onChange = {(e)=>this.setState({authorId:e.target.value})}>
                <option>Select author</option>
                { this.displayAuthors()}
                </select>
               
            </div>

            <button>+</button>

            </form>
        )
    }
}

export default compose(
    graphql(getAutorsQuery,{name:"getAutorsQuery"}),
    graphql(addBookMutation,{name:"addBookMutation"}),
)(AddBook);
    