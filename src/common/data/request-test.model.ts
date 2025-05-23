export class RequestTestData {
  public testID: number = undefined;

  constructor() {
    this.testID = null;
  }

  public getTestID(): number {
    return this.testID;
  }
  
  public setTestID(pTestID: number): void {
    this.testID = pTestID;
  }
}