export class CounterService {

  toInactiveActionNumber: number = 0;
  toActiveActionNumber: number = 0;

  constructor() { }

  toInactiveActionsNumbers() {
    this.toInactiveActionNumber ++;
    console.log("Actions numbers active => inactive : " + this.toInactiveActionNumber)
  }

  toActiveActionsNumbers() {
    this.toActiveActionNumber ++;
    console.log("Actions numbers inactive => active : " + this.toActiveActionNumber)
  }
}
