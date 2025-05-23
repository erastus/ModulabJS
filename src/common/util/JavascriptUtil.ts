import { RequestData } from '../data/request.model';
import { JavaString } from '../data/types/javaString';

export class JavascriptUtil {
  constructor() {}

  public showMessage(message: string | JavaString | Boolean): void {

    if(message === null) {
      console.log('\x1b[37m\x1b[41m null \x1b[0m');
      return;
    }

    console.log(message.toString());
  }

  public hasTest(aRequestData: RequestData, sTestID: String | JavaString): Boolean {
    return false;
  }

  public hasProfile(aRequestData: RequestData, sProfileID: String | JavaString): Boolean {
    return false;
  }

  public hasAdditionalInfo(aRequestData: RequestData, sAdditionalInfoID: String | JavaString): Boolean {
    return false;
  }

  public hasGroup(aRequestData: RequestData, sGroupID: String | JavaString): Boolean {
    return false;
  }

  public getEqualsDateSubQueryPart(aTimestamp: any): JavaString {
    return new JavaString("REQUESTDATE");
  }

  public runQuery(sqlQuery: String): number {
    return -1;
  }

  public getNumberOfTestsInDate(sTestID: String | JavaString, aTimestamp: any): number {
    return -1
  }

  public getDayOfWeek(aTimestamp: any): number {
    return -1
  }

  public getDayOfMonth(aTimestamp: any): number {
    return -1
  }

  public getMonth(aTimestamp: any): number {
    return -1
  }

  public getAsDate(aTimestamp: any): any {
    return null;
  }
}
