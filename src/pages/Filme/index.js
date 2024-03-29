import React, {Component } from 'react';
import './index.css';

class Filme extends Component{
    constructor(props){
        super(props);
        this.state={
            filme:[]
        }
    }

    render(){
        return(
            <div className='filme-info'>
                <h1>{this.state.filme.nome}</h1>
                <img src={this.state.filme.foto} />
                <h3>Sinopse</h3>
                {this.state.filme.sinopse}
            </div>
        );
    }

    componentDidMount(){
        const {id} = this.props.match.params;

        let url = 'https://sujeitoprogramador.com/r-api/?api=filmes/'+id;
        console.log({url});
        console.log({id});

        fetch(url)
        .then((r)=>r.json())
        .then((json) =>{
            this.setState({filme:json})
            console.log(json);
         });

   }
}
export default Filme;