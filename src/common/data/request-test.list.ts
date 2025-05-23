import { CaracterEspecial } from '../constants/CaracterEspecial'
import { RequestTestData } from './request-test.model'
import { Type } from 'class-transformer';

export class RequestTestList {
  @Type(() => RequestTestData)
  protected requestTestList: RequestTestData[];
  
  constructor() {
    this.requestTestList = [];
  }

  public get(i: number): RequestTestData {
    return this.requestTestList[i];
  }

  public hasID(ID: number): boolean {
    for (let i = 0; i < this.size(); i++) {
      const testID = this.get(i).getTestID();
      if (ID === testID) {
        return true;
      }
    }
    return false;
  }

  getByID(pID: number | null): RequestTestData | null {
    if (pID == null) return null;
    for (let item of this.requestTestList) {
      if (item.getTestID() === pID) {
        return item;
      }
    }

    return null;
  }

  public add(raiData: RequestTestData): void {
    const id = raiData.getTestID();
    let found = this.requestTestList.some(item =>
      item.getTestID() != null &&
      id != null &&
      item.getTestID() === id
    );
    if (!found) {
      this.requestTestList.push(raiData);
    }
  }

  public size(): number {
    return this.requestTestList.length;
  }

  public isEmpty(): boolean {
    return this.requestTestList.length === 0;
  }

  //@Override
  public toXML(): string {
    if (this.requestTestList.length === 0) return "";
    let result = "<REQUESTTESTLIST>" + CaracterEspecial.SALTO_CARRO;
    for (let item of this.requestTestList) {
      result += item.toXML();
    }
    result += "</REQUESTTESTLIST>" + CaracterEspecial.SALTO_CARRO;
    return result;
  }

  //@Override
  public toString(): string
  {
    let sRetorno: string  = " ";
    for (let i = 0; i < this.requestTestList.length; i++)
    {
      sRetorno = sRetorno.concat("Elemento " + i + ": ");
      sRetorno = sRetorno.concat(this.get(i).toString());
      sRetorno = sRetorno.concat(CaracterEspecial.SALTO_CARRO);
    }
    return sRetorno;
  }
}
