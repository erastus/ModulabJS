
import { JavaString } from './types/javaString'
import { CaracterEspecial } from '../constants/CaracterEspecial'
import { isEmpty } from '../util/isEmpty';
import { DataUtil } from '../util/DataUtil';
import { Type } from 'class-transformer';
import { PatientPathologyList } from './patient-pathology.list'
import { PatientAdditionalInfoList } from './patient-additional-info.list'

export class PatientData {
  private patientID: Number;
  private patientName: string;
  private patientSurname: string;
  private patientFirstSurname: string;
  private patientSecondSurname: string;
  private sSN: string;
  private externalID: string;
  private identityCard: string;
  private nTS: string;
  private gender: string;
  private dOB: string;
  private address: string;
  private city: string;
  private state: string;
  private country: string;
  private postalCode: string;
  private phone: string;
  private email: string;
  private comments: string;
  private nacionality: string;
  private countryOfBirth: string;
  private exitus: string;
  private defaultLocation: string;
  private active: string;
  @Type(() => PatientPathologyList)
  private patientPathologyList: PatientPathologyList;
  private isVip: string;
  private identifier1ID: string;
  private identifier2ID: string;
  private identifier3ID: string;
  private identifier4ID: string;
  private patientField1: string;
  private patientField2: string;
  private patientField3: string;
  private patientField4: string;
  private patientField5: string;
  private patientField6: string;
  private patientField7: string;
  private patientField8: string;
  @Type(() => PatientAdditionalInfoList)
  private patientAdditionalInfoList: PatientAdditionalInfoList;

  constructor() {
    this.patientID = null;
    this.patientName = null;
    this.patientSurname = null;
    this.patientFirstSurname = null;
    this.patientSecondSurname = null;
    this.sSN = null;
    this.externalID = null;
    this.identityCard = null;
    this.nTS = null;
    this.gender = null;
    this.dOB = null;
    this.address = null;
    this.city = null;
    this.state = null;
    this.country = null;
    this.postalCode = null;
    this.phone = null;
    this.email = null;
    this.comments = null;
    this.nacionality = null;
    this.countryOfBirth = null;
    this.exitus = null;
    this.defaultLocation = null;
    this.active = null;
    this.patientPathologyList = new PatientPathologyList();
    this.isVip = null;
    this.identifier1ID = null;
    this.identifier2ID = null;
    this.identifier3ID = null;
    this.identifier4ID = null;
    this.patientField1 = null;
    this.patientField2 = null;
    this.patientField3 = null;
    this.patientField4 = null;
    this.patientField5 = null;
    this.patientField6 = null;
    this.patientField7 = null;
    this.patientField8 = null;
    this.patientAdditionalInfoList = new PatientAdditionalInfoList();
  }

  public getPatientID(): Number
  {
    return this.patientID;
  }

  public setPatientID(pPatientID: Number): void
  {
    this.patientID = pPatientID;
  }

  public getPatientName(): JavaString
  {
    return isEmpty(this.patientName) ? null : new JavaString(this.patientName);
  }

  public setPatientName(pPatientName: string): void
  {
    this.patientName = pPatientName;
  }

  public getPatientSurname(): JavaString
  {
    return isEmpty(this.patientSurname) ? null : new JavaString(this.patientSurname);
  }

  public setPatientSurname(pPatientSurname: string): void
  {
    this.patientSurname = pPatientSurname;
  }

  public getPatientFirstSurname(): JavaString
  {
    return isEmpty(this.patientFirstSurname) ? null : new JavaString(this.patientFirstSurname);
  }

  public setPatientFirstSurname(patientFirstSurname: string): void
  {
    this.patientFirstSurname = patientFirstSurname;
  }

  public getPatientSecondSurname(): JavaString
  {

    return isEmpty(this.patientSecondSurname) ? null : new JavaString(this.patientSecondSurname);
  }

  public setPatientSecondSurname(patientSecondSurname: string): void
  {
    this.patientSecondSurname = patientSecondSurname;
  }

  public getPatientFullname(pPatientName?: string, pPatientSurname?: string, withComma?: Boolean): JavaString
  {
    if(pPatientName == undefined) {
      pPatientName = this.patientName
    }

    if(pPatientSurname == undefined) {
      pPatientSurname = this.patientSurname
    }

    if(withComma == undefined) {
      withComma = true
    }

    const tmpPatientName = (pPatientName == null) ? null : pPatientName.trim() == "" ? null : pPatientName;
    const tmpPatientSurname = (pPatientSurname == null) ? null : pPatientSurname.trim() == "" ? null : pPatientSurname;
    if (!isEmpty(tmpPatientName) && !isEmpty(tmpPatientSurname))
    {
      if (withComma)
      {
        return new JavaString(tmpPatientSurname + ", " + tmpPatientName);
      }
      else
      {
        return new JavaString(tmpPatientSurname + " " + tmpPatientName);
      }
    }
    else if (!isEmpty(tmpPatientSurname))
    {
      return new JavaString(tmpPatientSurname);
    }
    else if (!isEmpty(tmpPatientName))
    {
      return new JavaString(tmpPatientName);
    }
    else
    {
      return null;
    }
  }

