import { CaracterEspecial } from "../constants/CaracterEspecial";
import { XMLUtil } from "../util/XMLUtil";
import { AdditionalInfoItemData } from "./additional-info-item.model";

export class PatientAdditionalInfoData extends AdditionalInfoItemData {
  private patientID: number;

  constructor() {
    super();
    this.patientID = null;
  }

  public getPatientID(): number
  {
    return this.patientID;
  }

  public setPatientID(aPatientID: number): void
  {
    this.patientID = aPatientID;
  }

  //@Override
    toXML(): string {
      let sRetorno: string[] = [];
      sRetorno.push("<PATIENTADDITIONALINFO>" + CaracterEspecial.SALTO_CARRO);
  
      sRetorno.push(XMLUtil.appendTag("PATIENTID", this.getPatientID()));
      sRetorno.push(XMLUtil.appendTag("ADDITIONALINFOID", this.getAdditionalInfoID()));
      sRetorno.push(XMLUtil.appendTag("ADDITIONALINFOVALUE", this.getAdditionalInfoValue()));
      sRetorno.push(XMLUtil.appendTag("ADDITIONALINFODESCRIPTION", this.getAdditionalInfoDescription()));
      sRetorno.push(XMLUtil.appendTag("ADDITIONALINFOCODE", this.getAdditionalInfoCode()));
      sRetorno.push(XMLUtil.appendTag("INPUTTYPE", this.getInputType()));
      sRetorno.push(XMLUtil.appendTag("WRITEOWNCODEDVALUE", this.getWriteOwnCodedValue()));
  
      sRetorno.push("</PATIENTADDITIONALINFO>" + CaracterEspecial.SALTO_CARRO);
      return sRetorno.join("");
    }
  
    //@Override
    public toString(): string
    {
      const sRetorno: string = " getPatientID:" + this.getPatientID() + "\n" + 
        " getAdditionalInfoID:" + this.getAdditionalInfoID() + "\n" +
        " getAdditionalInfoValue:" + this.getAdditionalInfoValue() + "\n" +
        " getAdditionalInfoDescription:" + this.getAdditionalInfoDescription() + "\n" +
        " getAdditionalInfoCode:" + this.getAdditionalInfoCode() + "\n" +
        " getInputType:" + this.getInputType() + "\n" +
        " getWriteOwnCodedValue:" + this.getWriteOwnCodedValue() + "\n";

      return sRetorno;
    }
}
