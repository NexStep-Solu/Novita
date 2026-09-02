import { Head, Link, router } from '@inertiajs/react';
import AdminLayout from '@/layouts/admin/admin-layout';
import { Plus, Edit, Trash2 } from 'lucide-react';
import type { JobListing } from '@/types';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface JobsIndexProps {
    jobs: JobListing[];
    departments: string[];
    locations: string[];
}

export default function JobsIndex({ jobs, departments, locations }: JobsIndexProps) {
    const handleDelete = (id: number) => {
        if (confirm('Are you sure you want to delete this job listing?')) {
            router.delete(`/admin/jobs/${id}`);
        }
    };

    return (
        <AdminLayout>
            <Head title="Manage Jobs" />

            <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between mb-6">
                <div>
                    <h1 className="text-2xl font-bold tracking-tight">Job Listings</h1>
                    <p className="text-sm text-muted-foreground">Manage open positions and applications.</p>
                </div>
                <Button asChild className="mt-3 sm:mt-0 w-fit">
                    <Link href="/admin/jobs/create">
                        <Plus className="h-4 w-4" />
                        Add Job
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
                                    <th className="h-10 px-4 text-left align-middle font-medium text-muted-foreground">Department</th>
                                    <th className="h-10 px-4 text-left align-middle font-medium text-muted-foreground">Location</th>
                                    <th className="h-10 px-4 text-left align-middle font-medium text-muted-foreground">Type</th>
                                    <th className="h-10 px-4 text-left align-middle font-medium text-muted-foreground">Status</th>
                                    <th className="h-10 px-4 text-right align-middle font-medium text-muted-foreground">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="[&_tr:last-child]:border-0">
                                {jobs.length > 0 ? (
                                    jobs.map((job) => (
                                        <tr key={job.id} className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                                            <td className="p-4 align-middle font-medium">{job.title}</td>
                                            <td className="p-4 align-middle text-muted-foreground">{job.department || '-'}</td>
                                            <td className="p-4 align-middle text-muted-foreground">{job.location || '-'}</td>
                                            <td className="p-4 align-middle text-muted-foreground capitalize">
                                                <Badge variant="outline" className="font-normal capitalize">
                                                    {job.type || '-'}
                                                </Badge>
                                            </td>
                                            <td className="p-4 align-middle">
                                                <Badge
                                                    variant={job.is_active ? 'secondary' : 'outline'}
                                                    className={
                                                        job.is_active
                                                            ? 'bg-green-500/15 text-green-700 border-green-200 dark:bg-green-500/10 dark:text-green-400 dark:border-green-900/50'
                                                            : 'bg-red-500/10 text-red-700 border-red-200 dark:bg-red-500/10 dark:text-red-400 dark:border-red-900/50'
                                                    }
                                                >
                                                    {job.is_active ? 'Active' : 'Inactive'}
                                                </Badge>
                                            </td>
                                            <td className="p-4 align-middle text-right">
                                                <div className="flex justify-end gap-1">
                                                    <Button variant="ghost" size="sm" asChild>
                                                        <Link href={`/admin/jobs/${job.id}/edit`}>
                                                            <Edit className="h-4 w-4" />
                                                            Edit
                                                        </Link>
                                                    </Button>
                                                    <Button
                                                        variant="ghost"
                                                        size="sm"
                                                        onClick={() => handleDelete(job.id)}
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
                                        <td colSpan={6} className="p-8 text-center text-sm text-muted-foreground">
                                            No job listings yet. Add your first opening.
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
