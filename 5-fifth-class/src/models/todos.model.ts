
export type Status = 'created' | 'in-progress' | 'done' | 'deleted';

export interface BaseEntity {
  id: string |number | null;
  createdAt: Date;
  deletedAt?: Date;
}

export interface ToDoEntity extends BaseEntity {
  text: string;
  status: Status;
}
