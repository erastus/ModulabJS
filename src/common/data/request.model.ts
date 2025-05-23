import { JavaString } from './types/javaString'
import { RequestTestData } from './request-test.model';
import { PatientData } from './patient.model'
import { isEmpty } from '../util/isEmpty';

export class RequestData {
  public static REQUEST_RECEPTIONSTATUS_NONE = 'NONE';

  private isUrgent: String;
  private isConfidential: String;
  private doctorID: number;
  private serviceID: number;
  private patientStatusID: number;
  private requestDate: string;
  private sampleCollectionCenterID: number;
  private receptionStatus: String;
  private doctorName: String;
  private collegiateID: String;
  private serviceDescription: String;
  private serviceCode: String;
  private patientStatusDescription: String;
  private patientStatusCode: String;
  private centerID: number;
  private centerDescription: String;
  private sampleCollectionCenterDescription: String;
  private sampleCollectionCenterCode: String;
  private centerPrintableDescription: String;
  private patient: PatientData;

  private requestTestList: RequestTestData[] = [];

  constructor() {
    this.isUrgent = null;
    this.isConfidential = null;
    this.doctorID = null;
    this.serviceID = null;
    this.patientStatusID = null;
    this.requestDate = null;
    this.sampleCollectionCenterID = null;
    this.receptionStatus = RequestData.REQUEST_RECEPTIONSTATUS_NONE;
    this.doctorName = null;
    this.collegiateID = null;
    this.serviceDescription = null;
    this.serviceCode = null;
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

  public setIsUrgent(pIsUrgent: String): void
  {
    this.isUrgent = pIsUrgent;
  }

  public getIsConfidential(): JavaString
  {
    return isEmpty(this.isConfidential) ? null : new JavaString(this.isConfidential);
  }

  public setIsConfidential(pIsConfidential: String): void
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

  public setReceptionStatus(pReceptionStatus: String): void
  {
    this.receptionStatus = pReceptionStatus;
  }

  public getDoctorName(): JavaString
  {
    return isEmpty(this.doctorName) ? null : new JavaString(this.doctorName);
  }

  public setDoctorName(pDoctorName: String): void
  {
    this.doctorName = pDoctorName;
  }

  public getCollegiateID(): JavaString
  {
    return isEmpty(this.collegiateID) ? null : new JavaString(this.collegiateID);
  }

  public setCollegiateIDpCollegiateID(pCollegiateID: String): void
  {
    this.collegiateID = pCollegiateID;
  }

  public getServiceDescription(): JavaString
  {
    return isEmpty(this.serviceDescription) ? null : new JavaString(this.serviceDescription);
  }

  public setServiceDescription(pServiceDescription: String): void
  {
    this.serviceDescription = pServiceDescription;
  }

  public getServiceCode(): JavaString
  {
    return isEmpty(this.serviceCode) ? null : new JavaString(this.serviceCode);
  }

  public setServiceCode(serviceCode: String): void
  {
    this.serviceCode = serviceCode;
  }

  public getPatientStatusDescription(): JavaString
  {
    return isEmpty(this.patientStatusDescription) ? null : new JavaString(this.patientStatusDescription);
  }

  public setPatientStatusDescription(pPatientStatusDescription: String): void
  {
    this.patientStatusDescription = pPatientStatusDescription;
  }

  public getPatientStatusCode(): JavaString
  {
    return isEmpty(this.patientStatusCode) ? null : new JavaString(this.patientStatusCode);
  }

  public setPatientStatusCode(patientStatusCode: String): void
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

  public setCenterDescription(pCenterDescription: String): void
  {
    this.centerDescription = pCenterDescription;
  }

  public getSampleCollectionCenterDescription(): JavaString
  {
    return isEmpty(this.sampleCollectionCenterDescription) ? null : new JavaString(this.sampleCollectionCenterDescription);
  }

  public setSampleCollectionCenterDescription(pSampleCollectionCenterDescription: String): void
  {
    this.sampleCollectionCenterDescription = pSampleCollectionCenterDescription;
  }

  public getSampleCollectionCenterCode(): JavaString
  {
    return isEmpty(this.sampleCollectionCenterCode) ? null : new JavaString(this.sampleCollectionCenterCode);
  }

  public setSampleCollectionCenterCode(pSampleCollectionCenterCode: String): void
  {
    this.sampleCollectionCenterCode = pSampleCollectionCenterCode;
  }

  public getCenterPrintableDescription(): JavaString
  {
    return isEmpty(this.centerPrintableDescription) ? null : new JavaString(this.centerPrintableDescription);
  }

  public setCenterPrintableDescription(pCenterPrintableDescription: String): void
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

}
