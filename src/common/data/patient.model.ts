
import { JavaString } from './types/javaString'
import { CaracterEspecial } from '../constants/CaracterEspecial'
import { PatientAdditionalInfoList } from './PatientAdditionalInfoList'
import { isEmpty } from '../util/isEmpty';
import { DataUtil } from '../util/DataUtil';

export class PatientData {
  private patientID: Number;
  private patientName: String;
  private patientSurname: String;
  private patientFirstSurname: String;
  private patientSecondSurname: String;
  private sSN: String;
  private externalID: String;
  private identityCard: String;
  private nTS: String;
  private gender: String;
  private dOB: String;
  private address: String;
  private city: String;
  private state: String;
  private country: String;
  private postalCode: String;
  private phone: String;
  private email: String;
  private comments: String;
  private nacionality: String;
  private countryOfBirth: String;
  private exitus: String;
  private defaultLocation: String;
  private active: String;
  private isVip: String;
  private isFollowed: String;
  private identifier1ID: String;
  private identifier2ID: String;
  private identifier3ID: String;
  private identifier4ID: String;
  private patientField1: String;
  private patientField2: String;
  private patientField3: String;
  private patientField4: String;
  private patientField5: String;
  private patientField6: String;
  private patientField7: String;
  private patientField8: String;
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
    this.isVip = null;
    this.isFollowed = null;
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

  public setPatientName(pPatientName: String): void
  {
    this.patientName = pPatientName;
  }

  public getPatientSurname(): JavaString
  {
    return isEmpty(this.patientSurname) ? null : new JavaString(this.patientSurname);
  }

  public setPatientSurname(pPatientSurname: String): void
  {
    this.patientSurname = pPatientSurname;
  }

  public getPatientFirstSurname(): JavaString
  {
    return isEmpty(this.patientFirstSurname) ? null : new JavaString(this.patientFirstSurname);
  }

  public setPatientFirstSurname(patientFirstSurname: String): void
  {
    this.patientFirstSurname = patientFirstSurname;
  }

  public getPatientSecondSurname(): JavaString
  {

    return isEmpty(this.patientSecondSurname) ? null : new JavaString(this.patientSecondSurname);
  }

  public setPatientSecondSurname(patientSecondSurname: String): void
  {
    this.patientSecondSurname = patientSecondSurname;
  }

  public getPatientFullname(pPatientName?: String, pPatientSurname?: String, withComma?: Boolean): JavaString
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

  public setSSN(pSSN: String): void
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

  public setIdentityCard(pIdentityCard: String): void
  {
    this.identityCard = pIdentityCard;
  }

  public getNTS(): JavaString
  {
    return isEmpty(this.nTS) ? null : new JavaString(this.nTS);
  }

  public setNTS(pNTS: String): void
  {
    this.nTS = pNTS;
  }

  public getGender(): JavaString
  {
    return isEmpty(this.gender) ? null : new JavaString(this.gender);
  }

  public setGender(pGender: String): void
  {
    this.gender = pGender;
  }

  public getDOB(): JavaString
  {
    return isEmpty(this.dOB) ? null : new JavaString(this.dOB);
  }

  public setDOB(pDOB: String): void
  {
    this.dOB = pDOB;
  }

  public getAddress(): JavaString
  {
    return isEmpty(this.address) ? null : new JavaString(this.address);
  }

  public setAddress(pAddress: String): void
  {
    this.address = pAddress;
  }

  public getCity(): JavaString
  {
    return isEmpty(this.city) ? null : new JavaString(this.city);
  }

  public setCity(pCity: String): void
  {
    this.city = pCity;
  }

  public getState(): JavaString
  {
    return isEmpty(this.state) ? null : new JavaString(this.state);
  }

  public setState(pState: String): void
  {
    this.state = pState;
  }

  public getCountry(): JavaString
  {
    return isEmpty(this.country) ? null : new JavaString(this.country);
  }

  public setCountry(pCountry: String): void
  {
    this.country = pCountry;
  }

  public getPostalCode(): JavaString
  {
    return isEmpty(this.postalCode) ? null : new JavaString(this.postalCode);
  }

  public setPostalCode(pPostalCode: String): void
  {
    this.postalCode = pPostalCode;
  }

  public getPhone(): JavaString
  {
    return isEmpty(this.phone) ? null : new JavaString(this.phone);
  }

  public setPhone(pPhone: String): void
  {
    this.phone = pPhone;
  }

  public getEmail(): JavaString
  {
    return isEmpty(this.email) ? null : new JavaString(this.email);
  }

  public setEmail(pEmail: String): void
  {
    this.email = pEmail;
  }

  public getComments(): JavaString
  {
    return isEmpty(this.comments) ? null : new JavaString(this.comments);
  }

  public setComments(pComments: String): void
  {
    this.comments = pComments;
  }

  public getNacionality(): JavaString
  {
    return isEmpty(this.nacionality) ? null : new JavaString(this.nacionality);
  }

  public setNacionality(nacionality: String): void
  {
    this.nacionality = nacionality;
  }

  public getCountryOfBirth(): JavaString
  {
    return isEmpty(this.countryOfBirth) ? null : new JavaString(this.countryOfBirth);
  }

  public setCountryOfBirth(countryOfBirth: String): void
  {
    this.countryOfBirth = countryOfBirth;
  }

