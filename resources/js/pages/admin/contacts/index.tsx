import { Head, Link, router } from '@inertiajs/react';
import AdminLayout from '@/layouts/admin/admin-layout';
import { Trash2, Eye, Mail } from 'lucide-react';
import type { ContactSubmission } from '@/types';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface ContactsIndexProps {
    contacts: {
        data: ContactSubmission[];
        current_page: number;
        last_page: number;
        total: number;
    };
    unreadCount: number;
}

export default function ContactsIndex({ contacts, unreadCount }: ContactsIndexProps) {
    const handleDelete = (id: number) => {
        if (confirm('Are you sure you want to delete this contact?')) {
            router.delete(`/admin/contacts/${id}`);
        }
    };

    return (
        <AdminLayout>
            <Head title="Manage Contacts" />

            <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between mb-6">
                <div className="space-y-1">
                    <h1 className="text-2xl font-bold tracking-tight flex items-center gap-3">
                        Contacts
                        {unreadCount > 0 && (
                            <Badge variant="destructive" className="text-xs">
                                {unreadCount} new
                            </Badge>
                        )}
                    </h1>
                    <p className="text-sm text-muted-foreground">
                        {unreadCount > 0 ? `${unreadCount} unread messages` : 'All contact submissions'}
                        <span className="mx-2">·</span>
                        {contacts.total} total
                    </p>
                </div>
            </div>

            <Card className="py-0 gap-0 overflow-hidden shadow-sm">
                <CardContent className="p-0">
                    <div className="overflow-x-auto">
                        <table className="w-full caption-bottom text-sm">
                            <thead className="[&_tr]:border-b bg-muted/50">
                                <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                                    <th className="h-10 px-4 text-left align-middle font-medium text-muted-foreground">Name</th>
                                    <th className="h-10 px-4 text-left align-middle font-medium text-muted-foreground">Email</th>
                                    <th className="h-10 px-4 text-left align-middle font-medium text-muted-foreground">Subject</th>
                                    <th className="h-10 px-4 text-left align-middle font-medium text-muted-foreground">Date</th>
                                    <th className="h-10 px-4 text-left align-middle font-medium text-muted-foreground">Status</th>
                                    <th className="h-10 px-4 text-right align-middle font-medium text-muted-foreground">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="[&_tr:last-child]:border-0">
                                {contacts.data.length > 0 ? (
                                    contacts.data.map((contact) => (
                                        <tr
                                            key={contact.id}
                                            className={`border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted ${!contact.is_read ? 'bg-primary/[0.04] dark:bg-primary/10' : ''}`}
                                        >
                                            <td className="p-4 align-middle font-medium">
                                                <div className="flex items-center gap-2">
                                                    {!contact.is_read && <span className="h-2 w-2 rounded-full bg-blue-600 shrink-0" />}
                                                    <span className={!contact.is_read ? 'font-semibold' : ''}>{contact.name}</span>
                                                </div>
                                            </td>
                                            <td className="p-4 align-middle text-muted-foreground">{contact.email}</td>
                                            <td className="p-4 align-middle text-muted-foreground max-w-[240px] truncate">{contact.subject || '-'}</td>
                                            <td className="p-4 align-middle text-muted-foreground">
                                                {new Date(contact.created_at).toLocaleDateString()}
                                            </td>
                                            <td className="p-4 align-middle">
                                                <Badge
                                                    variant={contact.is_read ? 'outline' : 'secondary'}
                                                    className={
                                                        contact.is_read
                                                            ? 'text-muted-foreground'
                                                            : 'bg-blue-500/15 text-blue-700 border-blue-200 dark:bg-blue-500/20 dark:text-blue-300 dark:border-blue-900/50'
                                                    }
                                                >
                                                    {contact.is_read ? 'Read' : 'New'}
                                                </Badge>
                                            </td>
                                            <td className="p-4 align-middle text-right">
                                                <div className="flex justify-end gap-1">
                                                    <Button variant="ghost" size="sm" asChild>
                                                        <Link href={`/admin/contacts/${contact.id}`}>
                                                            <Eye className="h-4 w-4" />
                                                            View
                                                        </Link>
                                                    </Button>
                                                    <Button
                                                        variant="ghost"
                                                        size="sm"
                                                        onClick={() => handleDelete(contact.id)}
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
                                        <td colSpan={6} className="p-8 text-center">
                                            <Mail className="h-8 w-8 mx-auto text-muted-foreground/40 mb-2" />
                                            <p className="text-sm text-muted-foreground">No contacts yet</p>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </CardContent>
            </Card>

            {/* Pagination */}
            {contacts.last_page > 1 && (
                <div className="mt-6 flex justify-center gap-2 flex-wrap">
                    {Array.from({ length: contacts.last_page }, (_, i) => i + 1).map((page) => (
                        <Button
                            key={page}
                            variant={page === contacts.current_page ? 'default' : 'outline'}
                            size="sm"
                            onClick={() => router.get('/admin/contacts', { page }, { preserveState: true })}
                            className="min-w-9"
                        >
                            {page}
                        </Button>
                    ))}
                </div>
            )}
        </AdminLayout>
    );
}
