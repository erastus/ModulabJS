import { CaracterEspecial } from '../constants/CaracterEspecial'
import { PatientAdditionalInfoData } from './patient-additional-info.model'
import { Type } from 'class-transformer';

export class PatientAdditionalInfoList {
  @Type(() => PatientAdditionalInfoData)
  protected patientAdditionalInfoList: PatientAdditionalInfoData[];
  
  constructor() {
    this.patientAdditionalInfoList = [];
  }

  get(i: number): PatientAdditionalInfoData {
    return this.patientAdditionalInfoList[i];
  }

  getByCode(code: string | null): PatientAdditionalInfoData | null {
    if (code == null) return null;
    for (let item of this.patientAdditionalInfoList) {
      if (item.getAdditionalInfoCode().equals(code)) {
        return item;
      }
    }
    return null;
  }

  getByID(pID: number | null): PatientAdditionalInfoData | null {
    if (pID == null) return null;
    for (let item of this.patientAdditionalInfoList) {
      if (item.getAdditionalInfoID() === pID) {
        return item;
      }
    }
    return null;
  }

  add(raiData: PatientAdditionalInfoData): void {
    const id = raiData.getAdditionalInfoID();
    let found = this.patientAdditionalInfoList.some(item =>
      item.getAdditionalInfoID() != null &&
      id != null &&
      item.getAdditionalInfoID() === id
    );
    if (!found) {
      this.patientAdditionalInfoList.push(raiData);
    }
  }

  size(): number {
    return this.patientAdditionalInfoList.length;
  }

  public isEmpty(): boolean {
    return this.patientAdditionalInfoList.length === 0;
  }

  //@Override
  toXML(): string {
    if (this.patientAdditionalInfoList.length === 0) return "";
    let result = "<PATIENTADDITIONALINFOLIST>" + CaracterEspecial.SALTO_CARRO;
    for (let item of this.patientAdditionalInfoList) {
      result += item.toXML();
    }
    result += "</PATIENTADDITIONALINFOLIST>" + CaracterEspecial.SALTO_CARRO;
    return result;
  }

  //@Override
  public toString(): string
  {
    let sRetorno: string  = " ";
    for (let i = 0; i < this.patientAdditionalInfoList.length; i++)
    {
      sRetorno = sRetorno.concat("Elemento " + i + ": ");
      sRetorno = sRetorno.concat(this.get(i).toString());
      sRetorno = sRetorno.concat(CaracterEspecial.SALTO_CARRO);
    }
    return sRetorno;
  }
}
