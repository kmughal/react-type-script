import * as React from "react";
import { render } from "react-dom";
import { WorldPopulationService } from "../service/world-population-service";
import { HelloWorldViewModel } from "../models/hello-world-view-model";
import { WorldPopulationBox } from "./world-population-box";

export class HelloWorld extends React.Component<{}, HelloWorldViewModel> {
  constructor() {
    super({});
    this.updateState(HelloWorldViewModel.createEmptyViewModel());
  }

  updateState = (vm: HelloWorldViewModel) => this.setState(vm);

  getRecords() {
    const self = this;
    const service = new WorldPopulationService();
    self.updateState(HelloWorldViewModel.createViewModelBeforeSendRequest());
    service.get().then(s => {
      self.updateState(HelloWorldViewModel.createViewModel(s));
    });
  }

  getWorldPopulation() {
    return this.state
      ? new HelloWorldViewModel(
          this.state.worldPopulation,
          this.state.applicationState
        )
      : HelloWorldViewModel.createEmptyViewModel();
  }

  render() {
    const worldPopulationProps = this.getWorldPopulation();

    return (
      <div>
        <h1>World Population React sample App.</h1>
        <WorldPopulationBox {...worldPopulationProps} />
        <br/>
        <button onClick={this.getRecords.bind(this)}>Get UK Population Data</button>
      </div>
    );
  }
}
