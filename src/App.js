import React from 'react';
import './style.css';

export default class Demo extends React.Component {
  state = {
    selectedFile: null
  };

  fileSelectedHandler = event => {
    this.selectedFile = event.target.files[0];
  };

  fileUploadHandler = event => {
    console.log(event.target.files);
  };

  render() {
    return (
      <div>
        <input
          type="file"
          onChange={this.fileSelectedHandler}
          accept="image/png, image/jpeg"
        />
        <button onClick={this.fileUploadHandler}>Upload File</button>
      </div>
    );
  }
}
