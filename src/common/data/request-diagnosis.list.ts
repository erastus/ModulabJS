import { CaracterEspecial } from '../constants/CaracterEspecial'
import { RequestDiagnosisData } from './request-diagnosis.model'
import { Type } from 'class-transformer';

export class RequestDiagnosisList {
  @Type(() => RequestDiagnosisData)
  protected requestDiagnosisList: RequestDiagnosisData[];
  
  constructor() {
    this.requestDiagnosisList = [];
  }

  public get(i: number): RequestDiagnosisData {
    return this.requestDiagnosisList[i];
  }

  public add(raiData: RequestDiagnosisData): void {
    const id = raiData.getDiagnosisID();
    let found = this.requestDiagnosisList.some(item =>
      item.getDiagnosisID() != null &&
      id != null &&
      item.getDiagnosisID() === id
    );
    if (!found) {
      this.requestDiagnosisList.push(raiData);
    }
  }

  public size(): number {
    return this.requestDiagnosisList.length;
  }

  public isEmpty(): boolean {
    return this.requestDiagnosisList.length === 0;
  }

  //@Override
  public toXML(): string {
    if (this.requestDiagnosisList.length === 0) return "";
    let result = "<REQUESTDIAGNOSISLIST>" + CaracterEspecial.SALTO_CARRO;
    for (let item of this.requestDiagnosisList) {
      result += item.toXML();
    }
    result += "</REQUESTDIAGNOSISLIST>" + CaracterEspecial.SALTO_CARRO;
    return result;
  }

  //@Override
  public toString(): string
  {
    let sRetorno: string  = " ";
    for (let i = 0; i < this.requestDiagnosisList.length; i++)
    {
      sRetorno = sRetorno.concat("Elemento " + i + ": ");
      sRetorno = sRetorno.concat(this.get(i).toString());
      sRetorno = sRetorno.concat(CaracterEspecial.SALTO_CARRO);
    }
    return sRetorno;
  }
}
