import { EntitiyBase } from "./base/entities/entities-base";

export class User extends EntitiyBase {

  //#region Fields

  name!: string;

  active!: boolean;

  //#endregion

}

export class CreditCard extends EntitiyBase {

  //#region Fields

  userId!: number;

  user!: User;

  //#endregion

}

export class Bank extends EntitiyBase {

  //#region Fields

  //#endregion

}
