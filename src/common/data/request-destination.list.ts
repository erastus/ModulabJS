import { CaracterEspecial } from '../constants/CaracterEspecial'
import { RequestDestinationData } from './request-destination.model'
import { Type } from 'class-transformer';

export class RequestDestinationList {
  @Type(() => RequestDestinationData)
  protected requestDestinationList: RequestDestinationData[];
  
  constructor() {
    this.requestDestinationList = [];
  }

  public get(i: number): RequestDestinationData {
    return this.requestDestinationList[i];
  }

  public add(raiData: RequestDestinationData): void {
    const id = raiData.getDestinationID();
    let found = this.requestDestinationList.some(item =>
      item.getDestinationID() != null &&
      id != null &&
      item.getDestinationID() === id
    );
    if (!found) {
      this.requestDestinationList.push(raiData);
    }
  }

  public size(): number {
    return this.requestDestinationList.length;
  }

  public isEmpty(): boolean {
    return this.requestDestinationList.length === 0;
  }

  //@Override
  public toXML(): string {
    if (this.requestDestinationList.length === 0) return "";
    let result = "<REQUESTDESTINATIONLIST>" + CaracterEspecial.SALTO_CARRO;
    for (let item of this.requestDestinationList) {
      result += item.toXML();
    }
    result += "</REQUESTDESTINATIONLIST>" + CaracterEspecial.SALTO_CARRO;
    return result;
  }

  //@Override
  public toString(): string
  {
    let sRetorno: string  = " ";
    for (let i = 0; i < this.requestDestinationList.length; i++)
    {
      sRetorno = sRetorno.concat("Elemento " + i + ": ");
      sRetorno = sRetorno.concat(this.get(i).toString());
      sRetorno = sRetorno.concat(CaracterEspecial.SALTO_CARRO);
    }
    return sRetorno;
  }
}
