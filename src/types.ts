export interface Project {
    id?: string;
    title: string;
    description: string;
    tech: string[];
    github: string;
    live: string | null;
    image: string;
}

export interface SkillItem {
    name: string;
    level: number;
    color: string;
}

export interface SkillCategory {
    category: string;
    items: SkillItem[];
}

export interface SocialLinks {
    email: string;
    linkedin: string;
    github: string;
}

export interface Section {
    id: string;
    label: string;
    icon: React.ElementType;
}

export interface Metric {
    label: string;
    value: string;
}

export interface ProjectContent {
    problem: string;
    solution: string;
    challenges: string[];
    methodology: string;
}

export interface ProjectDetail {
    title: string;
    subtitle: string;
    description: string;
    tags: string[];
    metrics: Metric[];
    github: string;
    demo: string;
    date: string;
    content: ProjectContent;
    image?: string;
}
