import React from "react";
import marked from "marked";
import "./App.css";

import DM from "./defaultMarkdown";

marked.setOptions({
  breaks: true,
  sanitize: true
});

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      markdown: DM
    };
    this.handleChange = this.handleChange.bind(this);
    this.parsed = this.parsed.bind(this);
  }

  handleChange(e) {
    let va = e.target.value;
    this.setState(state => ({
      ...state,
      markdown: va
    }));
  }

  parsed(e) {
    let str = marked(e);
    return { __html: str };
  }

  render() {
    const { markdown } = this.state;

    return (
      <div className="App">
        <div className="container-fluid App-container">
          <h1>Markdown Converter to HTML</h1>
          <div className="row w-100">
            <div className="col">
              <h3>Editor Markdown</h3>
              <textarea
                id="editor"
                rows="20"
                value={markdown}
                onChange={this.handleChange}
              />
            </div>
            <div className="col">
              <h3>Viewer HTML</h3>
              <div
                id="preview"
                dangerouslySetInnerHTML={this.parsed(markdown)}
              />
            </div>
          </div>
          <footer>
            <p>
              <a
                href="https:emiliort.com"
                target="_blank"
                class="text-decoration-none text-secondary me"
                rel="noopener noreferrer"
              >
                By EmilioRT
              </a>
            </p>
          </footer>
        </div>
      </div>
    );
  }
}

export default App;
