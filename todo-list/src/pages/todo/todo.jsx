import React from "react";
import ReactDOM from "react-dom";
import ListItems from "../../component/listItems/listItems";
import Donelist from "../../component/donelist/donelist";
import "./style.css";
class ToDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      doneItems: [],
      currentItem: {
        text: "",
        key: "",
      },
    };
    this.addItem = this.addItem.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.setUpdate = this.setUpdate.bind(this);
    this.setDone = this.setDone.bind(this);
  }
  addItem(e) {
    e.preventDefault();
    const newItem = this.state.currentItem;
    if (newItem.text !== "") {
      const items = [...this.state.items, newItem];
      this.setState({
        items: items,
        currentItem: {
          text: "",
          key: "",
        },
      });
    }
  }
  handleInput(e) {
    this.setState({
      currentItem: {
        text: e.target.value,
        key: Date.now(),
      },
    });
  }
  deleteItem(key) {
    const filteredItems = this.state.items.filter((item) => item.key !== key);
    this.setState({
      items: filteredItems,
    });
  }
  setDone(key) {
    const items = this.state.items;
    let doneTaskItem = "";
    items.map((item) => {
      if (item.key === key) {
        doneTaskItem = item;
      }
    });
    this.deleteItem(key);

    const doneItems = [...this.state.doneItems, doneTaskItem];
    this.setState({
      doneItems: doneItems,
    });
  }
  setUpdate(text, key) {
    const items = this.state.items;
    items.map((item) => {
      if (item.key === key) {
        item.text = text;
      }
    });
    this.setState({
      items: items,
    });
  }
  render() {
    return (
      <div className="todo">
        <form id="to-do-form" onSubmit={this.addItem}>
          <input
            type="text"
            placeholder="Enter task"
            value={this.state.currentItem.text}
            onChange={this.handleInput}
          ></input>
          <button type="submit">
            <i class="far fa-plus-square"></i>
          </button>
        </form>
        {/* <p>{this.state.items.text}test</p> */}
        {this.state.items.length != 0 && (
          <ListItems
            items={this.state.items}
            deleteItem={this.deleteItem}
            setUpdate={this.setUpdate}
            setDone={this.setDone}
          />
        )}
        {this.state.doneItems.length != 0 && this.state.items.length != 0 ? (
          <div>
            <hr />
          </div>
        ) : (
          ""
        )}
        {this.state.doneItems.length != 0 && (
          <div>
            <Donelist items={this.state.doneItems} />
          </div>
        )}
      </div>
    );
  }
}
export default ToDo;
