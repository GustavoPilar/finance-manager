import { EntitiyBase } from "./base/entities/entities-base";

export class User extends EntitiyBase {

  //#region Fields

  name!: string;

  active!: boolean;

  //#endregion

}
