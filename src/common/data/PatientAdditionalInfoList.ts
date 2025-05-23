import { CaracterEspecial } from '../constants/CaracterEspecial'

export class PatientAdditionalInfoList {
  
  private lista: Map<Number, String>;

  constructor() {
    this.lista = new Map<Number, String>();
  }

  public get(i: Number)
  {
    return this.lista.get(i);
  }

  public add(raiData: String): void
  {

    this.lista.set(this.lista.size, raiData);
  }

  public toString(): String
  {
    let sRetorno: String  = " ";
    for (let i = 0; i < this.lista.size; i++)
    {
      sRetorno = sRetorno.concat("Elemento " + i + ": ");
      sRetorno = sRetorno.concat(CaracterEspecial.SALTO_CARRO);
    }
    return sRetorno;
  }

  public toXML(): String
  {
    let sRetorno: String = "";
    if (this.lista.size > 0)
    {
      sRetorno = sRetorno.concat("<PATIENTADDITIONALINFOLIST>" + CaracterEspecial.SALTO_CARRO);
      sRetorno = sRetorno.concat("</PATIENTADDITIONALINFOLIST>" + CaracterEspecial.SALTO_CARRO);
    }
    return sRetorno;
  }

}