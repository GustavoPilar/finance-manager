/** Base das entidades - Interface */
export interface IEntityBase {

  /** Identificador */
  id: number;

  /** Descrição da entidade */
  description: string;

  /** Data da criação */
  createdAt: Date;

  /** Data da última atualização */
  updatedAt?: Date;

}
