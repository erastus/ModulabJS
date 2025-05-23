import { PatientData } from '@data/patient.model'
import { RequestData } from '@data/request.model'
import { JavascriptUtil } from '@util/JavascriptUtil'

//--importPackage(com.systelab.modulabgold.common.data.patient);
//--importPackage(com.systelab.modulabgold.client.common.util.javascriptUtil);
//--
/* [Funtions additionals] =================== */
//--
/* =========================================== */
//--
function getComponentsForPatientContactLine1() {
  return 'Address';
}
//--

function getComponentsForPatientContactLine2() {
  return '';  //return 'PatientField1,PatientField2';
}
//--

function getComponentsForPatientContactLine3() {
  return '';  //return 'PatientField3,PatientField4';
}
//--

function getComponentsForPatientContactLine4() {
  return '';  //return 'PatientField5,PatientField6';
}
//--

function getUseCountryProvinceCityConfiguration() {
  return false;
}
//--

function checkUserFields(usuario, utilidades: JavascriptUtil) {
  return true;
}
//--

function checkPatientFields(patient: PatientData, utilidades: JavascriptUtil) {
  return true;
}
//--

function checkRequestFields(request: RequestData, utilidades: JavascriptUtil) {
  return true;
}
//--

function getShowPatientExtraIdentifiers() {
  return false;
}
//--

function getDiagnosisMandatoryInRequest() {
  return false;
}
//--

function getComponentsForPatientContactLine5() {
  return '';  //return 'PatientField7,PatientField8';
}
//--

function getRequestLabelsToPrint() {
  return 2;
}
//--

/**
 * JavaScript for Werfen México
 *
 * @author Ing. Erasto Marroquin Ortega
 * @copyright Copyright (c) 2020 - <%= compilation_year %>, Werfen. (https://werfen.com)
 * @version 0.1
 * @compilation_date <%= compilation_date %>
 */
