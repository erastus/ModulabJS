import { JavaString } from "./types/javaString";
import { isEmpty } from "../util/isEmpty";

export class AdditionalInfoItemData {
  private additionalInfoID: number;
  private additionalInfoValue: string;
  private additionalInfoDescription: string;
  private additionalInfoCode: string;
  private inputType: string;
  private useSearcher: string;
  private writeOwnCodedValue: string;

  constructor() {
    this.additionalInfoID = null;
    this.additionalInfoValue = null;
    this.additionalInfoDescription = null;
    this.additionalInfoCode = null;
    this.inputType = null;
    this.useSearcher = null;
    this.writeOwnCodedValue = null;
  }

  public getAdditionalInfoID(): number
  {
    return this.additionalInfoID;
  }

  public setAdditionalInfoID(pAdditionalInfoID: number)
  {
    this.additionalInfoID = pAdditionalInfoID;
  }

  public getAdditionalInfoValue(): JavaString
  {
    return isEmpty(this.additionalInfoValue) ? null : new JavaString(this.additionalInfoValue);
  }

  public setAdditionalInfoValue(pAdditionalInfoValue: string): void
  {
    this.additionalInfoValue = pAdditionalInfoValue;
  }

  public getAdditionalInfoDescription(): JavaString
  {
    return isEmpty(this.additionalInfoDescription) ? null : new JavaString(this.additionalInfoDescription);
  }

  public setAdditionalInfoDescription(pAdditionalInfoDescription: string): void
  {
    this.additionalInfoDescription = pAdditionalInfoDescription;
  }

  public getAdditionalInfoCode(): JavaString
  {
    return isEmpty(this.additionalInfoCode) ? null : new JavaString(this.additionalInfoCode);
  }

  public setAdditionalInfoCode(pAdditionalInfoCode: string): void
  {
    this.additionalInfoCode = pAdditionalInfoCode;
  }

  public getInputType(): JavaString
  {
    return isEmpty(this.inputType) ? null : new JavaString(this.inputType);
  }

  public setInputType(inputType: string): void
  {
    this.inputType = inputType;
  }

  public getUseSearcher(): JavaString
  {
    return isEmpty(this.useSearcher) ? null : new JavaString(this.useSearcher);
  }

  public setUseSearcher(useSearcher: string): void
  {
    this.useSearcher = useSearcher;
  }

  public getWriteOwnCodedValue(): JavaString
  {
    return isEmpty(this.writeOwnCodedValue) ? null : new JavaString(this.writeOwnCodedValue);
  }

  public setWriteOwnCodedValue(writeOwnCodedValue: string): void
  {
    this.writeOwnCodedValue = writeOwnCodedValue;
  }

  //@Override
  toXML(): string {
    return null;
  }
}
