import { CaracterEspecial } from "../constants/CaracterEspecial";
import { JavaString } from "./types/javaString";
import { isEmpty } from "../util/isEmpty";
import { XMLUtil } from "../util/XMLUtil";
import { ModulabGlobals } from "../constants/ModulabGlobals";

export class RequestTestData {
  private testID: number;
  private printLabTemplateInfo: string = ModulabGlobals.INTERNAL_NO_VALUE;

  constructor() {
    this.testID = null;
  }

  public getTestID(): number {
    return this.testID;
  }
  
  public setTestID(pTestID: number): void {
    this.testID = pTestID;
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
      sRetorno.push("<REQUESTTEST>" + CaracterEspecial.SALTO_CARRO);
  
      sRetorno.push(XMLUtil.appendTag("TESTID", this.getTestID()));
      sRetorno.push(XMLUtil.appendTag("PRINTLABTEMPLATEINFO", this.getPrintLabTemplateInfo()));
  
      sRetorno.push("</REQUESTTEST>" + CaracterEspecial.SALTO_CARRO);
      return sRetorno.join("");
    }
  
    //@Override
    public toString(): string
    {
      const sRetorno: string = " getTestID:" + this.getTestID() + "\n" +
        " getPrintLabTemplateInfo:" + this.getPrintLabTemplateInfo() + "\n";

      return sRetorno;
    }
}
