import { EntitiyBase } from "./base/entities/entities-base";

export class User extends EntitiyBase {

  //#region Fields

  name!: string;

  active!: boolean;

  //#endregion

}

export class Bank extends EntitiyBase {

  //#region Fields

  //#endregion

}

export class CreditCard extends EntitiyBase {

  //#region Fields

  userId!: number;

  bankId!: number;

  isActive!: boolean;

  closingDay!: number;

  dueDay!: number;

  limit!: number;

  bank!: Bank;

  user!: User;

  //#endregion

}

export class InvoiceStatus extends EntitiyBase {

  //#region Fields

  //#endregion

}

export class Invoice extends EntitiyBase {

  //#region Fields

  creditCardId!: number;

  closeDate!: Date;

  dueDate!: Date;

  invoiceStatusId!: number;

  invoiceStatus!: InvoiceStatus;

  creditCard!: CreditCard;

  //#endregion

}

export class Transaction extends EntitiyBase {

  //#region Fields

  creditCardId!: number;

  purchaseDate!: Date;

  amount!: number;

  numberInstallments!: number;

  installmentAmount!: number;

  creditCard!: CreditCard;

  //#endregion

}

export class Installment extends EntitiyBase {

  //#region Fields

  transactionId!: number;

  number!: number;

  isPaid!: boolean;

  transaction!: Transaction;

  //#endregion

}
