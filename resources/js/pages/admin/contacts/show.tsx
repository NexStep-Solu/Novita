import { Head, router } from '@inertiajs/react';
import AdminLayout from '@/layouts/admin/admin-layout';
import { ArrowLeft, Mail, Phone, Building, Calendar, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import type { ContactSubmission } from '@/types';

interface ContactShowProps {
    contact: ContactSubmission;
}

export default function ContactShow({ contact }: ContactShowProps) {
    const handleDelete = () => {
        if (confirm('Are you sure you want to delete this contact?')) {
            router.delete(`/admin/contacts/${contact.id}`);
        }
    };

    return (
        <AdminLayout>
            <Head title={`Contact: ${contact.name}`} />

            <div className="flex items-center gap-3 mb-6">
                <Button variant="ghost" size="sm" asChild>
                    <a href="/admin/contacts"><ArrowLeft className="h-4 w-4" /> Back</a>
                </Button>
                <div className="flex-1">
                    <h1 className="text-2xl font-bold">Contact from {contact.name}</h1>
                    <p className="text-sm text-muted-foreground">{contact.subject || 'No subject'}</p>
                </div>
                <Badge variant={contact.is_read ? 'outline' : 'secondary'} className={
                    contact.is_read
                        ? 'text-muted-foreground'
                        : 'bg-blue-500/15 text-blue-700 border-blue-200 dark:bg-blue-500/20 dark:text-blue-300 dark:border-blue-900/50'
                }>
                    {contact.is_read ? 'Read' : 'New'}
                </Badge>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                    <Card>
                        <CardHeader>
                            <CardTitle>Message</CardTitle>
                            <CardDescription>Received {new Date(contact.created_at).toLocaleString()}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="prose prose-lg max-w-none dark:prose-invert">
                                {contact.message.split('\n\n').map((paragraph, index) => (
                                    <p key={index}>{paragraph}</p>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <div className="space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Contact Details</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary"><Mail className="h-5 w-5" /></div>
                                <div>
                                    <p className="text-xs text-muted-foreground">Email</p>
                                    <p className="text-sm font-medium">{contact.email}</p>
                                </div>
                            </div>

                            {contact.phone && (
                                <div className="flex items-center gap-3">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary"><Phone className="h-5 w-5" /></div>
                                    <div>
                                        <p className="text-xs text-muted-foreground">Phone</p>
                                        <p className="text-sm font-medium">{contact.phone}</p>
                                    </div>
                                </div>
                            )}

                            {contact.company && (
                                <div className="flex items-center gap-3">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary"><Building className="h-5 w-5" /></div>
                                    <div>
                                        <p className="text-xs text-muted-foreground">Company</p>
                                        <p className="text-sm font-medium">{contact.company}</p>
                                    </div>
                                </div>
                            )}

                            <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary"><Calendar className="h-5 w-5" /></div>
                                <div>
                                    <p className="text-xs text-muted-foreground">Received</p>
                                    <p className="text-sm font-medium">{new Date(contact.created_at).toLocaleString()}</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardContent className="space-y-3 pt-6">
                            <Button asChild className="w-full">
                                <a href={`mailto:${contact.email}?subject=Re: ${contact.subject || 'Your inquiry'}`}><Mail className="h-4 w-4" /> Reply via Email</a>
                            </Button>
                            <Separator />
                            <Button variant="destructive" onClick={handleDelete} className="w-full"><Trash2 className="h-4 w-4" /> Delete</Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </AdminLayout>
    );
}
