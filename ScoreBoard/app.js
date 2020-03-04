const players = [
    {
        name: "Guil",
        score: 50,
        id: 1
      },

      {
        name: "Treasure",
        score: 85,
        id: 2
      },

      {
        name: "Ashley",
        score: 95,
        id: 3
      },

      {
        name: "James",
        score: 80,
        id: 4
      }
]


function Header(props){
    return (
        <header className="header">
            <h1 className="scoreboard"> {props.title} </h1>
            <span className="stats">Players: {players.length}</span>
        </header>
    );
}

const Player  = (props) => {
    return (
        <div className="player">
            <span className="player-name">
                {props.name}
            </span>
            <Counter />
        </div>
    );
}

class Counter extends React.Component {
    
    // constructor(){
    //     super()
    //     this.state = {
    //         score: 0
    //     };
    // }
    
    state = {
        score: 0
    };

    incrementScore(){
        this.setState({
            score: this.state.score + 1
        });
        // console.log(this);
    }

    decrementScore(){
        this.setState({
            score: this.state.score - 1
        });
    }

    render() {
        return (
            <div className="counter">
                <button className="counter-action decrement" onClick={this.decrementScore.bind(this)}> - </button>
                <span className="counter-score">{this.state.score}</span>
                <button className="counter-action increment" onClick={this.incrementScore.bind(this)}> + </button>
            </div>
        );
    }
}

const App = (props) => {
    return (
        <div className="scoreboard">
            <Header title="My Scoreboard" totalPlayer={n => n + 10} />
            {/* Player list */}

            {props.initialPlayers.map( player=> 
                <Player 
                name={player.name} 
                // score={player.score} 
                key={player.id.toString()}
                />
            )}
        </div>
    );
}

ReactDOM.render(
    <App initialPlayers={players} />,
    document.getElementById('root')
);

