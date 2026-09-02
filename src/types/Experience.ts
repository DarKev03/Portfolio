export interface Experience {
    date: string;
    title: string;
    company: string;
    description: string;
    type: "work" | "education";
    side: "left" | "right";
}