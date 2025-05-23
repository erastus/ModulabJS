import { CaracterEspecial } from '../constants/CaracterEspecial'
import { RequestAdditionalInfoData } from './request-additional-info.model'
import { Type } from 'class-transformer';

export class RequestAdditionalInfoList {
  @Type(() => RequestAdditionalInfoData)
  protected requestAdditionalInfoList: RequestAdditionalInfoData[];
  
  constructor() {
    this.requestAdditionalInfoList = [];
  }

  get(i: number): RequestAdditionalInfoData {
    return this.requestAdditionalInfoList[i];
  }

  getByCode(code: string | null): RequestAdditionalInfoData | null {
    if (code == null) return null;
    for (let item of this.requestAdditionalInfoList) {
      if (item.getAdditionalInfoCode().equals(code)) {
        return item;
      }
    }
    return null;
  }

  getByID(pID: number | null): RequestAdditionalInfoData | null {
    if (pID == null) return null;
    for (let item of this.requestAdditionalInfoList) {
      if (item.getAdditionalInfoID() === pID) {
        return item;
      }
    }
    return null;
  }

  add(raiData: RequestAdditionalInfoData): void {
    const id = raiData.getAdditionalInfoID();
    let found = this.requestAdditionalInfoList.some(item =>
      item.getAdditionalInfoID() != null &&
      id != null &&
      item.getAdditionalInfoID() === id
    );
    if (!found) {
      this.requestAdditionalInfoList.push(raiData);
    }
  }

  size(): number {
    return this.requestAdditionalInfoList.length;
  }

  public isEmpty(): boolean {
    return this.requestAdditionalInfoList.length === 0;
  }

  //@Override
  toXML(): string {
    if (this.requestAdditionalInfoList.length === 0) return "";
    let result = "<REQUESTADDITIONALINFOLIST>" + CaracterEspecial.SALTO_CARRO;
    for (let item of this.requestAdditionalInfoList) {
      result += item.toXML();
    }
    result += "</REQUESTADDITIONALINFOLIST>" + CaracterEspecial.SALTO_CARRO;
    return result;
  }

  //@Override
  public toString(): string
  {
    let sRetorno: string  = " ";
    for (let i = 0; i < this.requestAdditionalInfoList.length; i++)
    {
      sRetorno = sRetorno.concat("Elemento " + i + ": ");
      sRetorno = sRetorno.concat(this.get(i).toString());
      sRetorno = sRetorno.concat(CaracterEspecial.SALTO_CARRO);
    }
    return sRetorno;
  }
}
