import { Head, useForm } from '@inertiajs/react';
import AdminLayout from '@/layouts/admin/admin-layout';
import { Save, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';

interface NewsCreateProps {
    categories: string[];
}

export default function NewsCreate({ categories }: NewsCreateProps) {
    const { data, setData, post, processing, errors } = useForm({
        title: '',
        excerpt: '',
        content: '',
        author: '',
        category: '',
        published_at: '',
        is_published: false,
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post('/admin/news');
    };

    return (
        <AdminLayout>
            <Head title="Create News Article" />

            <div className="flex items-center gap-3 mb-6">
                <Button variant="ghost" size="sm" asChild>
                    <a href="/admin/news"><ArrowLeft className="h-4 w-4" /> Back</a>
                </Button>
                <div>
                    <h1 className="text-2xl font-bold">Create News Article</h1>
                    <p className="text-sm text-muted-foreground">Write and publish a new article.</p>
                </div>
            </div>

            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2 space-y-6">
                        <Card>
                            <CardHeader>
                                <CardTitle>Article Content</CardTitle>
                                <CardDescription>The main content of your article.</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="title">Title *</Label>
                                    <Input id="title" value={data.title} onChange={(e) => setData('title', e.target.value)} placeholder="Article title" required />
                                    {errors.title && <p className="text-sm text-destructive">{errors.title}</p>}
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="excerpt">Excerpt</Label>
                                    <textarea id="excerpt" value={data.excerpt} onChange={(e) => setData('excerpt', e.target.value)} rows={2} className="flex min-h-[60px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" placeholder="Brief summary..." />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="content">Content</Label>
                                    <textarea id="content" value={data.content} onChange={(e) => setData('content', e.target.value)} rows={12} className="flex min-h-[200px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" placeholder="Write your article..." />
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="space-y-6">
                        <Card>
                            <CardHeader>
                                <CardTitle>Settings</CardTitle>
                                <CardDescription>Publication details.</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="author">Author</Label>
                                    <Input id="author" value={data.author} onChange={(e) => setData('author', e.target.value)} placeholder="Author name" />
                                </div>
                                <div className="space-y-2">
                                    <Label>Category</Label>
                                    <Select value={data.category} onValueChange={(val) => setData('category', val)}>
                                        <SelectTrigger><SelectValue placeholder="Select category" /></SelectTrigger>
                                        <SelectContent>
                                            {categories.map((cat) => <SelectItem key={cat} value={cat}>{cat}</SelectItem>)}
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="published_at">Published At</Label>
                                    <Input id="published_at" type="datetime-local" value={data.published_at} onChange={(e) => setData('published_at', e.target.value)} />
                                </div>
                                <div className="flex items-center gap-2">
                                    <Checkbox id="is_published" checked={data.is_published} onCheckedChange={(checked) => setData('is_published', checked === true)} />
                                    <Label htmlFor="is_published" className="cursor-pointer">Published</Label>
                                </div>
                            </CardContent>
                        </Card>

                        <Button type="submit" disabled={processing} className="w-full">
                            <Save className="h-4 w-4" /> {processing ? 'Creating...' : 'Create Article'}
                        </Button>
                    </div>
                </div>
            </form>
        </AdminLayout>
    );
}
