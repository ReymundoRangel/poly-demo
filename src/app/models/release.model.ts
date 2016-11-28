//  -------------------------------------------------------------------
//  release.model.ts
//  -------------------------------------------------------------------

export class Release {
  k_ReleaseId: number;
  releaseNumber: string;
  description: string;
  targetDate: Date;
  completeDate: Date;
  sysCreateDateTime: Date;
  sysCreateUser: string;
  sysCreateMethod: string;
  sysRecordStatus: string;
  sysUpdateDateTime: Date;
  sysUpdateUser: string;
  sysUpdateMethod: string;
  k_ProjectId: number
}