  public getExitus(): JavaString
  {
    return isEmpty(this.exitus) ? null : new JavaString(this.exitus);
  }

  public setExitus(exitus: String): void
  {
    this.exitus = exitus;
  }

  public getDefaultLocation(): JavaString
  {
    return isEmpty(this.defaultLocation) ? null : new JavaString(this.defaultLocation);
  }

  public setDefaultLocation(defaultLocation: String): void
  {
    this.defaultLocation = defaultLocation;
  }

  public getActive(): JavaString
  {
    return isEmpty(this.active) ? null : new JavaString(this.active);
  }

  public setActive(pActive: String): void
  {
    this.active = pActive;
  }

  public getIsVip(): JavaString
  {
    return isEmpty(this.isVip) ? null : new JavaString(this.isVip);
  }

  public setIsVip(isVip: String): void
  {
    this.isVip = isVip;
  }

  public getIsFollowed(): JavaString
  {
    return isEmpty(this.isFollowed) ? null : new JavaString(this.isFollowed);
  }

  public setIsFollowed(isFollowed: String): void
  {
    this.isFollowed = isFollowed;
  }

  public getIdentifier1ID(): JavaString
  {
    return isEmpty(this.identifier1ID) ? null : new JavaString(this.identifier1ID);
  }

  public setIdentifier1ID(identifier1ID: String): void
  {
    this.identifier1ID = identifier1ID;
  }

  public getIdentifier2ID(): JavaString
  {
    return isEmpty(this.identifier2ID) ? null : new JavaString(this.identifier2ID);
  }

  public setIdentifier2ID(identifier2ID: String): void
  {
    this.identifier2ID = identifier2ID;
  }

  public getIdentifier3ID(): JavaString
  {
    return isEmpty(this.identifier3ID) ? null : new JavaString(this.identifier3ID);
  }

  public setIdentifier3ID(identifier3ID: String): void
  {
    this.identifier3ID = identifier3ID;
  }

  public getIdentifier4ID(): JavaString
  {
    return isEmpty(this.identifier4ID) ? null : new JavaString(this.identifier4ID);
  }

  public setIdentifier4ID(identifier4ID: String): void
  {
    this.identifier4ID = identifier4ID;
  }

  public getPatientField1(): JavaString
  {
    return isEmpty(this.patientField1) ? null : new JavaString(this.patientField1);
  }

  public setPatientField1(patientField1: String): void
  {
    this.patientField1 = patientField1;
  }

  public getPatientField2(): JavaString
  {
    return isEmpty(this.patientField2) ? null : new JavaString(this.patientField2);
  }

  public setPatientField2(patientField2: String): void
  {
    this.patientField2 = patientField2;
  }

  public getPatientField3(): JavaString
  {
    return isEmpty(this.patientField3) ? null : new JavaString(this.patientField3);
  }

  public setPatientField3(patientField3: String): void
  {
    this.patientField3 = patientField3;
  }

  public getPatientField4(): JavaString
  {
    return isEmpty(this.patientField4) ? null : new JavaString(this.patientField4);
  }

  public setPatientField4(patientField4: String): void
  {
    this.patientField4 = patientField4;
  }

  public getPatientField5(): JavaString
  {
    return isEmpty(this.patientField5) ? null : new JavaString(this.patientField5);
  }

  public setPatientField5(patientField5: String): void
  {
    this.patientField5 = patientField5;
  }

  public getPatientField6(): JavaString
  {
    return isEmpty(this.patientField6) ? null : new JavaString(this.patientField6);
  }

  public setPatientField6(patientField6: String): void
  {
    this.patientField6 = patientField6;
  }

  public getPatientField7(): JavaString
  {
    return isEmpty(this.patientField7) ? null : new JavaString(this.patientField7);
  }

  public setPatientField7(patientField7: String): void
  {
    this.patientField7 = patientField7;
  }

  public getPatientField8(): JavaString
  {
    return isEmpty(this.patientField8) ? null : new JavaString(this.patientField8);
  }

  public setPatientField8(patientField8: String): void
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
    let sRetorno: string  = " ";
    sRetorno += this.getPatientID() + " ";
    sRetorno += this.getPatientName() + " ";
    sRetorno += this.getPatientSurname() + " ";
    sRetorno += this.getSSN() + " ";
    sRetorno += this.getExternalID() + " ";
    sRetorno += this.getIdentityCard() + " ";
    sRetorno += this.getNTS() + " ";
    sRetorno += this.getGender() + " ";
    sRetorno += this.getDOB().toString() + " ";
    sRetorno += this.getAddress() + " ";
    sRetorno += this.getCity() + " ";
    sRetorno += this.getState() + " ";
    sRetorno += this.getCountry() + " ";
    sRetorno += this.getPostalCode() + " ";
    sRetorno += this.getPhone() + " ";
    sRetorno += this.getEmail() + " ";
    sRetorno += this.getComments() + " ";
    sRetorno += this.getNacionality() + " ";
    sRetorno += this.getCountryOfBirth() + " ";
    sRetorno += this.getExitus() + " ";
    sRetorno += this.getDefaultLocation() + " ";
    sRetorno += this.getActive() + " ";
    sRetorno += this.getIsVip() + " ";
    sRetorno += this.getIsFollowed() + " ";
    return sRetorno;
  }
}