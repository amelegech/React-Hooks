import React from 'react';

class Count extends React.PureComponent{
    constructor(props){
        super(props)
        this.state ={
            myCount:0
        }
    this.countIncrement = this.countIncrement.bind(this)

    }
    countIncrement(){
        this.setState({ myCount: this.state.myCount + 2 })
        console.log(" count valueeeee", this.state. myCount);
    }
    render(){
        return(
            <div>
  <button onClick={this.countIncrement}>myCount ++</button>
  <h6>Class Count val:-{this.state.myCount}</h6>
            </div>
        )
    }

}
export default Count;

/************************ Functional Component***************************** */
/**
 const Count=()=>{
     const [count, setCount]= useState(0)

    const addCount =()=>{
        setCount(count + 1)
    }

    return(
        <div>
            <h5>useEffect() is  a hook which allow us to implement AJAx call. <br/>also its a powrful hook that can  replace the use case of mounting, updating and unmounting phases.</h5>
            <button onClick={addCount}>Counte Increment</button>
            <p> count value: {count}</p>

        </div>
    )
     
 }
 export default React.memo(Count);
 */