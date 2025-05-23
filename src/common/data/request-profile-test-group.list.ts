import { CaracterEspecial } from '../constants/CaracterEspecial'
import { RequestProfileTestGroupData } from './request-profile-test-group.model'
import { Type } from 'class-transformer';

export class RequestProfileTestGroupList {
  @Type(() => RequestProfileTestGroupData)
  protected requestProfileTestGroupList: RequestProfileTestGroupData[];
  
  constructor() {
    this.requestProfileTestGroupList = [];
  }

  public get(i: number): RequestProfileTestGroupData {
    return this.requestProfileTestGroupList[i];
  }

  public add(raiData: RequestProfileTestGroupData): void {
    const id = raiData.getProfileTestGroupID();
    let found = this.requestProfileTestGroupList.some(item =>
      item.getProfileTestGroupID() != null &&
      id != null &&
      item.getProfileTestGroupID() === id
    );
    if (!found) {
      this.requestProfileTestGroupList.push(raiData);
    }
  }

  public size(): number {
    return this.requestProfileTestGroupList.length;
  }

  public isEmpty(): boolean {
    return this.requestProfileTestGroupList.length === 0;
  }

  //@Override
  public toXML(): string {
    if (this.requestProfileTestGroupList.length === 0) return "";
    let result = "<REQUESTPROFILETESTGROUPLIST>" + CaracterEspecial.SALTO_CARRO;
    for (let item of this.requestProfileTestGroupList) {
      result += item.toXML();
    }
    result += "</REQUESTPROFILETESTGROUPLIST>" + CaracterEspecial.SALTO_CARRO;
    return result;
  }

  //@Override
  public toString(): string
  {
    let sRetorno: string  = " ";
    for (let i = 0; i < this.requestProfileTestGroupList.length; i++)
    {
      sRetorno = sRetorno.concat("Elemento " + i + ": ");
      sRetorno = sRetorno.concat(this.get(i).toString());
      sRetorno = sRetorno.concat(CaracterEspecial.SALTO_CARRO);
    }
    return sRetorno;
  }
}
