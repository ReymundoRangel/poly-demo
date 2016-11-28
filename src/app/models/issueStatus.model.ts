//  -------------------------------------------------------------------
//  issueStatus.model.ts
//  -------------------------------------------------------------------

export class IssueStatus {
  k_IssueStatusId: number;
  issueStatustCode: string;
  issueStatustName: string;
  description: string
  sysCreateDateTime: Date;
  sysCreateUser: string;
  sysCreateMethod: string;
  sysRecordStatus: string;
  sysUpdateDateTime: Date;
  sysUpdateUser: string;
  sysUpdateMethod: string;

}
