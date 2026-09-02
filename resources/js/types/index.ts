export type * from './auth';
export type * from './navigation';
export type * from './ui';

export interface Page {
    id: number;
    slug: string;
    title: string;
    meta_title: string | null;
    meta_description: string | null;
    is_active: boolean;
    sort_order: number;
    created_at: string;
    updated_at: string;
    sections?: PageSection[];
}

export interface PageSection {
    id: number;
    page_id: number;
    section_type: string;
    title: string | null;
    subtitle: string | null;
    content: string | null;
    image_path: string | null;
    link_url: string | null;
    link_text: string | null;
    meta: Record<string, any> | null;
    sort_order: number;
    is_active: boolean;
    created_at: string;
    updated_at: string;
}

export interface Product {
    id: number;
    name: string;
    slug: string;
    category: string;
    sku: string | null;
    short_description: string | null;
    description: string | null;
    features: string[] | null;
    specifications: Record<string, string> | null;
    image_path: string | null;
    gallery: string[] | null;
    is_featured: boolean;
    is_active: boolean;
    sort_order: number;
    created_at: string;
    updated_at: string;
}

export interface News {
    id: number;
    title: string;
    slug: string;
    excerpt: string | null;
    content: string | null;
    image_path: string | null;
    author: string | null;
    category: string | null;
    published_at: string | null;
    is_published: boolean;
    created_at: string;
    updated_at: string;
}

export interface JobListing {
    id: number;
    title: string;
    slug: string;
    department: string | null;
    location: string | null;
    type: string;
    description: string | null;
    requirements: string[] | null;
    benefits: string[] | null;
    salary_range: string | null;
    deadline: string | null;
    is_active: boolean;
    created_at: string;
    updated_at: string;
}

export interface Setting {
    id: number;
    key: string;
    value: string | null;
    type: string;
    group: string;
    created_at: string;
    updated_at: string;
}

export interface ContactSubmission {
    id: number;
    name: string;
    email: string;
    phone: string | null;
    company: string | null;
    subject: string;
    message: string;
    is_read: boolean;
    admin_notes: string | null;
    created_at: string;
    updated_at: string;
}
