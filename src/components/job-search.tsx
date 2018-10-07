import * as React from "react";
import { render } from "react-dom";

export class JobSearchQuery {
  public q: string;
}

export class JobSearchBar extends React.Component<{}, JobSearchQuery> {
  private q: React.RefObject<HTMLInputElement>;

  constructor() {
    super({});
    this.q = React.createRef();
  }

  updateState = (vm: JobSearchQuery) => this.setState(vm);

  show() {
   this.updateState({q:this.q.current.value})
  }

  getJobs() {
    const q = this.q.current.value;
    
  }

  render() {
    return (
      <div>
        <input type="text" ref={this.q} onChange={this.show.bind(this)} />
        q:{this.state && this.state.q ? this.state.q : ""}
        <button onClick={this.getJobs.bind(this)}>Search</button>
      </div>
    );
  }
}
