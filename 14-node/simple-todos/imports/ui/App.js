import React, { PureComponent as Component } from 'react';
import ReactDOM from 'react-dom';
import { withTracker } from 'meteor/react-meteor-data';

import { Tasks } from '../api/task'; // Mongodb collection (i.e. Model)

import Task from './Task'; // <Task> Component

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hideCompleted: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleHideCompleted = this.toggleHideCompleted.bind(this);
  }

  toggleHideCompleted() {
    this.setState({
      hideCompleted: !this.state.hideCompleted
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim(); // ?!

    Tasks.insert({
      text: text,
      createdAt: new Date()
    });

    ReactDOM.findDOMNode(this.refs.textInput).value = ''; // ?!
  }

  renderTasks() {
    let filteredTasks = this.props.tasks;
    if (this.state.hideCompleted) {
      filteredTasks = filteredTasks.filter(task => !task.done);
    }
    return filteredTasks.map((task) => <Task key={task._id} task={task} />);
  }

  render() {
    return (
      <div className="container">
        <header>
          <h1>Todo List</h1>

          <label className="hide-completed">
            <input type="checkbox" readOnly checked={this.state.hideCompleted} onClick={this.toggleHideCompleted} />
            Hide completed tasks
          </label>

          <form className="new-task" onSubmit={this.handleSubmit}>
            <input type="text" ref="textInput" placeholder="Type to add new tasks" />
          </form>

        </header>

        <ul>
          {this.renderTasks()}
        </ul>
      </div>
    )
  }
}

// Higher Order Function
export default withTracker(() => {
  return {
    tasks: Tasks.find({}, { sort: { createdAt: -1 } }).fetch()
  }
})(App); // You are not expected to understand this.
