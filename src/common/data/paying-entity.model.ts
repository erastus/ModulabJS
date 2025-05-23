import { CaracterEspecial } from "../constants/CaracterEspecial";
import { JavaString } from "./types/javaString";
import { isEmpty } from "../util/isEmpty";
import { XMLUtil } from "../util/XMLUtil";

export class PayingEntityData {
  private entityID: number;
  private externalID: string;
  private NIF: string;
  private entityDescription: string;
  private discount: number;
  private active: string;

  constructor() {
    this.entityID = null;
    this.externalID = null;
    this.NIF = null;
    this.entityDescription = null;
    this.discount = null;
    this.active = null;
  }

  public getEntityID(): number
  {
    return this.entityID;
  }

  public setDestinationID(pEntityID: number): void
  {
    this.entityID = pEntityID;
  }

  public getExternalID(): JavaString
  {
    return isEmpty(this.externalID) ? null : new JavaString(this.externalID);
  }

  public setExternalID(pExternalID: string): void
  {
    this.externalID = pExternalID;
  }

  public getNIF(): JavaString
  {
    return isEmpty(this.NIF) ? null : new JavaString(this.NIF);
  }

  public setNIF(pNIF: string): void
  {
    this.NIF = pNIF;
  }

  public getEntityDescription(): JavaString
  {
    return isEmpty(this.entityDescription) ? null : new JavaString(this.entityDescription);
  }

  public setEntityDescription(pEntityDescription: string): void
  {
    this.entityDescription = pEntityDescription;
  }

  public getDiscount(): number
  {
    return this.discount;
  }

  public setDiscount(pDiscount: number): void
  {
    this.discount = pDiscount;
  }

  public getActive(): JavaString
  {
    return isEmpty(this.active) ? null : new JavaString(this.active);
  }

  public setActive(pActive: string): void
  {
    this.active = pActive;
  }

  //@Override
    toXML(): string {
      let sRetorno: string[] = [];
      sRetorno.push("<PAYINGENTITY>" + CaracterEspecial.SALTO_CARRO);
  
      sRetorno.push(XMLUtil.appendTag("ENTITYID", this.getEntityID()));
      sRetorno.push(XMLUtil.appendTag("EXTERNALID", this.getExternalID()));
      sRetorno.push(XMLUtil.appendTag("NIF", this.getNIF()));
      sRetorno.push(XMLUtil.appendTag("ENTITYDESCRIPTION", this.getEntityDescription()));
      sRetorno.push(XMLUtil.appendTag("DISCOUNT", this.getDiscount()));
      sRetorno.push(XMLUtil.appendTag("ACTIVE", this.getActive()));
  
      sRetorno.push("</PAYINGENTITY>" + CaracterEspecial.SALTO_CARRO);
      return sRetorno.join("");
    }
  
    //@Override
    public toString(): string
    {
      const sRetorno: string = " getEntityID:" + this.getEntityID() + "\n" +
        " getExternalID:" + this.getExternalID() + "\n" +
        " getNIF:" + this.getNIF() + "\n" +
        " EntityDescription:" + this.getEntityDescription() + "\n" +
        " getDiscount:" + this.getDiscount() + "\n" +
        " getActive:" + this.getActive() + "\n";

      return sRetorno;
    }
}
