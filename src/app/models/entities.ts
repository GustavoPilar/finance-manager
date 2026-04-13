import { EntityBase } from "./base/entities/entity-base";

/** Usuário */
export class User extends EntityBase {

  //#region Fields :: name, email, passwordHash, isActive

  /** Nome do usuário */
  name!: string;

  /** Email do usuário */
  email!: string;

  /** Senha de acesso do usário */
  passwordHash!: string;

  /** Está ativo */
  isActive!: boolean;

  //#endregion

}

export class FixedExpense extends EntityBase {

  //#region Fields :: userId, amount, dueDay, isActive

  /** Identificador do usuário */
  userId!: number;

  /** Valor do gasto fixo */
  amount!: number;

  /** Data de vencimento */
  dueDay!: number;

  /** Conta fixa ativa? */
  isActive!: boolean;

  //#endregion

  //#region Navigation :: User

  /** Usuário */
  user!: User;

  //#endregion

}

export class Category extends EntityBase {

  //#region :: userId, isActive, color

  /** Identificador de usuário */
  userId!: number;

  /** Categoria ativa? */
  isActive!: boolean;

  /** Cor da categoria */
  color!: string;

  //#endregion

  //#region Navigation :: User

  /** Usuário */
  user!: User;

  //#endregion

}

export class CreditTransaction extends EntityBase {

  //#region Fields :: userId, categoryId, totalAmount, totalInstallments, purchaseDate

  /** Identificador do usuário */
  userId!: number;

  /** Identificador da categoria */
  categoryId!: number;

  /** Valor total da compra */
  totalAmount!: number;

  /** Total de parcelas */
  totalInstallments!: number;

  /** Data da compra */
  purchaseDate!: Date;

  //#endregion

  //#region Navigation :: User, Category

  /** Usuário */
  user!: User;

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


