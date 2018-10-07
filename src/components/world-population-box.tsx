import * as React from "react";
import { render } from "react-dom";

import { HelloWorldViewModel } from "../models/hello-world-view-model";
import { ApplicationState } from "../models/application-state";

export class WorldPopulationBox extends 
React.PureComponent<
HelloWorldViewModel> 
{
  render() {
    {
      const vm = this.props;
      if (vm.applicationState === ApplicationState.Idle) {
        return (
          <p>Please press the button to see world population dummy response</p>
        );
      }
      if (
        vm.applicationState === ApplicationState.ResponseReceivedSuccessfully
      ) {
        const worldPopulation = vm.worldPopulation;

        let styles = {
          tableStyle: {
            padding: "20px",
            "border-spacing": "10px",
            "border-collapse": "separate",
            border: "2px dashed purple"
          }
        };

        return (
          <table style={styles.tableStyle}>
            <thead>
              <tr>
                <td>Country</td>
                <td>Dob</td>
                <td>Sex</td>
                <td>Rank</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{worldPopulation.country}</td>
                <td>{worldPopulation.dob}</td>
                <td>{worldPopulation.sex}</td>
                <td>{worldPopulation.rank}</td>
              </tr>
            </tbody>
          </table>
        );
      } else if (vm.applicationState === ApplicationState.SendRequest) {
        return <p>Sending request to server please wait.</p>;
      }
    }
  }
}
