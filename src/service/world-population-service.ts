import { WorldPopulation } from "../models/world-population";
//import "whatwg-fetch"

export class WorldPopulationService {

  test() {
    fetch(" https://jobs.search.gov/jobs/search.json?query=nursing+jobs+with+veterans+affairs+in+albany+ny")
    .then(r=> {
      r.json().then(j=>{
        console.log(j);
      })
    })
  }
  get = () =>
    (async () => {
      this.test();
      const response = await fetch("http://localhost:8000/records");
      const json = await response.json();
      return json as WorldPopulation;
    })();
}
