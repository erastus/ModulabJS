import { JavaString } from './types/javaString'
import { isEmpty } from '../util/isEmpty';
import { HTMLUtil } from '../util/HTMLUtil';
import { CaracterEspecial } from '../constants/CaracterEspecial';
import { XMLUtil } from '../util/XMLUtil';
import { Type } from 'class-transformer';
import { PayingEntityData } from './paying-entity.model';
import { PatientData } from './patient.model'
import { RequestDiagnosisList } from './request-diagnosis.list';
import { RequestDestinationList } from './request-destination.list';
import { RequestTestList } from './request-test.list';
import { RequestProfileList } from './request-profile.list';
import { RequestProfileTestGroupList } from './request-profile-test-group.list';
import { RequestAdditionalInfoList } from './request-additional-info.list';
import { ModulabGlobals } from '../constants/ModulabGlobals';

export class RequestData {
  public static REQUEST_RECEPTIONSTATUS_NONE = 'NONE';

  private isUrgent: string;
  private isConfidential: string;
  private doctorID: number;
  private serviceID: number;
  private patientStatusID: number;
  private iCU: string;
  private attendanceNumber: string;
  private orderPlacerNumber: string;
  private location: string;
  private comments: string;
  private requestDate: string;
  private sampleCollectionCenterID: number;
  @Type(() => PayingEntityData)
  private entity: PayingEntityData;
  private prescription: string;
  private priceListID: number;
  private priceListDescription: string;
  private priceListCode: string;
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
  @Type(() => PatientData)
  private patient: PatientData;
  @Type(() => RequestDiagnosisList)
  private requestDiagnosisList: RequestDiagnosisList;
  @Type(() => RequestDestinationList)
  private requestDestinationList: RequestDestinationList;
  @Type(() => RequestTestList)
  private requestTestList: RequestTestList;
  @Type(() => RequestProfileList)
  private requestProfileList: RequestProfileList;
  @Type(() => RequestProfileTestGroupList)
  private requestProfileTestGroupList: RequestProfileTestGroupList;
  @Type(() => RequestAdditionalInfoList)
  private requestAdditionalInfoList: RequestAdditionalInfoList;
  private manchesterTriage: number;
  private isPrivate: string;
  private fixedDeliveryDate: string;
  private invoiceDiscount: number;

