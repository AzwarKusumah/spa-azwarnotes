import React, { Component } from "react";
import { RiSaveLine } from "react-icons/ri";
import PropTypes from "prop-types";

class NotesInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
    };

    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    this.setState({ title: event.target.value });
  }

  onBodyChangeEventHandler(event) {
    this.setState({ body: event.target.innerText });
  }

  onSubmitEventHandler() {
    this.props.addNote(this.state);
  }

  render() {
    return (
      <div className="container m-auto h-screen">
        <div className="mt-8">
          <input
            type="text"
            placeholder="Catatan Rahasia"
            className="w-full p-4 text-4xl bg-transparent border-2 border-neutral-900 font-bold"
            value={this.state.title}
            onChange={(event) => this.onTitleChangeEventHandler(event)}
          />
          <div
            className="w-full bg-transparent text-2xl p-2 min-h-[500px] mt-8 border-2 border-neutral-900 before:empty:content-[attr(data-placeholder)]"
            contentEditable
            data-placeholder="Sebenarnya saya adalah ...."
            onInput={(event) => this.onBodyChangeEventHandler(event)}
          ></div>
        </div>
        <div className="fixed flex gap-4 bottom-8 right-8">
          <button
            className="btn cursor-pointer flex text-4xl justify-center items-center text-base-100 bg-neutral rounded-xl p-2 w-12 h-12 border-0"
            type="button"
            onClick={this.onSubmitEventHandler}
          >
            <RiSaveLine />
          </button>
        </div>
      </div>
    );
  }
}

NotesInput.propTypes = {
  addNote: PropTypes.func.isRequired,
};

export default NotesInput;
