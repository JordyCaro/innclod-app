export interface ResponseTask {
    id: number;
    userId: number;
    title: string;
    completed: boolean;
}

export type Task = {
    [Key in keyof ResponseTask as Key extends 'userId' ? 'projectId' : Key]: ResponseTask[Key];
};