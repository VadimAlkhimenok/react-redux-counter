import React, { Component } from 'react';
import classes from './App.module.css';
import Counter from './Counter';
import { connect } from 'react-redux';
import { add, sub, addNumber, subNumber, asyncAdd } from './reducer/actions/actions';

class App extends Component {

  render() {
    return(
      <div className={ classes.App }>
        
        <h1>Счетчик { this.props.counter }</h1>
        <hr />

        <div className={ classes.button }>
          <button onClick={ this.props.onAdd }>Добавить 1</button>
          <button onClick={ this.props.onSub }>Вычесть 1</button>
        </div>

        <div className={ classes.button }>
          <button onClick={ () => this.props.onAddNumber( 5 ) }>Добавить</button>
          <button onClick={ () => this.props.onSubNumber( 5 ) }>Вычесть</button>
        </div>

        <div className={ classes.button }>
          <button onClick={ () => this.props.onAsyncAdd( 100 ) }>Добавить асинхронно 100</button>
        </div>

        <Counter />

      </div>
    )
  }

}

// connect
function mapStateToProps( state ) {
  return {
    counter: state.counter1.counter
  }
}

function mapDispatchToProps( dispatch ) {
  return {
    onAdd: () => dispatch( add() ),
    onSub: () => dispatch( sub() ),
    onAddNumber: number => dispatch( addNumber( number ) ),
    onSubNumber: number => dispatch( subNumber( number ) ),
    onAsyncAdd: number => dispatch( asyncAdd( number ) ),
  }
}

export default connect( mapStateToProps, mapDispatchToProps )( App );