import { IEntityBase } from "./i-entity-base";

/** Base das entidades - concreta */
export class EntityBase implements IEntityBase {

  id!: number;

  name!: string;

  description!: string;

  createdAt!: Date;

  updatedAt?: Date | undefined;
}
