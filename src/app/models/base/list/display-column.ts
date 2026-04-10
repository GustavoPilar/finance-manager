import { ColumnTypeEnum } from "./column-type-enum";

/** Colunas */
export class DisplayColumn {

  /** Campo do registro */
  field!: string;

  /** Descrição legível da coluna*/
  description!: string;

  /** Tipo de coluna */
  columnType!: ColumnTypeEnum;

  prefix?: string;

  suffix?: string;

}
