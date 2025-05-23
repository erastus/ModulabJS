import { JavaString } from './types/javaString'
import { RequestTestData } from './request-test.model';
import { PatientData } from './patient.model'
import { isEmpty } from '../util/isEmpty';
import { HTMLUtil } from '../util/HTMLUtil';
import { CaracterEspecial } from '../constants/CaracterEspecial';
import { DataUtil } from '../util/DataUtil';

export class RequestData {
  public static REQUEST_RECEPTIONSTATUS_NONE = 'NONE';

  private isUrgent: string;
  private isConfidential: string;
  private doctorID: number;
  private serviceID: number;
  private patientStatusID: number;
  private orderPlacerNumber: string;
  private location: string;
  private comments: string;
  private requestDate: string;
  private sampleCollectionCenterID: number;
  private receptionStatus: string;
  private doctorName: string;
  private collegiateID: string;
  private serviceDescription: string;
  private serviceCode: string;
  private assigningAuthorityID: number;
  private patientStatusDescription: string;
  private patientStatusCode: string;
  private centerID: number;
  private centerDescription: string;
  private sampleCollectionCenterDescription: string;
  private sampleCollectionCenterCode: string;
  private centerPrintableDescription: string;
  private patient: PatientData;

  private requestTestList: RequestTestData[] = [];

  constructor() {
    this.isUrgent = null;
    this.isConfidential = null;
    this.doctorID = null;
    this.serviceID = null;
    this.patientStatusID = null;
    this.orderPlacerNumber = null;
    this.location = null;
    this.comments = null;
    this.requestDate = null;
    this.sampleCollectionCenterID = null;
    this.receptionStatus = RequestData.REQUEST_RECEPTIONSTATUS_NONE;
    this.doctorName = null;
    this.collegiateID = null;
    this.serviceDescription = null;
    this.serviceCode = null;
    this.assigningAuthorityID = null;
    this.patientStatusDescription = null;
    this.patientStatusCode = null;
    this.centerID = null;
    this.centerDescription = null;
    this.sampleCollectionCenterDescription = null;
    this.sampleCollectionCenterCode = null;
    this.centerPrintableDescription = null;
    this.patient = new PatientData();
    
    this.requestTestList = [new RequestTestData()];
  }

  public getIsUrgent(): JavaString
  {
    return isEmpty(this.isUrgent) ? null : new JavaString(this.isUrgent);
  }

  public setIsUrgent(pIsUrgent: string): void
  {
    this.isUrgent = pIsUrgent;
  }

  public getIsConfidential(): JavaString
  {
    return isEmpty(this.isConfidential) ? null : new JavaString(this.isConfidential);
  }

  public setIsConfidential(pIsConfidential: string): void
  {
    this.isConfidential = pIsConfidential;
  }

  public getDoctorID(): number {
    return this.doctorID;
  }
  
  public setDoctorID(pDoctorID: number): void
  {
    this.doctorID = pDoctorID;
  }
  
  public getServiceID(): number
  {
    return this.serviceID;
  }
  
  public setServiceID(pServiceID: number): void 
  {
    this.serviceID = pServiceID;
  }

  public getPatientStatusID(): number
  {
    return this.patientStatusID;
  }

  public setPatientStatusID(pPatientStatusID: number): void 
  {
    this.patientStatusID = pPatientStatusID;
  }

  public getOrderPlacerNumber(): JavaString
  {
    return isEmpty(this.orderPlacerNumber) ? null : new JavaString(this.orderPlacerNumber);
  }

  public setOrderPlacerNumber(pOrderPlacerNumber: string): void
  {
    this.orderPlacerNumber = pOrderPlacerNumber;
  }

  public getLocation(): JavaString
  {
    return isEmpty(this.location) ? null : new JavaString(this.location);
  }

  public setLocation(pLocation: string): void
  {
    this.location = pLocation;
  }

  public getComments(): JavaString
  {
    return isEmpty(this.comments) ? null : new JavaString(this.comments);
  }

  public setComments(pComments: string): void
  {
    this.comments = (pComments != null && pComments.includes("<html>")) ? HTMLUtil.applyRegularExpression(pComments, HTMLUtil.getAllowedHTMLTagsRegularExpression()) : pComments;
  }

  public getRequestDate(): string
  {
    return this.requestDate;
  }
  
  public setRequestDate(pRequestDate: string): void
  {
    this.requestDate = pRequestDate;
  }

  public getSampleCollectionCenterID(): number
  {
    return this.sampleCollectionCenterID;
  }
  
  public setSampleCollectionCenterID(pSampleCollectionCenterID: number): void
  {
    this.sampleCollectionCenterID = pSampleCollectionCenterID;
  }

  public getReceptionStatus(): JavaString
  {
    return isEmpty(this.receptionStatus) ? null : new JavaString(this.receptionStatus);
  }

  public setReceptionStatus(pReceptionStatus: string): void
  {
    this.receptionStatus = pReceptionStatus;
  }

  public getDoctorName(): JavaString
  {
    return isEmpty(this.doctorName) ? null : new JavaString(this.doctorName);
  }

  public setDoctorName(pDoctorName: string): void
  {
    this.doctorName = pDoctorName;
  }

  public getCollegiateID(): JavaString
  {
    return isEmpty(this.collegiateID) ? null : new JavaString(this.collegiateID);
  }

