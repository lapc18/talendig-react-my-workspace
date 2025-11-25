import { ClassEntity } from "./class-entity";

export type TopicEntity = {
    uid: string | null;
    name: string;
    description: string;
    class: ClassEntity;
    isDeleted?: boolean;
}