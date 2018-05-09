import React, { PureComponent as Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this._randomUser = this._randomUser.bind(this);
  }

  _randomUser() {
    const names = ["winnie-mach", "tarynelise", "shiang", "Sentrosi-Git", "samcochrane88", "robo2323", "ML78", "meenajim", "katshaze", "JulieEdelsvard", "joseph-michael", "JoseParraA", "ivorking", "austinnash80", "archihouse", "amandytang", "VL9", "oolakunle", "mradinoff", "chandigarh47", "mog12", "RK492-Blue", "SarabjitBansal"];
    const index = Math.floor( Math.random() * names.length );
    const username = names[ index ];
    this.context.router.history.push(`/details/${ username }`);
  }

  render() {
    return (
      <div class="app">
        <h1>Github Search</h1>
        <Link to="/search">
          <button>Search for a user</button>
        </Link>
        <button onClick={this._randomUser}>Random user</button>
      </div>
    )
  }
}
