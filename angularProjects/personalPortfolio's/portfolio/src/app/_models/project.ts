import { Tag } from "./tag";

export interface project{
    id: number;
    name: string;
    description: string;
    summary: string;
    projectLink: string;
    pictures: string[];
    tags: Tag[];
}