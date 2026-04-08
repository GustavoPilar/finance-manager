import { EntityBase } from "./base/entities/entity-base";

/** Usuário */
export class User extends EntityBase {

  //#region Fields :: name, active

  /** Nome do usuário */
  name!: string;

  /** Usuário ativo? */
  isActive!: boolean;

  //#endregion

}

/** Banco */
export class Bank extends EntityBase {

  //#region Fields

  //#endregion

}

/** Cartão de crédito */
export class CreditCard extends EntityBase {

  //#region Fields :: userId, bankId, isActive, closingDay, dueDay, limit

  /** Identificador do usuário */
  userId!: number;

  /** Identificador do banco */
  bankId!: number;

  /** Cartão ativo? */
  isActive!: boolean;

  /** Dia de fechamento do cartão */
  closingDay!: number;

  /** Dia de vencimento do cartão */
  dueDay!: number;

  /** Limite do cartão */
  limit!: number;

  //#endregion

  //#region Navigations :: User, Bank, Transaction

  /** Usuário */
  user!: User;

  /** Banco */
  bank!: Bank;

  /** Compras */
  transactions!: Transaction[];

  //#endregion

}

/** Compra */
export class Transaction extends EntityBase {

  //#region Fields :: creditCardId, purchaseDate, totalAmount, totalInstallments

  /** Identificador do cartão de crédito */
  creditCardId!: number;

  /** Identificador da categoria */
  categoryId!: number;

  /** Data de compra */
  purchaseDate!: Date;

  /** Valor total da compra */
  totalAmount!: number;

  /** Total de parcelas da compra */
  totalInstallments!: number;

  //#endregion

  //#region Navigations :: CreditCard, Installment

  /** Cartão de crédito */
  creditCard!: CreditCard;

  /** Categoria */
  category!: Category;

  /** Parcelas */
  installments!: Installment[]

  //#endregion

}

/** Parcela */
export class Installment extends EntityBase {

  //#region Fields :: transactionId, dueDay, installmentNumber, amount, isPaid

  /** Identificador da compra */
  transactionId!: number;

  /** Dia de vencimento da parcela */
  dueDate!: Date;

  /** Número da parcela */
  installmentNumber!: number;

  /** Valor da parcela */
  amount!: number;

  /** Parcela paga? */
  isPaid!: boolean;

  //#endregion

  //#region Navigation :: Transaction

  /** Compra */
  transaction!: Transaction;

  //#endregion

}

/** Categoria */
export class Category extends EntityBase {

  //#region Fields :: isActive

  /** Categoria ativa? */
  isActive?: boolean;

  //#endregion

}
