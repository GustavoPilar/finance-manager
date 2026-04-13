import { IEntityBase } from "./i-entity-base";

/** Base das entidades - concreta */
export class EntityBase implements IEntityBase {

  id!: number;

  description!: string;

  createdAt!: Date;

  updatedAt?: Date | undefined;
}
