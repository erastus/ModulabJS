import { CaracterEspecial } from "../constants/CaracterEspecial";
import { JavaString } from "./types/javaString";
import { isEmpty } from "../util/isEmpty";
import { XMLUtil } from "../util/XMLUtil";

export class RequestDiagnosisData {
  private diagnosisID: number;
  private diagnosisCode: string;
  private diagnosisDescription: string;

  constructor() {
    this.diagnosisID = null;
    this.diagnosisCode = null;
    this.diagnosisDescription = null;
  }

  public getDiagnosisID(): number
  {
    return this.diagnosisID;
  }

  public setDiagnosisID(pDiagnosisID: number): void
  {
    this.diagnosisID = pDiagnosisID;
  }

  public getDiagnosisCode(): JavaString
  {
    return isEmpty(this.diagnosisCode) ? null : new JavaString(this.diagnosisCode);
  }

  public setDiagnosisCode(pDiagnosisCode: string): void
  {
    this.diagnosisCode = pDiagnosisCode;
  }

  public getDiagnosisDescription(): JavaString
  {
    return isEmpty(this.diagnosisDescription) ? null : new JavaString(this.diagnosisDescription);
  }

  public setDiagnosisDescription(pDiagnosisDescription: string): void
  {
    this.diagnosisDescription = pDiagnosisDescription;
  }

  //@Override
    toXML(): string {
      let sRetorno: string[] = [];
      sRetorno.push("<REQUESTDIAGNOSIS>" + CaracterEspecial.SALTO_CARRO);
  
      sRetorno.push(XMLUtil.appendTag("DIAGNOSISID", this.getDiagnosisID()));
      sRetorno.push(XMLUtil.appendTag("DIAGNOSISCODE", this.getDiagnosisCode()));
      sRetorno.push(XMLUtil.appendTag("DIAGNOSISDESCRIPTION", this.getDiagnosisDescription()));
  
      sRetorno.push("</REQUESTDIAGNOSIS>" + CaracterEspecial.SALTO_CARRO);
      return sRetorno.join("");
    }
  
    //@Override
    public toString(): string
    {
      const sRetorno: string = " getDiagnosisID:" + this.getDiagnosisID() + "\n" +
        " getDiagnosisCode:" + this.getDiagnosisCode() + "\n" +
        " getDiagnosisDescription:" + this.getDiagnosisDescription() + "\n";

      return sRetorno;
    }
}
