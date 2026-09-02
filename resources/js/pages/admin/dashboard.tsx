import { Head, Link } from '@inertiajs/react';
import AdminLayout from '@/layouts/admin/admin-layout';
import { FileText, Package, Newspaper, Briefcase, MessageSquare, ArrowUpRight } from 'lucide-react';
import type { News, ContactSubmission } from '@/types';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface Stats {
    pages: number;
    products: number;
    news: number;
    jobs: number;
    contacts: number;
    unread_contacts: number;
}

interface DashboardProps {
    stats: Stats;
    recentContacts: ContactSubmission[];
    recentNews: News[];
}

export default function Dashboard({ stats, recentContacts, recentNews }: DashboardProps) {
    const statCards = [
        { label: 'Pages', value: stats.pages, icon: FileText, href: '/admin/pages', color: 'bg-blue-500' },
        { label: 'Products', value: stats.products, icon: Package, href: '/admin/products', color: 'bg-green-500' },
        { label: 'News', value: stats.news, icon: Newspaper, href: '/admin/news', color: 'bg-purple-500' },
        { label: 'Jobs', value: stats.jobs, icon: Briefcase, href: '/admin/jobs', color: 'bg-orange-500' },
        { label: 'Contacts', value: stats.contacts, icon: MessageSquare, href: '/admin/contacts', color: 'bg-red-500', badge: stats.unread_contacts },
    ];

    return (
        <AdminLayout>
            <Head title="Admin Dashboard" />

            <div className="flex flex-col gap-2 mb-6">
                <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
                <p className="text-sm text-muted-foreground">Overview of your site content and activity.</p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
                {statCards.map((card) => (
                    <Link key={card.label} href={card.href} className="block group">
                        <Card className="h-full py-0 gap-0 overflow-hidden hover:shadow-md transition-shadow border shadow-sm">
                            <CardContent className="p-6">
                                <div className="flex items-center gap-4">
                                    <div className={`${card.color} p-3 rounded-lg shadow-xs shrink-0`}>
                                        <card.icon className="h-6 w-6 text-white" />
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <p className="text-sm font-medium text-muted-foreground">{card.label}</p>
                                        <div className="flex items-center gap-2 mt-1">
                                            <p className="text-2xl font-bold tracking-tight leading-none">{card.value}</p>
                                            {card.badge ? (
                                                <Badge variant="destructive" className="px-1.5 py-0 text-xs font-medium">
                                                    {card.badge} new
                                                </Badge>
                                            ) : null}
                                        </div>
                                    </div>
                                    <ArrowUpRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                                </div>
                            </CardContent>
                        </Card>
                    </Link>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Recent Contacts */}
                <Card className="py-0 gap-0 overflow-hidden shadow-sm">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 p-6 pb-4 border-b bg-card">
                        <div className="space-y-1">
                            <CardTitle className="text-base font-semibold">Recent Contacts</CardTitle>
                            <CardDescription className="text-sm">Latest inquiries from visitors</CardDescription>
                        </div>
                        <Button variant="ghost" size="sm" asChild>
                            <Link href="/admin/contacts">View All</Link>
                        </Button>
                    </CardHeader>
                    <CardContent className="p-0">
                        <div className="divide-y">
                            {recentContacts.length > 0 ? (
                                recentContacts.map((contact) => (
                                    <Link
                                        key={contact.id}
                                        href={`/admin/contacts/${contact.id}`}
                                        className="flex items-center justify-between p-4 hover:bg-muted/50 transition-colors gap-4"
                                    >
                                        <div className="min-w-0 flex-1">
                                            <div className="flex items-center gap-2">
                                                <p className="font-medium text-sm truncate">{contact.name}</p>
                                                {!contact.is_read && (
                                                    <Badge variant="default" className="h-1.5 w-1.5 p-0 rounded-full bg-blue-600 shrink-0" />
                                                )}
                                            </div>
                                            <p className="text-sm text-muted-foreground truncate">{contact.email}</p>
                                        </div>
                                        <span className="text-xs text-muted-foreground shrink-0">
                                            {new Date(contact.created_at).toLocaleDateString()}
                                        </span>
                                    </Link>
                                ))
                            ) : (
                                <div className="p-8 text-center">
                                    <MessageSquare className="h-8 w-8 mx-auto text-muted-foreground/40 mb-2" />
                                    <p className="text-sm text-muted-foreground">No contacts yet</p>
                                </div>
                            )}
                        </div>
                    </CardContent>
                </Card>

                {/* Recent News */}
                <Card className="py-0 gap-0 overflow-hidden shadow-sm">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 p-6 pb-4 border-b bg-card">
                        <div className="space-y-1">
                            <CardTitle className="text-base font-semibold">Recent News</CardTitle>
                            <CardDescription className="text-sm">Latest published articles</CardDescription>
                        </div>
                        <Button variant="ghost" size="sm" asChild>
                            <Link href="/admin/news">View All</Link>
                        </Button>
                    </CardHeader>
                    <CardContent className="p-0">
                        <div className="divide-y">
                            {recentNews.length > 0 ? (
                                recentNews.map((article) => (
                                    <Link
                                        key={article.id}
                                        href={`/admin/news/${article.id}/edit`}
                                        className="flex items-center justify-between p-4 hover:bg-muted/50 transition-colors gap-4"
                                    >
                                        <div className="min-w-0 flex-1">
                                            <p className="font-medium text-sm truncate">{article.title}</p>
                                            <p className="text-sm text-muted-foreground truncate capitalize">{article.category || 'Uncategorized'}</p>
                                        </div>
                                        <span className="text-xs text-muted-foreground shrink-0">
                                            {new Date(article.created_at).toLocaleDateString()}
                                        </span>
                                    </Link>
                                ))
                            ) : (
                                <div className="p-8 text-center">
                                    <Newspaper className="h-8 w-8 mx-auto text-muted-foreground/40 mb-2" />
                                    <p className="text-sm text-muted-foreground">No news yet</p>
                                </div>
                            )}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </AdminLayout>
    );
}
