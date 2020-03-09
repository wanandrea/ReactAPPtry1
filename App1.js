import React, {Component} from 'react';
import './App.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            bgColor: "",
        };

        // This binding is necessary to make `this` work in the callback

    }


    boxClick = (e) => {
        this.setState({
            bgColor: "red"
        })
        if(this.state.bgColor == 'red')
            return   this.setState({
                bgColor: "white"
            });
        console.log('this is:', this);
    }

    render() {
        return (
            <div className="App">
                <article className='experimentsHolder'>
                    <h2>First Try</h2>
                    <p>onClick event 'renderd' by react</p>
                    <div> <button

                        className="boxClickCss"
                        style={{backgroundColor: this.state.bgColor}}

                        onClick={this.boxClick}>
                        Click Me! </button>
                    </div>

                </article>

            </div>
        );
    }
}


export default App;



