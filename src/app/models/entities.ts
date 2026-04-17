import { EntityBase } from "./base/entities/entity-base";

export class Category extends EntityBase {

  //#region :: isActive, color

  /** Categoria ativa? */
  isActive!: boolean;

  /** Cor da categoria */
  color!: string;

  //#endregion

}

export class CreditTransaction extends EntityBase {

  //#region Fields :: categoryId, totalAmount, totalInstallments, purchaseDate

  /** Valor total da compra */
  totalAmount!: number;

  /** Total de parcelas */
  totalInstallments!: number;

  /** Data da compra */
  purchaseDate!: Date;

  /** Id da categoria */
  categoryId!: number;

  //#endregion

  //#region Navigation :: Category

  /** Categoria */
  category!: Category;

  //#endregion

}

export class GeneralExpense extends EntityBase {

  //#region Fields :: userId, amount, dueDay, isActive

  /** Valor da compra geral */
  amount!: number;

  /** Data da compra */
  purchaseDate!: Date;

  /** Id da categoria */
  categoryId!: number;

  //#endregion

  //#region Navigation :: Category

  /** Categoria */
  category!: Category;

  //#endregion

}

export class FixedExpense extends EntityBase {

  //#region Fields :: userId, amount, dueDay, isActive

  /** Valor do gasto fixo */
  amount!: number;

  /** Data de vencimento */
  dueDay!: number;

  /** Conta fixa ativa? */
  isActive!: boolean;

  /** Id da categoria */
  categoryId!: number;

  //#endregion

  //#region Navigation :: Category

  /** Categoria */
  category!: Category;

  //#endregion

}

export class Installment extends EntityBase {

  //#region Fields :: creditTransactionId, number, amount, dueDate, isPaid, paymentDate

  /** Compra de crédito */
  creditTransactionId!: number;

  /** Número da parcela */
  number!: number;

  /** Valor da parcela */
  amount!: number;

  /** Data de vencimento */
  dueDate!: Date;

  /** Parcela paga? */
  isPaid!: boolean;

  /** Data do pagamento */
  paymentDate?: Date;

  //#endregion

  //#region Navigation :: CreditTransaction

  /** Compra de crédito */
  creditTransaction!: CreditTransaction;

  //#endregion

}


