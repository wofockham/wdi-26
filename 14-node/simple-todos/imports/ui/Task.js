import React, { PureComponent as Component } from 'react';
import { Tasks } from '../api/task';

export default class Task extends Component {
  constructor(props) {
    super(props);
    this.deleteTask = this.deleteTask.bind(this);
    this.toggleDone = this.toggleDone.bind(this);
  }

  toggleDone() {
    Tasks.update(this.props.task._id, {
      $set: { done: !this.props.task.done }
    })
  }

  deleteTask() {
    Tasks.remove(this.props.task._id);
  }

  render() {
    const taskClassName = this.props.task.done ? "checked" : "";
    return (
      <li className={taskClassName}>
        <button className="delete" onClick={this.deleteTask}>
          &times;
        </button>
        <input type="checkbox" readOnly checked={!!this.props.task.done} onClick={this.toggleDone} />
        <span className="text">{this.props.task.text}</span>
      </li>
    );
  }
}
