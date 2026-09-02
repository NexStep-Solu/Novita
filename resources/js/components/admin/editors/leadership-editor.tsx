import { useMemo, useState } from 'react';
import { router } from '@inertiajs/react';
import { Save, Plus, Trash2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import type { Page, PageSection } from '@/types';

interface Member {
    name: string;
    title: string;
    bio: string;
    image: string;
}

export function LeadershipEditor({ page }: { page: Page & { sections: PageSection[] } }) {
    const hero = useMemo(() => page.sections.find((s) => s.section_type === 'hero'), [page.sections]);
    const mdSec = useMemo(() => page.sections.find((s) => s.section_type === 'managing_director'), [page.sections]);
    const boardSec = useMemo(() => page.sections.find((s) => s.section_type === 'board'), [page.sections]);
    const directorsSec = useMemo(() => page.sections.find((s) => s.section_type === 'directors'), [page.sections]);
    const seniorSec = useMemo(() => page.sections.find((s) => s.section_type === 'senior_management'), [page.sections]);

    const [heroForm, setHeroForm] = useState({ title: hero?.title || '', subtitle: hero?.subtitle || '' });
    const [mdForm, setMdForm] = useState({
        name: mdSec?.title || 'U Maung Aye',
        title: mdSec?.subtitle || 'Managing Director',
        bio: mdSec?.content || '',
        image: mdSec?.image_path || '',
    });
    const [mdFile, setMdFile] = useState<File | null>(null);

    const [boardMembers, setBoardMembers] = useState<Member[]>(() => {
        const m = (boardSec?.meta as any)?.members;
        return Array.isArray(m) && m.length ? m : [{ name: 'Chairman Name', title: 'Chairman of the Board', bio: 'With over 30 years of experience...', image: '' }];
    });
    const [directorsMembers, setDirectorsMembers] = useState<Member[]>(() => {
        const m = (directorsSec?.meta as any)?.members;
        return Array.isArray(m) && m.length ? m : [{ name: '', title: '', bio: '', image: '' }];
    });
    const [seniorMembers, setSeniorMembers] = useState<Member[]>(() => {
        const m = (seniorSec?.meta as any)?.members;
        return Array.isArray(m) && m.length ? m : [{ name: '', title: '', bio: '', image: '' }];
    });

    const [boardFiles, setBoardFiles] = useState<Record<number, File>>({});
    const [directorsFiles, setDirectorsFiles] = useState<Record<number, File>>({});
    const [seniorFiles, setSeniorFiles] = useState<Record<number, File>>({});

    const uploadIfNeeded = async (file?: File | null): Promise<string | null> => {
        if (!file) return null;
        const fd = new FormData();
        fd.append('file', file);
        const csrf = (document.querySelector('meta[name="csrf-token"]') as HTMLMetaElement)?.content || '';
        const res = await fetch('/admin/upload', { method: 'POST', headers: { 'X-CSRF-TOKEN': csrf } as any, body: fd });
        const j = await res.json();
        return j.path || null;
    };

    const handleSave = async () => {
        let mdImagePath = mdForm.image || null;
        if (mdFile) {
            const p = await uploadIfNeeded(mdFile);
            if (p) mdImagePath = p;
        }
        const boardWithImages = await Promise.all(
            boardMembers.map(async (m, idx) => {
                let img = m.image;
                const f = boardFiles[idx];
                if (f) {
                    const p = await uploadIfNeeded(f);
                    if (p) img = `/storage/${p}`;
                }
                return { ...m, image: img };
            }),
        );
        const directorsWithImages = await Promise.all(
            directorsMembers.map(async (m, idx) => {
                let img = m.image;
                const f = directorsFiles[idx];
                if (f) {
                    const p = await uploadIfNeeded(f);
                    if (p) img = `/storage/${p}`;
                }
                return { ...m, image: img };
            }),
        );
        const seniorWithImages = await Promise.all(
            seniorMembers.map(async (m, idx) => {
                let img = m.image;
                const f = seniorFiles[idx];
                if (f) {
                    const p = await uploadIfNeeded(f);
                    if (p) img = `/storage/${p}`;
                }
                return { ...m, image: img };
            }),
        );
        const payload: any = { sections: [] };
        payload.sections.push({ id: hero?.id, section_type: 'hero', title: heroForm.title, subtitle: heroForm.subtitle, sort_order: 1, is_active: true });
        payload.sections.push({ id: mdSec?.id, section_type: 'managing_director', title: mdForm.name, subtitle: mdForm.title, content: mdForm.bio, image_path: mdImagePath, sort_order: 2, is_active: true });
        payload.sections.push({ id: boardSec?.id, section_type: 'board', title: 'Board of Directors', meta: { members: boardWithImages.filter((m) => m.name.trim()) }, sort_order: 3, is_active: true });
        payload.sections.push({ id: directorsSec?.id, section_type: 'directors', title: 'Directors', meta: { members: directorsWithImages.filter((m) => m.name.trim()) }, sort_order: 4, is_active: true });
        payload.sections.push({ id: seniorSec?.id, section_type: 'senior_management', title: 'Senior Management', meta: { members: seniorWithImages.filter((m) => m.name.trim()) }, sort_order: 5, is_active: true });
        router.put(`/admin/pages/${page.id}/sections`, payload, { preserveScroll: true });
    };

    const renderMemberList = (
        members: Member[],
        setMembers: React.Dispatch<React.SetStateAction<Member[]>>,
        files: Record<number, File>,
        setFiles: React.Dispatch<React.SetStateAction<Record<number, File>>>,
    ) => (
        <div className="space-y-4">
            {members.map((m, idx) => (
                <div key={idx} className="rounded-xl border bg-card p-4 space-y-3">
                    <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold tracking-widest text-muted-foreground">MEMBER {idx + 1}</span>
                        <Button variant="ghost" size="sm" onClick={() => setMembers((prev) => prev.filter((_, i) => i !== idx))} className="h-8 text-destructive hover:text-destructive">
                            <Trash2 className="h-4 w-4" /> Remove
                        </Button>
                    </div>
                    <div className="grid md:grid-cols-2 gap-3">
                        <div className="space-y-1">
                            <Label>Name</Label>
                            <Input
                                value={m.name}
                                onChange={(e) => {
                                    const v = e.target.value;
                                    setMembers((prev) => prev.map((item, i) => (i === idx ? { ...item, name: v } : item)));
                                }}
                                placeholder="Full name"
                            />
                        </div>
                        <div className="space-y-1">
                            <Label>Title</Label>
                            <Input
                                value={m.title}
                                onChange={(e) => {
                                    const v = e.target.value;
                                    setMembers((prev) => prev.map((item, i) => (i === idx ? { ...item, title: v } : item)));
                                }}
                                placeholder="e.g. Chairman"
                            />
                        </div>
                    </div>
                    <div className="space-y-1">
                        <Label>Bio</Label>
                        <textarea
                            value={m.bio}
                            onChange={(e) => {
                                const v = e.target.value;
                                setMembers((prev) => prev.map((item, i) => (i === idx ? { ...item, bio: v } : item)));
                            }}
                            rows={2}
                            className="flex min-h-[60px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                            placeholder="Short bio"
                        />
                    </div>
                    <div className="space-y-2">
                        <Label>Photo</Label>
                        {m.image && <img src={m.image.startsWith('http') || m.image.startsWith('/') ? m.image : `/storage/${m.image}`} alt="preview" className="h-32 w-32 object-cover rounded-xl border mx-auto" onError={(e) => ((e.target as HTMLImageElement).style.display = 'none')} />}
                        <Input
                            type="file"
                            accept="image/*"
                            onChange={(e) => {
                                const f = e.target.files?.[0];
                                if (f) {
                                    setFiles((prev) => ({ ...prev, [idx]: f }));
                                    const url = URL.createObjectURL(f);
                                    setMembers((prev) => prev.map((item, i) => (i === idx ? { ...item, image: url } : item)));
                                }
                            }}
                        />
                        <Input
                            value={m.image}
                            onChange={(e) => {
                                const v = e.target.value;
                                setMembers((prev) => prev.map((item, i) => (i === idx ? { ...item, image: v } : item)));
                            }}
                            placeholder="or image URL / path"
                        />
                    </div>
                </div>
            ))}
        </div>
    );

    return (
        <div className="space-y-6">
            <Card>
                <CardHeader><CardTitle>Hero</CardTitle><CardDescription>Top of Leadership page</CardDescription></CardHeader>
                <CardContent className="space-y-4">
                    <div className="space-y-2"><Label>Title</Label><Input value={heroForm.title} onChange={(e) => setHeroForm({ ...heroForm, title: e.target.value })} /></div>
                    <div className="space-y-2"><Label>Subtitle</Label><textarea value={heroForm.subtitle} onChange={(e) => setHeroForm({ ...heroForm, subtitle: e.target.value })} rows={2} className="flex min-h-[60px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm" /></div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader><CardTitle>Managing Director</CardTitle><CardDescription>Featured leader</CardDescription></CardHeader>
                <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2"><Label>Name</Label><Input value={mdForm.name} onChange={(e) => setMdForm({ ...mdForm, name: e.target.value })} /></div>
                        <div className="space-y-2"><Label>Title</Label><Input value={mdForm.title} onChange={(e) => setMdForm({ ...mdForm, title: e.target.value })} /></div>
                    </div>
                    <div className="space-y-2"><Label>Bio</Label><textarea value={mdForm.bio} onChange={(e) => setMdForm({ ...mdForm, bio: e.target.value })} rows={3} className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm" /></div>
                    <div className="space-y-2">
                        <Label>Portrait</Label>
                        {mdForm.image && <img src={mdForm.image.startsWith('http') || mdForm.image.startsWith('/') ? mdForm.image : `/storage/${mdForm.image}`} alt="md" className="h-40 w-40 object-cover rounded-xl border mx-auto" />}
                        <Input type="file" accept="image/*" onChange={(e) => { const f = e.target.files?.[0]; if (f) { setMdFile(f); setMdForm({ ...mdForm, image: URL.createObjectURL(f) }); } }} />
                        <Input value={mdForm.image} onChange={(e) => setMdForm({ ...mdForm, image: e.target.value })} placeholder="or image URL" />
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader className="flex flex-row items-center justify-between"><div><CardTitle>Board of Directors</CardTitle><CardDescription>Chairman etc.</CardDescription></div><Button variant="outline" size="sm" onClick={() => setBoardMembers((prev) => [...prev, { name: '', title: '', bio: '', image: '' }])}><Plus className="h-4 w-4" /> Add</Button></CardHeader>
                <CardContent>{renderMemberList(boardMembers, setBoardMembers, boardFiles, setBoardFiles)}</CardContent>
            </Card>

            <Card>
                <CardHeader className="flex flex-row items-center justify-between"><div><CardTitle>Directors</CardTitle><CardDescription>Directors of Operations, Quality etc.</CardDescription></div><Button variant="outline" size="sm" onClick={() => setDirectorsMembers((prev) => [...prev, { name: '', title: '', bio: '', image: '' }])}><Plus className="h-4 w-4" /> Add</Button></CardHeader>
                <CardContent>{renderMemberList(directorsMembers, setDirectorsMembers, directorsFiles, setDirectorsFiles)}</CardContent>
            </Card>

            <Card>
                <CardHeader className="flex flex-row items-center justify-between"><div><CardTitle>Senior Management</CardTitle><CardDescription>Heads of departments</CardDescription></div><Button variant="outline" size="sm" onClick={() => setSeniorMembers((prev) => [...prev, { name: '', title: '', bio: '', image: '' }])}><Plus className="h-4 w-4" /> Add</Button></CardHeader>
                <CardContent>{renderMemberList(seniorMembers, setSeniorMembers, seniorFiles, setSeniorFiles)}</CardContent>
            </Card>

            <Button onClick={handleSave} className="w-full"><Save className="h-4 w-4" /> Save Leadership</Button>
        </div>
    );
}