  constructor() {
    this.isUrgent = null;
    this.isConfidential = null;
    this.doctorID = null;
    this.serviceID = null;
    this.patientStatusID = null;
    this.iCU = null;
    this.attendanceNumber = null;
    this.orderPlacerNumber = null;
    this.location = null;
    this.comments = null;
    this.requestDate = null;
    this.sampleCollectionCenterID = null;
    this.entity = new PayingEntityData();
    this.prescription = null;
    this.priceListID = null;
    this.priceListDescription = null;
    this.priceListCode = null;
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
    this.requestDiagnosisList = new RequestDiagnosisList();
    this.requestDestinationList = new RequestDestinationList();
    this.requestTestList = new RequestTestList();
    this.requestProfileList = new RequestProfileList();
    this.requestProfileTestGroupList = new RequestProfileTestGroupList();
    this.requestAdditionalInfoList = new RequestAdditionalInfoList();
    this.manchesterTriage = 5;
    this.isPrivate = ModulabGlobals.INTERNAL_NO_VALUE;
    this.fixedDeliveryDate = null;
    this.invoiceDiscount = null;
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

  public getICU(): JavaString
  {
    return isEmpty(this.iCU) ? null : new JavaString(this.iCU);
  }

  public setICU(pICU: string): void
  {
    this.iCU = pICU;
  }

  public getAttendanceNumber(): JavaString
  {
    return isEmpty(this.attendanceNumber) ? null : new JavaString(this.attendanceNumber);
  }

  public setAttendanceNumber(pAttendanceNumber: string): void
  {
    this.attendanceNumber = pAttendanceNumber;
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

  public getEntity(): PayingEntityData
  {
    return this.entity;
  }

  public setEntity(pPEnt: PayingEntityData): void
  {
    if (isEmpty(pPEnt))
    {
      this.entity = new PayingEntityData();
    }
    else
    {
      this.entity = pPEnt;
    }
  }

  public getEntityID(): number
  {
    return isEmpty(this.entity) ? null : this.entity.getEntityID();
  }

  public getEntityDescription(): JavaString
  {
    return isEmpty(this.entity) ? null : this.entity.getEntityDescription();
  }

  public getEntityExternalID(): JavaString
  {
    return isEmpty(this.entity) ? null : this.entity.getExternalID();
  }

  public getPrescription(): JavaString
  {
    return isEmpty(this.prescription) ? null : new JavaString(this.prescription);
  }

  public setPrescription(pPrescription: string): void
  {
    this.prescription = pPrescription;
  }

  public getPriceListID(): number
  {
    return this.priceListID;
  }

  public setPriceListID(pPriceListID: number)
  {
    this.priceListID = pPriceListID;
  }

  public getPriceListDescription(): JavaString
  {
    return isEmpty(this.priceListDescription) ? null : new JavaString(this.priceListDescription);
  }

  public setPriceListDescription(pPriceListDescription: string): void
  {
    this.priceListDescription = pPriceListDescription;
  }

  public getPriceListCode(): JavaString
  {
    return isEmpty(this.priceListCode) ? null : new JavaString(this.priceListCode);
  }

  public setPriceListCode(pPriceListCode: string): void
  {
    this.priceListCode = pPriceListCode;
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

  public setPatient(pPatient: PatientData): void
  {
    this.patient = pPatient;
  }

  public getRequestDiagnosisList(): RequestDiagnosisList
  {
    return this.requestDiagnosisList;
  }

  public setRequestDiagnosisList(pRequestDiagnosisList: RequestDiagnosisList): void
  {
    this.requestDiagnosisList = pRequestDiagnosisList;
  }

  public getRequestDestinationList(): RequestDestinationList
  {
    return this.requestDestinationList;
  }

  public setRequestDestinationList(pRequestDestinationList: RequestDestinationList): void
  {
    this.requestDestinationList = pRequestDestinationList;
  }

  public getRequestTestList(): RequestTestList
  {
    return this.requestTestList;
  }

  public setRequestTestList(pRequestTestList: RequestTestList): void
  {
    this.requestTestList = pRequestTestList;
  }

  public getRequestProfileList(): RequestProfileList
  {
    return this.requestProfileList;
  }

  public setRequestProfileList(pRequestProfileList: RequestProfileList): void
  {
    this.requestProfileList = pRequestProfileList;
  }

  public getRequestProfileTestGroupList(): RequestProfileTestGroupList
  {
    return this.requestProfileTestGroupList;
  }

  public setRequestProfileTestGroupList(requestProfileTestGroupList: RequestProfileTestGroupList): void
  {
    this.requestProfileTestGroupList = requestProfileTestGroupList;
  }

  public getRequestAdditionalInfoList(): RequestAdditionalInfoList
  {
    return this.requestAdditionalInfoList;
  }

  public setRequestAdditionalInfoList(pRequestAdditionalInfoList: RequestAdditionalInfoList): void
  {
    this.requestAdditionalInfoList = pRequestAdditionalInfoList;
  }

  public getManchesterTriage(): number
  {
    return this.manchesterTriage;
  }

  public setManchesterTriage(pManchesterTriage: number): void
  {
    this.manchesterTriage = pManchesterTriage;
  }

  public getIsPrivate(): JavaString
  {
    return isEmpty(this.isPrivate) ? null : new JavaString(this.isPrivate);
  }

  public setIsPrivate(isPrivate: string): void
  {
    this.isPrivate = isPrivate;
  }

  public getFixedDeliveryDate(): JavaString
  {
    return isEmpty(this.fixedDeliveryDate) ? null : new JavaString(this.fixedDeliveryDate);
  }

  public setFixedDeliveryDate(fixedDeliveryDate: string): void
  {
    this.fixedDeliveryDate = fixedDeliveryDate;
  }

  public getInvoiceDiscount(): number
  {
    return this.invoiceDiscount;
  }

  public setInvoiceDiscount(pInvoiceDiscount: number): void
  {
    this.invoiceDiscount = pInvoiceDiscount;
  }

  //@Override
  public toXML(): string {
    let sRetorno: string[] = [];
    sRetorno.push("<REQUEST>" + CaracterEspecial.SALTO_CARRO);

    sRetorno.push(XMLUtil.appendTag("ISURGENT", this.getIsUrgent()));
    sRetorno.push(XMLUtil.appendTag("ISCONFIDENTIAL", this.getIsConfidential()));
    sRetorno.push(XMLUtil.appendTag("DOCTORID", this.getDoctorID()));
    sRetorno.push(XMLUtil.appendTag("SERVICEID", this.getServiceID()));
    sRetorno.push(XMLUtil.appendTag("PATIENTSTATUSID", this.getPatientStatusID()));
    sRetorno.push(XMLUtil.appendTag("ICU", this.getICU()));
    sRetorno.push(XMLUtil.appendTag("ATTENDANCENUMBER", this.getAttendanceNumber()));
    sRetorno.push(XMLUtil.appendTag("ORDERPLACERNUMBER", this.getOrderPlacerNumber()));
    sRetorno.push(XMLUtil.appendTag("LOCATION", this.getLocation()));
    sRetorno.push(XMLUtil.appendTag("COMMENTS", this.getComments()));
    sRetorno.push(XMLUtil.appendTag("REQUESTDATE", this.getRequestDate()));
    sRetorno.push(XMLUtil.appendTag("SAMPLECOLLECTIONCENTERID", this.getSampleCollectionCenterID()));
    sRetorno.push(this.entity.toXML());
    sRetorno.push(XMLUtil.appendTag("PRESCRIPTION", this.getPrescription()));
    sRetorno.push(XMLUtil.appendTag("PRICELISTID", this.getPriceListID()));
    sRetorno.push(XMLUtil.appendTag("PRICELISTDESCRIPTION", this.getPriceListDescription()));
    sRetorno.push(XMLUtil.appendTag("PRICELISTCODE", this.getPriceListCode()));
    sRetorno.push(XMLUtil.appendTag("RECEPTIONSTATUS", this.getReceptionStatus()));
    sRetorno.push(XMLUtil.appendTag("DOCTORNAME", this.getDoctorName()));
    sRetorno.push(XMLUtil.appendTag("COLLEGIATEID", this.getCollegiateID()));
    sRetorno.push(XMLUtil.appendTag("SERVICEDESCRIPTION", this.getServiceDescription()));
    sRetorno.push(XMLUtil.appendTag("SERVICECODE", this.getServiceCode()));
    sRetorno.push(XMLUtil.appendTag("ASSIGNINGAUTHORITYID", this.getAssigningAuthorityID()));
    sRetorno.push(XMLUtil.appendTag("PATIENTSTATUSDESCRIPTION", this.getPatientStatusDescription()));
    sRetorno.push(XMLUtil.appendTag("PATIENTSTATUSCODE", this.getPatientStatusCode()));
    sRetorno.push(XMLUtil.appendTag("CENTERID", this.getCenterID()));
    sRetorno.push(XMLUtil.appendTag("CENTERDESCRIPTION", this.getCenterDescription()));
    sRetorno.push(XMLUtil.appendTag("SAMPLECOLLECTIONCENTERDESCRIPTION", this.getSampleCollectionCenterDescription()));
    sRetorno.push(XMLUtil.appendTag("SAMPLECOLLECTIONCENTERCODE", this.getSampleCollectionCenterCode()));
    sRetorno.push(XMLUtil.appendTag("CENTERPRINTABLEDESCRIPTION", this.getCenterDescription()));
    sRetorno.push(this.getPatient().toXML());
    sRetorno.push(this.getRequestDiagnosisList().toXML());
    sRetorno.push(this.getRequestDestinationList().toXML());
    sRetorno.push(this.getRequestTestList().toXML());
    sRetorno.push(this.getRequestProfileList().toXML());
    sRetorno.push(this.getRequestProfileTestGroupList().toXML());
    sRetorno.push(this.getRequestAdditionalInfoList().toXML());
    sRetorno.push(XMLUtil.appendTag("MANCHESTERTRIAGE", this.getManchesterTriage()));
    sRetorno.push(XMLUtil.appendTag("ISPRIVATE", this.getIsPrivate()));
    sRetorno.push(XMLUtil.appendTag("FIXEDDELIVERYDATE", this.getFixedDeliveryDate()));
    sRetorno.push(XMLUtil.appendTag("INVOICEDISCOUNT", this.getInvoiceDiscount()));

    sRetorno.push("</REQUEST>" + CaracterEspecial.SALTO_CARRO);
    return sRetorno.join("");
  }

  //@Override
  public toString(): string
    {
      const sRetorno: string = " getIsUrgent:" + this.getIsUrgent() + "\n" +
        " getIsConfidential:" + this.getIsConfidential() + "\n" +
        " getDoctorID:" + this.getDoctorID() + "\n" +
        " getServiceID:" + this.getServiceID() + "\n" +
        " getPatientStatusID:" + this.getPatientStatusID() + "\n" +
        " getICU:" + this.getICU() + "\n" +
        " getAttendanceNumber:" + this.getAttendanceNumber() + "\n" +
        " getOrderPlacerNumber:" + this.getOrderPlacerNumber() + "\n" +
        " getLocation:" + this.getLocation() + "\n" +
        " getComments:" + this.getComments() + "\n" +
        " getRequestDate:" + this.getRequestDate() + "\n" +
        " getSampleCollectionCenterID:" + this.getSampleCollectionCenterID() + "\n" +
        " getPrescription:" + this.getPrescription() + "\n" +
        " getPriceListID:" + this.getPriceListID() + "\n" +
        " getPriceListDescription:" + this.getPriceListDescription() + "\n" +
        " getPriceListCode:" + this.getPriceListCode() + "\n" +
        " getReceptionStatus:" + this.getReceptionStatus() + "\n" +
        " getDoctorName:" + this.getDoctorName() + "\n" +
        " getCollegiateID:" + this.getCollegiateID() + "\n" +
        " getServiceDescription:" + this.getServiceDescription() + "\n" +
        " getServiceCode:" + this.getServiceCode() + "\n" +
        " getAssigningAuthorityID:" + this.getAssigningAuthorityID() + "\n" +
        " getPatientStatusDescription:" + this.getPatientStatusDescription() + "\n" +
        " getPatientStatusCode:" + this.getPatientStatusCode() + "\n" +
        " getCenterID:" + this.getCenterID() + "\n" +
        " getCenterDescription:" + this.getCenterDescription() + "\n" +
        " getSampleCollectionCenterDescription:" + this.getSampleCollectionCenterDescription() + "\n" +
        " getSampleCollectionCenterCode:" + this.getSampleCollectionCenterCode() + "\n" +
        " getCenterDescription:" + this.getCenterDescription() + "\n" +
        " getManchesterTriage:" + this.getManchesterTriage() + "\n" +
        " getIsPrivate:" + this.getIsPrivate() + "\n" +
        " getFixedDeliveryDate:" + this.getFixedDeliveryDate() + "\n" +
        " getInvoiceDiscount:" + this.getInvoiceDiscount() + "\n";

      return sRetorno;
    }
}