  public getSSN(): JavaString
  {
    return isEmpty(this.sSN) ? null : new JavaString(this.sSN);
  }

  public setSSN(pSSN: string): void
  {
    this.sSN = pSSN;
  }

  public getExternalID(): JavaString
  {
    return isEmpty(this.externalID) ? null : new JavaString(this.externalID);
  }

  public setExternalID(pExternalID): void
  {
    this.externalID = pExternalID;
  }

  public getIdentityCard(): JavaString
  {
    return isEmpty(this.identityCard) ? null : new JavaString(this.identityCard);
  }

  public setIdentityCard(pIdentityCard: string): void
  {
    this.identityCard = pIdentityCard;
  }

  public getNTS(): JavaString
  {
    return isEmpty(this.nTS) ? null : new JavaString(this.nTS);
  }

  public setNTS(pNTS: string): void
  {
    this.nTS = pNTS;
  }

  public getGender(): JavaString
  {
    return isEmpty(this.gender) ? null : new JavaString(this.gender);
  }

  public setGender(pGender: string): void
  {
    this.gender = pGender;
  }

  public getDOB(): JavaString
  {
    return isEmpty(this.dOB) ? null : new JavaString(this.dOB);
  }

  public setDOB(pDOB: string): void
  {
    this.dOB = pDOB;
  }

  public getAddress(): JavaString
  {
    return isEmpty(this.address) ? null : new JavaString(this.address);
  }

  public setAddress(pAddress: string): void
  {
    this.address = pAddress;
  }

  public getCity(): JavaString
  {
    return isEmpty(this.city) ? null : new JavaString(this.city);
  }

  public setCity(pCity: string): void
  {
    this.city = pCity;
  }

  public getState(): JavaString
  {
    return isEmpty(this.state) ? null : new JavaString(this.state);
  }

  public setState(pState: string): void
  {
    this.state = pState;
  }

  public getCountry(): JavaString
  {
    return isEmpty(this.country) ? null : new JavaString(this.country);
  }

  public setCountry(pCountry: string): void
  {
    this.country = pCountry;
  }

  public getPostalCode(): JavaString
  {
    return isEmpty(this.postalCode) ? null : new JavaString(this.postalCode);
  }

  public setPostalCode(pPostalCode: string): void
  {
    this.postalCode = pPostalCode;
  }

  public getPhone(): JavaString
  {
    return isEmpty(this.phone) ? null : new JavaString(this.phone);
  }

  public setPhone(pPhone: string): void
  {
    this.phone = pPhone;
  }

  public getEmail(): JavaString
  {
    return isEmpty(this.email) ? null : new JavaString(this.email);
  }

  public setEmail(pEmail: string): void
  {
    this.email = pEmail;
  }

  public getComments(): JavaString
  {
    return isEmpty(this.comments) ? null : new JavaString(this.comments);
  }

  public setComments(pComments: string): void
  {
    this.comments = pComments;
  }

  public getNacionality(): JavaString
  {
    return isEmpty(this.nacionality) ? null : new JavaString(this.nacionality);
  }

  public setNacionality(nacionality: string): void
  {
    this.nacionality = nacionality;
  }

  public getCountryOfBirth(): JavaString
  {
    return isEmpty(this.countryOfBirth) ? null : new JavaString(this.countryOfBirth);
  }

  public setCountryOfBirth(countryOfBirth: string): void
  {
    this.countryOfBirth = countryOfBirth;
  }

  public getExitus(): JavaString
  {
    return isEmpty(this.exitus) ? null : new JavaString(this.exitus);
  }

  public setExitus(exitus: string): void
  {
    this.exitus = exitus;
  }

  public getDefaultLocation(): JavaString
  {
    return isEmpty(this.defaultLocation) ? null : new JavaString(this.defaultLocation);
  }

  public setDefaultLocation(defaultLocation: string): void
  {
    this.defaultLocation = defaultLocation;
  }

  public getActive(): JavaString
  {
    return isEmpty(this.active) ? null : new JavaString(this.active);
  }

  public setActive(pActive: string): void
  {
    this.active = pActive;
  }

