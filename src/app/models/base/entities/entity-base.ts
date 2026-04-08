import { IEntityBase } from "./i-entity-base";

/** Base das entidades - concreta */
export class EntityBase implements IEntityBase {

  /** Identificador */
  id!: number;

  /** Código da entidade */
  code!: string;

  /** Descrição da entidade */
  description!: string;

}
