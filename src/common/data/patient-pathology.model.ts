import { CaracterEspecial } from "../constants/CaracterEspecial";
import { JavaString } from "./types/javaString";
import { isEmpty } from "../util/isEmpty";
import { XMLUtil } from "../util/XMLUtil";

export class PatientPathologyData {
  private pathologyID: number;
  private pathologyDescription: string;
  private active: string;
  private labelColor: string;
  private shortName: string;
  private externalID: string;
  private patientPathologyID: number;
  private patientID: number;
  private startDate: string;
  private endDate: string;

  constructor() {
    this.pathologyID = null;
    this.pathologyDescription = null;
    this.active = null;
    this.labelColor = null;
    this.shortName = null;
    this.externalID = null;
    this.patientPathologyID = null;
    this.patientID = null;
    this.startDate = null;
    this.endDate = null;
  }

  public getPathologyID(): number
  {
    return this.pathologyID;
  }

  public setPathologyID(aPathologyID: number): void
  {
    this.pathologyID = aPathologyID;
  }

  public getPathologyDescription(): JavaString
  {
    return isEmpty(this.pathologyDescription) ? null : new JavaString(this.pathologyDescription);
  }

  public setPathologyDescription(aPathologyDescription: string): void
  {
    this.pathologyDescription = aPathologyDescription;
  }

  public getActive(): JavaString
  {
    return isEmpty(this.active) ? null : new JavaString(this.active);
  }

  public setActive(pActive: string): void
  {
    this.active = pActive;
  }

  public getLabelColor(): JavaString
  {
    return isEmpty(this.labelColor) ? null : new JavaString(this.labelColor);
  }

  public setLabelColor(pLabelColor: string): void
  {
    this.labelColor = pLabelColor;
  }

  public getShortName(): JavaString
  {
    return isEmpty(this.shortName) ? null : new JavaString(this.shortName);
  }

  public setShortName(pShortName: string): void
  {
    this.shortName = pShortName;
  }

  public getExternalID(): JavaString
  {
    return isEmpty(this.externalID) ? null : new JavaString(this.externalID);
  }

  public setExternalID(pExternalID: string): void
  {
    this.externalID = pExternalID;
  }

  public getPatientPathologyID(): number
  {
    return this.patientPathologyID;
  }

  public setPatientPathologyID(aPatientPathologyID: number): void
  {
    this.patientPathologyID = aPatientPathologyID;
  }

  public getPatientID(): number
  {
    return this.patientID;
  }

  public setPatientID(aPatientID: number): void
  {
    this.patientID = aPatientID;
  }

  public getStartDate(): string
  {
    return this.startDate;
  }
  
  public setStartDate(pStartDate: string): void
  {
    this.startDate = pStartDate;
  }

  public getEndDate(): string
  {
    return this.endDate;
  }
  
  public setEndDate(pEndDate: string): void
  {
    this.endDate = pEndDate;
  }

  //@Override
    toXML(): string {
      let sRetorno: string[] = [];
      sRetorno.push("<PATIENTPATHOLOGY>" + CaracterEspecial.SALTO_CARRO);
  
      sRetorno.push(XMLUtil.appendTag("PATHOLOGYID", this.getPathologyID()));
      sRetorno.push(XMLUtil.appendTag("PATHOLOGYDESCRIPTION", this.getPathologyDescription()));
      sRetorno.push(XMLUtil.appendTag("ACTIVE", this.getActive()));
      sRetorno.push(XMLUtil.appendTag("LABELCOLOR", this.getLabelColor()));
      sRetorno.push(XMLUtil.appendTag("SHORTNAME", this.getShortName()));
      sRetorno.push(XMLUtil.appendTag("EXTERNALID", this.getExternalID()));
      sRetorno.push(XMLUtil.appendTag("PATIENTPATHOLOGYID", this.getPatientPathologyID()));
      sRetorno.push(XMLUtil.appendTag("PATIENTID", this.getPatientID()));
      sRetorno.push(XMLUtil.appendTag("STARTDATE", this.getStartDate()));
      sRetorno.push(XMLUtil.appendTag("ENDDATE", this.getEndDate()));
  
      sRetorno.push("</PATIENTPATHOLOGY>" + CaracterEspecial.SALTO_CARRO);
      return sRetorno.join("");
    }
  
    //@Override
    public toString(): string
    {
      const sRetorno: string = " getPathologyID:" + this.getPathologyID() + "\n" +
      " getPathologyDescription:" + this.getPathologyDescription() + "\n" +
      " getActive:" + this.getActive() + "\n" +
      " getLabelColor:" + this.getLabelColor() + "\n" +
      " getShortName:" + this.getShortName() + "\n" +
      " getExternalID:" + this.getExternalID() + "\n" +
      " getPatientPathologyID:" + this.getPatientPathologyID() + "\n" +
      " getPatientID:" + this.getPatientID() + "\n" +
      " getStartDate:" + this.getStartDate() + "\n" +
      " getEndDate:" + this.getEndDate() + "\n";

      return sRetorno;
    }
}
