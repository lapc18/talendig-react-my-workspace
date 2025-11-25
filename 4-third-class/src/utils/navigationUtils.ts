

export enum NavigationItemId {
    CREATE_NEW_CLASS = "CREATE_NEW_CLASS",
    CREATE_NEW_TOPIC = "CREATE_NEW_TOPIC",
    CREATE_NEW_STUDENT = "CREATE_NEW_STUDENT",
    LIST_CLASSES = "LIST_CLASSES",
    LIST_TOPICS = "LIST_TOPICS",
    LIST_STUDENTS = "LIST_STUDENTS",
}

export interface NavigationItem {
    id: string;
    label: string;
}

export const NAVIGATION_ITEMS: NavigationItem[] = [
    { id: NavigationItemId.CREATE_NEW_CLASS, label: "Create New Class" },
    { id: NavigationItemId.CREATE_NEW_TOPIC, label: "Create New Topic" },
    { id: NavigationItemId.CREATE_NEW_STUDENT, label: "Create New Student" },
    { id: NavigationItemId.LIST_CLASSES, label: "List Classes" },
    { id: NavigationItemId.LIST_TOPICS, label: "List Topics" },
    { id: NavigationItemId.LIST_STUDENTS, label: "List Students" },
];