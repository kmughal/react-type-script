import { WorldPopulation } from "../models/world-population";
//import "whatwg-fetch"

export class WorldPopulationService {
  get = () =>
    (async () => {
      const response = await fetch("http://localhost:8000/records");
      const json = await response.json();
      return json as WorldPopulation;
    })();
}
