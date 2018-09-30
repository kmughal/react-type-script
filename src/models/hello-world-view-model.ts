import { ApplicationState } from "./application-state";
import { WorldPopulation } from "./world-population";

export class HelloWorldViewModel {
  constructor(
    public worldPopulation: WorldPopulation,
    public applicationState: ApplicationState
  ) {}

  public static createEmptyViewModel = () =>
    new HelloWorldViewModel(null, ApplicationState.Idle);

  public static createViewModel = (worldPopulation: WorldPopulation) =>
    new HelloWorldViewModel(
      worldPopulation,
      ApplicationState.ResponseReceivedSuccessfully
    );

  public static createViewModelBeforeSendRequest = () =>
    new HelloWorldViewModel(null, ApplicationState.SendRequest);
}