  public getPatientPathologyList(): PatientPathologyList
  {
		return this.patientPathologyList;
	}

  public setPatientPathologyList(patientPathologyList: PatientPathologyList): void
  {
    this.patientPathologyList = patientPathologyList;
  }

  public getIsVip(): JavaString
  {
    return isEmpty(this.isVip) ? null : new JavaString(this.isVip);
  }

  public setIsVip(isVip: string): void
  {
    this.isVip = isVip;
  }

  public getIdentifier1ID(): JavaString
  {
    return isEmpty(this.identifier1ID) ? null : new JavaString(this.identifier1ID);
  }

  public setIdentifier1ID(identifier1ID: string): void
  {
    this.identifier1ID = identifier1ID;
  }

  public getIdentifier2ID(): JavaString
  {
    return isEmpty(this.identifier2ID) ? null : new JavaString(this.identifier2ID);
  }

  public setIdentifier2ID(identifier2ID: string): void
  {
    this.identifier2ID = identifier2ID;
  }

  public getIdentifier3ID(): JavaString
  {
    return isEmpty(this.identifier3ID) ? null : new JavaString(this.identifier3ID);
  }

  public setIdentifier3ID(identifier3ID: string): void
  {
    this.identifier3ID = identifier3ID;
  }

  public getIdentifier4ID(): JavaString
  {
    return isEmpty(this.identifier4ID) ? null : new JavaString(this.identifier4ID);
  }

  public setIdentifier4ID(identifier4ID: string): void
  {
    this.identifier4ID = identifier4ID;
  }

  public getPatientField1(): JavaString
  {
    return isEmpty(this.patientField1) ? null : new JavaString(this.patientField1);
  }

  public setPatientField1(patientField1: string): void
  {
    this.patientField1 = patientField1;
  }

  public getPatientField2(): JavaString
  {
    return isEmpty(this.patientField2) ? null : new JavaString(this.patientField2);
  }

  public setPatientField2(patientField2: string): void
  {
    this.patientField2 = patientField2;
  }

  public getPatientField3(): JavaString
  {
    return isEmpty(this.patientField3) ? null : new JavaString(this.patientField3);
  }

  public setPatientField3(patientField3: string): void
  {
    this.patientField3 = patientField3;
  }

  public getPatientField4(): JavaString
  {
    return isEmpty(this.patientField4) ? null : new JavaString(this.patientField4);
  }

  public setPatientField4(patientField4: string): void
  {
    this.patientField4 = patientField4;
  }

  public getPatientField5(): JavaString
  {
    return isEmpty(this.patientField5) ? null : new JavaString(this.patientField5);
  }

  public setPatientField5(patientField5: string): void
  {
    this.patientField5 = patientField5;
  }

  public getPatientField6(): JavaString
  {
    return isEmpty(this.patientField6) ? null : new JavaString(this.patientField6);
  }

  public setPatientField6(patientField6: string): void
  {
    this.patientField6 = patientField6;
  }

  public getPatientField7(): JavaString
  {
    return isEmpty(this.patientField7) ? null : new JavaString(this.patientField7);
  }

  public setPatientField7(patientField7: string): void
  {
    this.patientField7 = patientField7;
  }

  public getPatientField8(): JavaString
  {
    return isEmpty(this.patientField8) ? null : new JavaString(this.patientField8);
  }

  public setPatientField8(patientField8: string): void
  {
    this.patientField8 = patientField8;
  }

  public getPatientAddtionalInfoList(): PatientAdditionalInfoList
  {
		return this.patientAdditionalInfoList;
	}

  public setPatientAddtionalInfoList(patientAddtionalInfoList: PatientAdditionalInfoList): void
  {
    this.patientAdditionalInfoList = patientAddtionalInfoList;
  }

