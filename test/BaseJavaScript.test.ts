import 'reflect-metadata';
const fs = require('fs');
const vm = require('vm');
const path = require('path');
const context = require('./js-test-context');
const { plainToClass, plainToInstance } = require('class-transformer');
import { JavascriptUtil } from '../src/common/util/JavascriptUtil'
const mockRequest = require('./mock-data/request.json');
const mockPayingEntity = require('./mock-data/paying-entity.json');
const mockPatientPathologyList = require('./mock-data/patient-pathology.json');
const mockPatientAdditionalInfoList = require('./mock-data/patient-additional-info.json');
const mockPatient = require('./mock-data/patient.json');
const mockRequestDiagnosisList = require('./mock-data/request-diagnosis.json');
const mockRequestDestinationList = require('./mock-data/request-destination.json');
const mockRequestTestList = require('./mock-data/request-test.json');
const mockRequestProfileList = require('./mock-data/request-profile.json');
const mockRequestProfileTestGroupList = require('./mock-data/request-profile-test-group.json');
const mockRequestAdditionalInfoList = require('./mock-data/request-additional-info.json');
import { RequestData } from '../src/common/data/request.model';
import { PayingEntityData } from '../src/common/data/paying-entity.model';
import { PatientPathologyList } from '../src/common/data/patient-pathology.list';
import { PatientAdditionalInfoList } from '../src/common/data/patient-additional-info.list';
import { PatientData } from '../src/common/data/patient.model';
import { RequestDiagnosisList } from '../src/common/data/request-diagnosis.list';
import { RequestDestinationList } from '../src/common/data/request-destination.list';
import { RequestTestList } from '../src/common/data/request-test.list';
import { RequestProfileList } from '../src/common/data/request-profile.list';
import { RequestProfileTestGroupList } from '../src/common/data/request-profile-test-group.list';
import { RequestAdditionalInfoList } from '../src/common/data/request-additional-info.list';

const filePath = path.join(__dirname, '../dist/', 'BaseJavaScript.js');
const code = fs.readFileSync(filePath, 'utf-8');

const versionMatch = code.match(/@version\s+([^\s]+)/);
const version = versionMatch ? versionMatch[1] : 'unknown';

describe(`Test BaseJavaScript version ${version}`, () => {
  let utilidades: JavascriptUtil;
  let request: RequestData;
  let aPayingEntity: PayingEntityData;
  let aPatientPathologyList: PatientPathologyList;
  let aPatientAdditionalInfoList: PatientAdditionalInfoList;
  let patient: PatientData;
  let pRequestDiagnosisList: RequestDiagnosisList;
  let pRequestDestinationList: RequestDestinationList;
  let pRequestTestList: RequestTestList;
  let pRequestProfileList: RequestProfileList;
  let pRequestProfileTestGroupList: RequestProfileTestGroupList;
  let pRequestAdditionalInfoList: RequestAdditionalInfoList;

  beforeAll(() => {
    request = plainToInstance(RequestData, mockRequest);
    aPayingEntity = plainToInstance(PayingEntityData, mockPayingEntity);
    aPatientPathologyList = plainToInstance(PatientPathologyList, mockPatientPathologyList);
    aPatientAdditionalInfoList = plainToInstance(PatientAdditionalInfoList, mockPatientAdditionalInfoList);
    patient = plainToInstance(PatientData, mockPatient);
    pRequestDiagnosisList = plainToInstance(RequestDiagnosisList, mockRequestDiagnosisList);
    pRequestDestinationList = plainToInstance(RequestDestinationList, mockRequestDestinationList);
    pRequestTestList = plainToInstance(RequestTestList, mockRequestTestList);
    pRequestProfileList = plainToInstance(RequestProfileList, mockRequestProfileList);
    pRequestProfileTestGroupList = plainToInstance(RequestProfileTestGroupList, mockRequestProfileTestGroupList);
    pRequestAdditionalInfoList = plainToInstance(RequestAdditionalInfoList, mockRequestAdditionalInfoList);

    request.setEntity(aPayingEntity);
    patient.setPatientPathologyList(aPatientPathologyList);
    patient.setPatientAddtionalInfoList(aPatientAdditionalInfoList);
    request.setPatient(patient);
    request.setRequestDiagnosisList(pRequestDiagnosisList);
    request.setRequestDestinationList(pRequestDestinationList);
    request.setRequestTestList(pRequestTestList);
    request.setRequestProfileList(pRequestProfileList);
    request.setRequestProfileTestGroupList(pRequestProfileTestGroupList);
    request.setRequestAdditionalInfoList(pRequestAdditionalInfoList);

    utilidades = new JavascriptUtil();

    const script = new vm.Script(code);
    const vmContext = vm.createContext(context);
    script.runInContext(vmContext);
  });

  describe(`checkRequestFields`, () => {
    test("expected to return true", () => {
    const result = (context as any).checkRequestFields(request, utilidades);
    expect(result).toBe(true);
  });
  });
});
