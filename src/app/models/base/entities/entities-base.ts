import { IEntityBase } from "./i-entities-base";

export class EntitiyBase implements IEntityBase {

  /** Identificador */
  id!: number;

  /** Código da entidade */
  code!: string;

  /** Descrição da entidade */
  description!: string;

}
