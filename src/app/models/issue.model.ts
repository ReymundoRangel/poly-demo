//  -------------------------------------------------------------------
//  issue.model.ts
//  -------------------------------------------------------------------


export class Issue {
  k_IssueId: number;
  url: string;
  issueName: string;
  description: string;
  recordDate: Date;
  recordDateStr: string;
  assignDate: Date;
  assignDateStr: string;
  targetDate: Date;
  doneDate: Date;
  testDate: Date;
  CompleteDate: Date;
  level1Name: string;
  level2Name: string;
  level3Name: string;
  level4Name: string;
  level5Name: string;
  gotoLink: string;
  sysCreateDateTime: Date;
  sysCreateUser: string;
  sysCreateMethod: string;
  sysRecordStatus: string;
  sysUpdateDateTime: Date;
  sysUpdateUser: string;
  sysUpdateMethod: string;
  k_Component1ID: number;
  k_Component2ID: number;
  k_Component3ID: number;
  k_Component4ID: number;
  k_Component5ID: number;
  k_EffortId: number;
  k_IssueStatusId: number;
  k_IssueTypeId: number;
  k_PriorityId: number;
  k_ProjectId: number;
  k_ReleaseId: number;
  k_UserId: number;
}
