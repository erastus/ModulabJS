import { CaracterEspecial } from "../constants/CaracterEspecial";
import { XMLUtil } from "../util/XMLUtil";

export class RequestProfileTestGroupData {
  private profileTestGroupID: number;

  constructor() {
    this.profileTestGroupID = null;
  }

  public getProfileTestGroupID(): number {
    return this.profileTestGroupID;
  }
  
  public setProfileTestGroupID(profileTestGroupID: number): void {
    this.profileTestGroupID = profileTestGroupID;
  }

  //@Override
    toXML(): string {
      let sRetorno: string[] = [];
      sRetorno.push("<REQUESTPROFILETESTGROUP>" + CaracterEspecial.SALTO_CARRO);
  
      sRetorno.push(XMLUtil.appendTag("PROFILETESTGROUPID", this.getProfileTestGroupID()));
  
      sRetorno.push("</REQUESTPROFILETESTGROUP>" + CaracterEspecial.SALTO_CARRO);
      return sRetorno.join("");
    }
  
    //@Override
    public toString(): string
    {
      const sRetorno: string = " getProfileTestGroupID:" + this.getProfileTestGroupID() + "\n";
      return sRetorno;
    }
}
