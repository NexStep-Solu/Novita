import { Head, Link, router } from '@inertiajs/react';
import AdminLayout from '@/layouts/admin/admin-layout';
import { Plus, Edit, Trash2, FileText } from 'lucide-react';
import type { Page } from '@/types';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface PagesIndexProps {
    pages: (Page & { sections_count: number })[];
}

export default function PagesIndex({ pages }: PagesIndexProps) {
    const handleDelete = (id: number) => {
        if (confirm('Are you sure you want to delete this page?')) {
            router.delete(`/admin/pages/${id}`);
        }
    };

    return (
        <AdminLayout>
            <Head title="Manage Pages" />

            <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between mb-6">
                <div>
                    <h1 className="text-2xl font-bold tracking-tight">Pages</h1>
                    <p className="text-sm text-muted-foreground">Manage site pages and their content sections.</p>
                </div>
                <Button asChild className="mt-3 sm:mt-0 w-fit hidden">
                    <Link href="/admin/pages/create">
                        <Plus className="h-4 w-4" />
                        Add Page
                    </Link>
                </Button>
            </div>

            <Card className="py-0 gap-0 overflow-hidden shadow-sm">
                <CardContent className="p-0">
                    <div className="overflow-x-auto">
                        <table className="w-full caption-bottom text-sm">
                            <thead className="[&_tr]:border-b bg-muted/50">
                                <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                                    <th className="h-10 px-4 text-left align-middle font-medium text-muted-foreground">Title</th>
                                    <th className="h-10 px-4 text-left align-middle font-medium text-muted-foreground">Slug</th>
                                    <th className="h-10 px-4 text-left align-middle font-medium text-muted-foreground">Sections</th>
                                    <th className="h-10 px-4 text-left align-middle font-medium text-muted-foreground">Status</th>
                                    <th className="h-10 px-4 text-right align-middle font-medium text-muted-foreground">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="[&_tr:last-child]:border-0">
                                {pages.length > 0 ? (
                                    pages.map((page) => (
                                        <tr key={page.id} className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                                            <td className="p-4 align-middle">
                                                <div className="flex items-center gap-2">
                                                    <div className="flex h-8 w-8 items-center justify-center rounded-md bg-muted">
                                                        <FileText className="h-4 w-4 text-muted-foreground" />
                                                    </div>
                                                    <span className="font-medium">{page.title}</span>
                                                </div>
                                            </td>
                                            <td className="p-4 align-middle text-muted-foreground font-mono text-xs">
                                                /{page.slug}
                                            </td>
                                            <td className="p-4 align-middle text-muted-foreground">
                                                <Badge variant="outline" className="font-normal">
                                                    {page.sections_count} sections
                                                </Badge>
                                            </td>
                                            <td className="p-4 align-middle">
                                                <Badge
                                                    variant={page.is_active ? 'secondary' : 'outline'}
                                                    className={
                                                        page.is_active
                                                            ? 'bg-green-500/15 text-green-700 border-green-200 dark:bg-green-500/10 dark:text-green-400 dark:border-green-900/50'
                                                            : 'bg-red-500/10 text-red-700 border-red-200 dark:bg-red-500/10 dark:text-red-400 dark:border-red-900/50'
                                                    }
                                                >
                                                    {page.is_active ? 'Active' : 'Inactive'}
                                                </Badge>
                                            </td>
                                            <td className="p-4 align-middle text-right">
                                                <div className="flex justify-end gap-1">
                                                    <Button variant="ghost" size="sm" asChild>
                                                        <Link href={`/admin/pages/${page.id}/edit`}>
                                                            <Edit className="h-4 w-4" />
                                                            Edit
                                                        </Link>
                                                    </Button>
                                                    <Button
                                                        variant="ghost"
                                                        size="sm"
                                                        onClick={() => handleDelete(page.id)}
                                                        className="text-destructive hover:text-destructive hover:bg-destructive/10"
                                                    >
                                                        <Trash2 className="h-4 w-4" />
                                                        Delete
                                                    </Button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan={5} className="p-8 text-center text-sm text-muted-foreground">
                                            No pages found.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </CardContent>
            </Card>
        </AdminLayout>
    );
}
