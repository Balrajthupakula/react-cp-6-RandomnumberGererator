// Write your code here


import{Component} from 'react'
import './index.css'
class RandomNumberGenerator extends Component{
        state={count:0}

    onGetRandomClick=()=>{
        const getRandomNumber=Math.ceil(Math.random()*100)
        this.setState({count: getRandomNumber})
    }

    render(){
        const{count}=this.state


        return(
            <div className="main-container"> 
                <div className="inner-container">
                    <h1 className="heading">Random Number</h1>
                    <p className="para">Generate a random number in the range of 0 to 100</p>
                    <button className="button" type="button" onClick={this.onGetRandomClick}>Generate</button>
                    <p className="count">{count}</p>
                </div>
            
            </div>
        )
    }
}

export default RandomNumberGenerator