import { CaracterEspecial } from '../constants/CaracterEspecial'
import { RequestProfileData } from './request-profile.model'
import { Type } from 'class-transformer';

export class RequestProfileList {
  @Type(() => RequestProfileData)
  protected requestProfileList: RequestProfileData[];
  
  constructor() {
    this.requestProfileList = [];
  }

  public get(i: number): RequestProfileData {
    return this.requestProfileList[i];
  }

  public add(raiData: RequestProfileData): void {
    const id = raiData.getProfileID();
    let found = this.requestProfileList.some(item =>
      item.getProfileID() != null &&
      id != null &&
      item.getProfileID() === id
    );
    if (!found) {
      this.requestProfileList.push(raiData);
    }
  }

  public size(): number {
    return this.requestProfileList.length;
  }

  public isEmpty(): boolean {
    return this.requestProfileList.length === 0;
  }

  //@Override
  public toXML(): string {
    if (this.requestProfileList.length === 0) return "";
    let result = "<REQUESTPROFILELIST>" + CaracterEspecial.SALTO_CARRO;
    for (let item of this.requestProfileList) {
      result += item.toXML();
    }
    result += "</REQUESTPROFILELIST>" + CaracterEspecial.SALTO_CARRO;
    return result;
  }

  //@Override
  public toString(): string
  {
    let sRetorno: string  = " ";
    for (let i = 0; i < this.requestProfileList.length; i++)
    {
      sRetorno = sRetorno.concat("Elemento " + i + ": ");
      sRetorno = sRetorno.concat(this.get(i).toString());
      sRetorno = sRetorno.concat(CaracterEspecial.SALTO_CARRO);
    }
    return sRetorno;
  }
}
