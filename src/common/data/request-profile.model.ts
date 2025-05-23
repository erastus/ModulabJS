import { CaracterEspecial } from "../constants/CaracterEspecial";
import { JavaString } from "./types/javaString";
import { isEmpty } from "../util/isEmpty";
import { XMLUtil } from "../util/XMLUtil";
import { ModulabGlobals } from "../constants/ModulabGlobals";

export class RequestProfileData {
  private profileID: number;
  private printLabTemplateInfo: string = ModulabGlobals.INTERNAL_NO_VALUE;

  constructor() {
    this.profileID = null;
  }

  public getProfileID(): number {
    return this.profileID;
  }
  
  public setProfileID(pProfileID: number): void {
    this.profileID = pProfileID;
  }

  public getPrintLabTemplateInfo(): JavaString
  {
    return isEmpty(this.printLabTemplateInfo) ? null : new JavaString(this.printLabTemplateInfo);
  }

  public setPrintLabTemplateInfo(printLabTemplateInfo: string): void
  {
    this.printLabTemplateInfo = printLabTemplateInfo;
  }

  //@Override
    toXML(): string {
      let sRetorno: string[] = [];
      sRetorno.push("<REQUESTPROFILE>" + CaracterEspecial.SALTO_CARRO);
  
      sRetorno.push(XMLUtil.appendTag("PROFILEID", this.getProfileID()));
      sRetorno.push(XMLUtil.appendTag("PRINTLABTEMPLATEINFO", this.getPrintLabTemplateInfo()));
  
      sRetorno.push("</REQUESTPROFILE>" + CaracterEspecial.SALTO_CARRO);
      return sRetorno.join("");
    }
  
    //@Override
    public toString(): string
    {
      const sRetorno: string = " getProfileID:" + this.getProfileID() + "\n" +
        " getPrintLabTemplateInfo:" + this.getPrintLabTemplateInfo() + "\n";

      return sRetorno;
    }
}
