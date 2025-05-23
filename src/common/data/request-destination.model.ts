import { CaracterEspecial } from "../constants/CaracterEspecial";
import { JavaString } from "./types/javaString";
import { isEmpty } from "../util/isEmpty";
import { XMLUtil } from "../util/XMLUtil";

export class RequestDestinationData {
  private destinationID: number;
  private destinationDescription: string;
  private destinationCode: string;

  constructor() {
    this.destinationID = null;
    this.destinationDescription = null;
    this.destinationCode = null;
  }

  public getDestinationID(): number
  {
    return this.destinationID;
  }

  public setDestinationID(pDestinationID: number): void
  {
    this.destinationID = pDestinationID;
  }

  public getDestinationDescription(): JavaString
  {
    return isEmpty(this.destinationDescription) ? null : new JavaString(this.destinationDescription);
  }

  public setDestinationDescription(pDestinationDescription: string): void
  {
    this.destinationDescription = pDestinationDescription;
  }

  public getDestinationCode(): JavaString
  {
    return isEmpty(this.destinationCode) ? null : new JavaString(this.destinationCode);
  }

  public setDestinationCode(destinationCode: string): void
  {
    this.destinationCode = destinationCode;
  }

  //@Override
    toXML(): string {
      let sRetorno: string[] = [];
      sRetorno.push("<REQUESTDESTINATION>" + CaracterEspecial.SALTO_CARRO);
  
      sRetorno.push(XMLUtil.appendTag("DESTINATIONID", this.getDestinationID()));
      sRetorno.push(XMLUtil.appendTag("DESTINATIONDESCRIPTION", this.getDestinationDescription()));
      sRetorno.push(XMLUtil.appendTag("DESTINATIONCODE", this.getDestinationCode()));
  
      sRetorno.push("</REQUESTDESTINATION>" + CaracterEspecial.SALTO_CARRO);
      return sRetorno.join("");
    }
  
    //@Override
    public toString(): string
    {
      const sRetorno: string = " getDestinationID:" + this.getDestinationID() + "\n" +
        " getDestinationDescription:" + this.getDestinationDescription() + "\n" +
        " getDestinationCode:" + this.getDestinationCode + "\n";

      return sRetorno;
    }
}
