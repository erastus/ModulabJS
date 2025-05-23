import { CaracterEspecial } from '../constants/CaracterEspecial'
import { PatientPathologyData } from './patient-pathology.model'
import { Type } from 'class-transformer';

export class PatientPathologyList {
  @Type(() => PatientPathologyData)
  protected patientPathologyList: PatientPathologyData[];
  
  constructor() {
    this.patientPathologyList = [];
  }

  public get(i: number): PatientPathologyData {
    return this.patientPathologyList[i];
  }

  public add(raiData: PatientPathologyData): void {
    const id = raiData.getPathologyID();
    let found = this.patientPathologyList.some(item =>
      item.getPathologyID() != null &&
      id != null &&
      item.getPathologyID() === id
    );
    if (!found) {
      this.patientPathologyList.push(raiData);
    }
  }

  public size(): number {
    return this.patientPathologyList.length;
  }

  public isEmpty(): boolean {
    return this.patientPathologyList.length === 0;
  }

  //@Override
  public toXML(): string {
    if (this.patientPathologyList.length === 0) return "";
    let result = "<PATIENTPATHOLOGYLIST>" + CaracterEspecial.SALTO_CARRO;
    for (let item of this.patientPathologyList) {
      result += item.toXML();
    }
    result += "</PATIENTPATHOLOGYLIST>" + CaracterEspecial.SALTO_CARRO;
    return result;
  }

  //@Override
  public toString(): string
  {
    let sRetorno: string  = " ";
    for (let i = 0; i < this.patientPathologyList.length; i++)
    {
      sRetorno = sRetorno.concat("Elemento " + i + ": ");
      sRetorno = sRetorno.concat(this.get(i).toString());
      sRetorno = sRetorno.concat(CaracterEspecial.SALTO_CARRO);
    }
    return sRetorno;
  }
}
