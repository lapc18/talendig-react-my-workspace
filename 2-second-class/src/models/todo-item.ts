
export type Status = 'in-progress' | 'done' | 'deleted';

export interface TodoItem {
    id?: number;
    text: string;
    status: Status;
}