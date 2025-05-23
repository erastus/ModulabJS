import { CaracterEspecial } from "../constants/CaracterEspecial";
import { XMLUtil } from "../util/XMLUtil";
import { AdditionalInfoItemData } from "./additional-info-item.model";

export class RequestAdditionalInfoData extends AdditionalInfoItemData {

  //@Override
  toXML(): string {
    let sRetorno: string[] = [];
    sRetorno.push("<REQUESTADDITIONALINFO>" + CaracterEspecial.SALTO_CARRO);

    sRetorno.push(XMLUtil.appendTag("ADDITIONALINFOID", this.getAdditionalInfoID()));
    sRetorno.push(XMLUtil.appendTag("ADDITIONALINFOVALUE", this.getAdditionalInfoValue()));
    sRetorno.push(XMLUtil.appendTag("ADDITIONALINFODESCRIPTION", this.getAdditionalInfoDescription()));
    sRetorno.push(XMLUtil.appendTag("ADDITIONALINFOCODE", this.getAdditionalInfoCode()));
    sRetorno.push(XMLUtil.appendTag("INPUTTYPE", this.getInputType()));
    sRetorno.push(XMLUtil.appendTag("USESEARCHER", this.getUseSearcher()));
    sRetorno.push(XMLUtil.appendTag("WRITEOWNCODEDVALUE", this.getWriteOwnCodedValue()));

    sRetorno.push("</REQUESTADDITIONALINFO>" + CaracterEspecial.SALTO_CARRO);
    return sRetorno.join("");
  }

  //@Override
  public toString(): string
    {
      const sRetorno: string = " getAdditionalInfoID:" + this.getAdditionalInfoID() + "\n" + 
        " getAdditionalInfoValue:" + this.getAdditionalInfoValue() + "\n" +
        " getAdditionalInfoDescription:" + this.getAdditionalInfoDescription() + "\n" +
        " getAdditionalInfoCode:" + this.getAdditionalInfoCode() + "\n" +
        " getInputType:" + this.getInputType() + "\n" +
        " getUseSearcher:" + this.getUseSearcher() + "\n" +
        " getWriteOwnCodedValue:" + this.getWriteOwnCodedValue() + "\n";

      return sRetorno;
    }
}
