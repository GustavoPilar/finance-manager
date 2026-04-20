import { PrimeIcons } from "primeng/api";

export class MonthlyResume {

  constructor() {

  }

  totalAmount: number = 0.0;

  totalFixedExpense: number = 0.0;

  totalGeneralExpense: number = 0.0;

  totalCreditTransaction: number = 0.0;

  categories: CategoryRanking[] = [];


  public getTotalKeys(): TotalKey[] {
    return [
      {
        field: "totalAmount",
        description: "Gasto total",
        icon: PrimeIcons.MONEY_BILL,
        color: "green"
      },
      {
        field: "totalFixedExpense",
        description: "Contas fixas",
        icon: PrimeIcons.WALLET,
        color: "orange"
      },
      {
        field: "totalGeneralExpense",
        description: "Compras avulsas",
        icon: PrimeIcons.SHOPPING_CART,
        color: "red"
      },
      {
        field: "totalCreditTransaction",
        description: "Total das parcelas",
        icon: PrimeIcons.CREDIT_CARD,
        color: "blue"
      }
    ];
  }
}

export class TotalKey {
  field!: "totalAmount" | "totalFixedExpense" | "totalGeneralExpense" | "totalCreditTransaction";
  description!: string;
  icon!: string | PrimeIcons;
  color!: string;
}

export class CategoryRanking {

  name!: string;
  color!: string;
  total!: number;

}
