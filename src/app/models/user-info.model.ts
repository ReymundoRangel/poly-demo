//  -------------------------------------------------------------------
//  user-info.model.ts
//  -------------------------------------------------------------------

import { TransactionalInfo } from './transactional-info.model';

export class UserInfo extends TransactionalInfo {
  k_UserId: number;
  logInName: string;
  firstName: string;
  lastName: string;
  position: string;
  sysCreateDateTime: Date;
  sysCreateUser: string;
  sysCreateMethod: string;
  sysRecordStatus: string;
  sysUpdateDateTime: Date;
  sysUpdateUser: string;
  sysUpdateMethod: string;
  public listUsers: Array<UserInfo>;

}