  public setCollegiateIDpCollegiateID(pCollegiateID: string): void
  {
    this.collegiateID = pCollegiateID;
  }

  public getServiceDescription(): JavaString
  {
    return isEmpty(this.serviceDescription) ? null : new JavaString(this.serviceDescription);
  }

  public setServiceDescription(pServiceDescription: string): void
  {
    this.serviceDescription = pServiceDescription;
  }

  public getServiceCode(): JavaString
  {
    return isEmpty(this.serviceCode) ? null : new JavaString(this.serviceCode);
  }

  public setServiceCode(serviceCode: string): void
  {
    this.serviceCode = serviceCode;
  }

  public getAssigningAuthorityID(): number
  {
    return this.assigningAuthorityID;
  }

  public setAssigningAuthorityID(assigningAuthorityID: number): void
  {
    this.assigningAuthorityID = assigningAuthorityID;
  }

  public getPatientStatusDescription(): JavaString
  {
    return isEmpty(this.patientStatusDescription) ? null : new JavaString(this.patientStatusDescription);
  }

  public setPatientStatusDescription(pPatientStatusDescription: string): void
  {
    this.patientStatusDescription = pPatientStatusDescription;
  }

  public getPatientStatusCode(): JavaString
  {
    return isEmpty(this.patientStatusCode) ? null : new JavaString(this.patientStatusCode);
  }

  public setPatientStatusCode(patientStatusCode: string): void
  {
    this.patientStatusCode = patientStatusCode;
  }

  public getCenterID(): number
  {
    return this.centerID;
  }

  public setCenterID(pCenterID: number): void 
  {
    this.centerID = pCenterID;
  }

  public getCenterDescription(): JavaString
  {
    return isEmpty(this.centerDescription) ? null : new JavaString(this.centerDescription);
  }

  public setCenterDescription(pCenterDescription: string): void
  {
    this.centerDescription = pCenterDescription;
  }

  public getSampleCollectionCenterDescription(): JavaString
  {
    return isEmpty(this.sampleCollectionCenterDescription) ? null : new JavaString(this.sampleCollectionCenterDescription);
  }

  public setSampleCollectionCenterDescription(pSampleCollectionCenterDescription: string): void
  {
    this.sampleCollectionCenterDescription = pSampleCollectionCenterDescription;
  }

  public getSampleCollectionCenterCode(): JavaString
  {
    return isEmpty(this.sampleCollectionCenterCode) ? null : new JavaString(this.sampleCollectionCenterCode);
  }

  public setSampleCollectionCenterCode(pSampleCollectionCenterCode: string): void
  {
    this.sampleCollectionCenterCode = pSampleCollectionCenterCode;
  }

  public getCenterPrintableDescription(): JavaString
  {
    return isEmpty(this.centerPrintableDescription) ? null : new JavaString(this.centerPrintableDescription);
  }

  public setCenterPrintableDescription(pCenterPrintableDescription: string): void
  {
    this.centerPrintableDescription = pCenterPrintableDescription;
  }

  public getPatient():PatientData
  {
    return this.patient;
  }

  public setPatient(pPatient:PatientData): void
  {
    this.patient = pPatient;
  }

  //@Override
  public toXML(): string {
    let sRetorno: string[] = [];
    sRetorno.push("<REQUEST>" + CaracterEspecial.SALTO_CARRO);

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

    appendTag("ISURGENT", this.getIsUrgent());
    appendTag("ISCONFIDENTIAL", this.getIsConfidential());
    appendTag("DOCTORID", this.getDoctorID());
    appendTag("SERVICEID", this.getServiceID());
    appendTag("PATIENTSTATUSID", this.getPatientStatusID());
    appendTag("ORDERPLACERNUMBER", this.getOrderPlacerNumber());
    appendTag("LOCATION", this.getLocation());
    appendTag("COMMENTS", this.getComments());
    appendTag("REQUESTDATE", this.getRequestDate());
    appendTag("SAMPLECOLLECTIONCENTERID", this.getSampleCollectionCenterID());
    appendTag("RECEPTIONSTATUS", this.getReceptionStatus());
    appendTag("DOCTORNAME", this.getDoctorName());
    appendTag("COLLEGIATEID", this.getCollegiateID());
    appendTag("SERVICEDESCRIPTION", this.getServiceDescription());
    appendTag("SERVICECODE", this.getServiceCode());
    appendTag("ASSIGNINGAUTHORITYID", this.getAssigningAuthorityID());
    appendTag("PATIENTSTATUSDESCRIPTION", this.getPatientStatusDescription());
    appendTag("PATIENTSTATUSCODE", this.getPatientStatusCode());
    appendTag("CENTERID", this.getCenterID());
    appendTag("CENTERDESCRIPTION", this.getCenterDescription());
    appendTag("SAMPLECOLLECTIONCENTERDESCRIPTION", this.getSampleCollectionCenterDescription());
    appendTag("SAMPLECOLLECTIONCENTERCODE", this.getSampleCollectionCenterCode());
    appendTag("CENTERPRINTABLEDESCRIPTION", this.getCenterDescription());

    sRetorno.push(this.getPatient().toXML());

    sRetorno.push("</REQUEST>" + CaracterEspecial.SALTO_CARRO);
    return sRetorno.join("");
  }

  //@Override
  public toString(): string
  {
    const sRetorno: string = " ";
    return sRetorno;
  }
}
