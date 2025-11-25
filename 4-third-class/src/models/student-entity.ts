export type StudentEntity = {
    uid: string | null;
    name: string;
    email: string;
    city: string;
    isDeleted?: boolean;
}