  public toXML(): string
  {
    let sRetorno: string[] = [];
    sRetorno.push("<PATIENT>" + CaracterEspecial.SALTO_CARRO);

    const appendTag = (tag: string, value: any) => {
      if (value != null) {
        sRetorno.push(
          CaracterEspecial.TABULADOR +
          `<${tag}>` +
          DataUtil.xMLValue(value) +
          `</${tag}>` +
          CaracterEspecial.SALTO_CARRO
        );
      }
    };

    appendTag("PATIENTID", this.getPatientID());
    appendTag("PATIENTNAME", this.getPatientName());
    appendTag("PATIENTSURNAME", this.getPatientSurname());
    appendTag("PATIENTFIRSTSURNAME", this.getPatientFirstSurname());
    appendTag("PATIENTSECONDSURNAME", this.getPatientSecondSurname());
    appendTag("SSN", this.getSSN());
    appendTag("EXTERNALID", this.getExternalID());
    appendTag("IDENTITYCARD", this.getIdentityCard());
    appendTag("NTS", this.getNTS());
    appendTag("GENDER", this.getGender());
    appendTag("DOB", this.getDOB());
    appendTag("ADDRESS", this.getAddress());
    appendTag("CITY", this.getCity());
    appendTag("STATE", this.getState());
    appendTag("COUNTRY", this.getCountry());
    appendTag("POSTALCODE", this.getPostalCode());
    appendTag("PHONE", this.getPhone());
    appendTag("EMAIL", this.getEmail());
    appendTag("COMMENTS", this.getComments());
    appendTag("NACIONALITY", this.getNacionality());
    appendTag("COUNTRYOFBIRTH", this.getCountryOfBirth());
    appendTag("EXITUS", this.getExitus());
    appendTag("DEFAULTLOCATION", this.getDefaultLocation());
    appendTag("ACTIVE", this.getActive());
    sRetorno.push(this.getPatientPathologyList().toXML());
    appendTag("ISVIP", this.getIsVip());
    appendTag("IDENTIFIER1ID", this.getIdentifier1ID());
    appendTag("IDENTIFIER2ID", this.getIdentifier2ID());
    appendTag("IDENTIFIER3ID", this.getIdentifier3ID());
    appendTag("IDENTIFIER4ID", this.getIdentifier4ID());
    appendTag("PATIENTFIELD1", this.getPatientField1());
    appendTag("PATIENTFIELD2", this.getPatientField2());
    appendTag("PATIENTFIELD3", this.getPatientField3());
    appendTag("PATIENTFIELD4", this.getPatientField4());
    appendTag("PATIENTFIELD5", this.getPatientField5());
    appendTag("PATIENTFIELD6", this.getPatientField6());
    appendTag("PATIENTFIELD7", this.getPatientField7());
    appendTag("PATIENTFIELD8", this.getPatientField8());
    sRetorno.push(this.getPatientAddtionalInfoList().toXML());

    sRetorno.push("</PATIENT>" + CaracterEspecial.SALTO_CARRO);
    return sRetorno.join("");
  }

  //@Override
  public toString(): string
    {
      const sRetorno: string = " getPatientID:" + this.getPatientID() + "\n" +
      " getPatientName:" + this.getPatientName() + "\n" +
      " getPatientSurname:" + this.getPatientSurname() + "\n" +
      " getPatientFirstSurname:" + this.getPatientFirstSurname() + "\n" +
      " getPatientSecondSurname:" + this.getPatientSecondSurname() + "\n" +
      " getSSN:" + this.getSSN() + "\n" +
      " getExternalID:" + this.getExternalID() + "\n" +
      " getIdentityCard:" + this.getIdentityCard() + "\n" +
      " getNTS:" + this.getNTS() + "\n" +
      " getGender:" + this.getGender() + "\n";
      " getDOB:" + this.getDOB() + "\n" +
      " getAddress:" + this.getAddress() + "\n" +
      " getCity:" + this.getCity() + "\n" +
      " getState:" + this.getState() + "\n" +
      " getCountry:" + this.getCountry() + "\n" +
      " getPostalCode:" + this.getPostalCode() + "\n" +
      " getPhone:" + this.getPhone() + "\n" +
      " getEmail:" + this.getEmail() + "\n" +
      " getComments:" + this.getComments() + "\n" +
      " getNacionality:" + this.getNacionality() + "\n" +
      " getCountryOfBirth:" + this.getCountryOfBirth() + "\n" +
      " getExitus:" + this.getExitus() + "\n" +
      " getDefaultLocation:" + this.getDefaultLocation() + "\n" +
      " getActive:" + this.getActive() + "\n" +
      " getIsVip:" + this.getIsVip() + "\n" +
      " getIdentifier1ID:" + this.getIdentifier1ID() + "\n" +
      " getIdentifier2ID:" + this.getIdentifier2ID() + "\n" +
      " getIdentifier3ID:" + this.getIdentifier3ID() + "\n" +
      " getIdentifier4ID:" + this.getIdentifier4ID() + "\n" +
      " getPatientField1:" + this.getPatientField1() + "\n" +
      " getPatientField2:" + this.getPatientField2() + "\n" +
      " getPatientField3:" + this.getPatientField3() + "\n" +
      " getPatientField4:" + this.getPatientField4() + "\n" +
      " getPatientField5:" + this.getPatientField5() + "\n" +
      " getPatientField6:" + this.getPatientField6() + "\n" +
      " getPatientField7:" + this.getPatientField7() + "\n" +
      " getPatientField8:" + this.getPatientField8() + "\n";

      return sRetorno;
    }
}
