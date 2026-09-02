import { Head, useForm } from '@inertiajs/react';
import { useState } from 'react';
import AdminLayout from '@/layouts/admin/admin-layout';
import { Save, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { HomeEditor } from '@/components/admin/editors/home-editor';
import { AboutEditor } from '@/components/admin/editors/about-editor';
import { LeadershipEditor } from '@/components/admin/editors/leadership-editor';
import type { Page, PageSection } from '@/types';

interface PageEditProps {
    page: Page & { sections: PageSection[] };
}

export default function PageEdit({ page }: PageEditProps) {
    const { data, setData, put, processing } = useForm({
        title: page.title,
        meta_title: page.meta_title || '',
        meta_description: page.meta_description || '',
        is_active: page.is_active,
        sort_order: page.sort_order,
    });
    const [activeTab, setActiveTab] = useState('content');
    const isHome = page.slug === 'home';
    const isAbout = page.slug === 'about-us';
    const isLeadership = page.slug === 'leadership';

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        put(`/admin/pages/${page.id}`);
    };

    return (
        <AdminLayout breadcrumbs={[{ title: 'Pages', href: '/admin/pages' }, { title: page.title, href: `/admin/pages/${page.id}/edit` }]}>
            <Head title={`Edit Page: ${page.title}`} />
            <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between mb-6">
                <div>
                    <h1 className="text-2xl font-bold tracking-tight">Edit Page: {page.title}</h1>
                    <p className="text-sm text-muted-foreground">/{page.slug} • {page.sections.length} sections</p>
                </div>
                <Button variant="outline" asChild>
                    <a href={page.slug === 'home' ? '/' : `/${page.slug}`} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" /> View Live
                    </a>
                </Button>
            </div>

            {isHome ? (
                <div className="w-full">
                    <div className="inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground mb-4">
                        {(['content', 'preview', 'settings', 'sections'] as const).map((t) => (
                            <button key={t} onClick={() => setActiveTab(t)} className={`inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${activeTab === t ? 'bg-background text-foreground shadow' : ''}`}>
                                {t === 'content' ? 'Content' : t === 'preview' ? 'Live Preview' : t === 'settings' ? 'Page Settings' : 'All Sections'}
                            </button>
                        ))}
                    </div>
                    {activeTab === 'content' && <HomeEditor page={page} />}
                    {activeTab === 'preview' && (
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between"><CardTitle>Preview</CardTitle><Button variant="outline" size="sm" asChild><a href="/" target="_blank">Open Live</a></Button></CardHeader>
                            <CardContent className="p-6 text-center text-sm text-muted-foreground">Use the Content tab editors — preview updates live. Other sections are managed via Save All Home Sections.</CardContent>
                        </Card>
                    )}
                    {activeTab === 'settings' && (
                        <Card>
                            <CardHeader><CardTitle>Page Settings</CardTitle></CardHeader>
                            <CardContent>
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div><Label>Title</Label><Input value={data.title} onChange={(e) => setData('title', e.target.value)} /></div>
                                    <div><Label>Meta Title</Label><Input value={data.meta_title} onChange={(e) => setData('meta_title', e.target.value)} /></div>
                                    <div><Label>Meta Description</Label><textarea value={data.meta_description} onChange={(e) => setData('meta_description', e.target.value)} rows={3} className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm" /></div>
                                    <Button type="submit" disabled={processing}><Save className="h-4 w-4" /> Save Page Settings</Button>
                                </form>
                            </CardContent>
                        </Card>
                    )}
                    {activeTab === 'sections' && (
                        <Card>
                            <CardHeader><CardTitle>All Sections ({page.sections.length})</CardTitle></CardHeader>
                            <CardContent className="space-y-2">
                                {page.sections.map((s) => (
                                    <div key={s.id} className="flex items-center justify-between rounded-xl border p-3 bg-card">
                                        <div><div className="text-sm font-medium">{s.title || s.section_type}</div><div className="text-xs text-muted-foreground">{s.section_type} • sort {s.sort_order}</div></div>
                                        <Badge variant={s.is_active ? 'secondary' : 'outline'}>{s.is_active ? 'Active' : 'Inactive'}</Badge>
                                    </div>
                                ))}
                            </CardContent>
                        </Card>
                    )}
                </div>
            ) : isAbout ? (
                <AboutEditor page={page} />
            ) : isLeadership ? (
                <LeadershipEditor page={page} />
            ) : (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2">
                        <form onSubmit={handleSubmit}>
                            <Card>
                                <CardHeader><CardTitle>Page Settings</CardTitle></CardHeader>
                                <CardContent className="space-y-4">
                                    <div><Label>Title</Label><Input value={data.title} onChange={(e) => setData('title', e.target.value)} /></div>
                                    <div><Label>Meta Title</Label><Input value={data.meta_title} onChange={(e) => setData('meta_title', e.target.value)} /></div>
                                    <div><Label>Meta Description</Label><textarea value={data.meta_description} onChange={(e) => setData('meta_description', e.target.value)} rows={3} className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm" /></div>
                                    <Button type="submit" disabled={processing}><Save className="h-4 w-4" /> Save Changes</Button>
                                </CardContent>
                            </Card>
                        </form>
                    </div>
                    <div>
                        <Card>
                            <CardHeader><CardTitle>Sections ({page.sections.length})</CardTitle></CardHeader>
                            <CardContent className="space-y-2">
                                {page.sections.map((s) => (
                                    <div key={s.id} className="p-3 bg-muted/30 rounded-xl flex items-center justify-between">
                                        <div><p className="text-sm font-medium">{s.title || s.section_type}</p><p className="text-xs text-muted-foreground">{s.section_type}</p></div>
                                        <Badge variant={s.is_active ? 'secondary' : 'outline'}>{s.is_active ? 'Active' : 'Inactive'}</Badge>
                                    </div>
                                ))}
                            </CardContent>
                        </Card>
                    </div>
                </div>
            )}
        </AdminLayout>
    );
}
