import { useMemo, useState } from 'react';
import { router } from '@inertiajs/react';
import { Save } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import type { Page, PageSection } from '@/types';

export function AboutEditor({ page }: { page: Page & { sections: PageSection[] } }) {
    const hero = useMemo(() => page.sections.find((s) => s.section_type === 'hero'), [page.sections]);
    const overview = useMemo(() => page.sections.find((s) => s.section_type === 'overview'), [page.sections]);
    const purpose = useMemo(() => page.sections.find((s) => s.section_type === 'purpose'), [page.sections]);
    const vm = useMemo(() => page.sections.find((s) => s.section_type === 'vision_mission'), [page.sections]);
    const md = useMemo(() => page.sections.find((s) => s.section_type === 'md_message'), [page.sections]);

    const [heroForm, setHeroForm] = useState({ title: hero?.title || '', subtitle: hero?.subtitle || '' });
    const [overviewForm, setOverviewForm] = useState({ title: overview?.title || '', subtitle: overview?.subtitle || '', content: overview?.content || '', image_path: overview?.image_path || '' });
    const [purposeForm, setPurposeForm] = useState({
        purpose_title: (purpose?.meta as any)?.purpose_title || 'Our Purpose',
        purpose_desc: (purpose?.meta as any)?.purpose_desc || '',
        ktecg_title: (purpose?.meta as any)?.ktecg_title || 'KTECG Group Legacy',
        ktecg_desc: (purpose?.meta as any)?.ktecg_desc || '',
    });
    const [vmForm, setVmForm] = useState({
        vision: (vm?.meta as any)?.vision || '',
        mission: Array.isArray((vm?.meta as any)?.mission) ? ((vm?.meta as any)?.mission as string[]).join('\n') : '',
    });
    const [mdForm, setMdForm] = useState({ title: md?.title || '', subtitle: md?.subtitle || '', content: md?.content || '', image_path: md?.image_path || '' });

    const [overviewFile, setOverviewFile] = useState<File | null>(null);
    const [overviewPreview, setOverviewPreview] = useState<string | null>(overview?.image_path ? `/storage/${overview.image_path}` : null);
    const [mdFile, setMdFile] = useState<File | null>(null);
    const [mdPreview, setMdPreview] = useState<string | null>(md?.image_path ? `/storage/${md.image_path}` : null);

    const handleSave = async () => {
        let overviewPath = overviewForm.image_path || null;
        if (overviewFile) {
            const fd = new FormData(); fd.append('file', overviewFile);
            const csrf = (document.querySelector('meta[name="csrf-token"]') as HTMLMetaElement)?.content || '';
            const res = await fetch('/admin/upload', { method: 'POST', headers: { 'X-CSRF-TOKEN': csrf } as any, body: fd });
            const j = await res.json(); if (j.path) overviewPath = j.path;
        }
        let mdPath = mdForm.image_path || null;
        if (mdFile) {
            const fd = new FormData(); fd.append('file', mdFile);
            const csrf = (document.querySelector('meta[name="csrf-token"]') as HTMLMetaElement)?.content || '';
            const res = await fetch('/admin/upload', { method: 'POST', headers: { 'X-CSRF-TOKEN': csrf } as any, body: fd });
            const j = await res.json(); if (j.path) mdPath = j.path;
        }
        const payload: any = { sections: [] };
        payload.sections.push({ id: hero?.id, section_type: 'hero', title: heroForm.title, subtitle: heroForm.subtitle, sort_order: 1, is_active: true });
        payload.sections.push({ id: overview?.id, section_type: 'overview', title: overviewForm.title, subtitle: overviewForm.subtitle, content: overviewForm.content, image_path: overviewPath, sort_order: 2, is_active: true });
        payload.sections.push({ id: purpose?.id, section_type: 'purpose', meta: { purpose_title: purposeForm.purpose_title, purpose_desc: purposeForm.purpose_desc, ktecg_title: purposeForm.ktecg_title, ktecg_desc: purposeForm.ktecg_desc }, sort_order: 3, is_active: true });
        payload.sections.push({ id: vm?.id, section_type: 'vision_mission', meta: { vision: vmForm.vision, mission: vmForm.mission.split('\n').filter(Boolean) }, sort_order: 4, is_active: true });
        payload.sections.push({ id: md?.id, section_type: 'md_message', title: mdForm.title, subtitle: mdForm.subtitle, content: mdForm.content, image_path: mdPath, sort_order: 6, is_active: true });
        router.put(`/admin/pages/${page.id}/sections`, payload, { preserveScroll: true });
    };

    return (
        <div className="space-y-6">
            <Card><CardHeader><CardTitle>Hero</CardTitle><CardDescription>Top hero of About</CardDescription></CardHeader>
                <CardContent className="space-y-4">
                    <Input value={heroForm.title} onChange={(e) => setHeroForm({ ...heroForm, title: e.target.value })} placeholder="Title" />
                    <textarea value={heroForm.subtitle} onChange={(e) => setHeroForm({ ...heroForm, subtitle: e.target.value })} rows={2} className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm" />
                </CardContent>
            </Card>

            <Card><CardHeader><CardTitle>Company Overview — Image</CardTitle></CardHeader>
                <CardContent className="space-y-4">
                    <Input value={overviewForm.title} onChange={(e) => setOverviewForm({ ...overviewForm, title: e.target.value })} />
                    {overviewPreview && <img src={overviewPreview} className="h-48 w-full object-cover rounded-xl border" alt="overview" />}
                    <Input type="file" accept="image/*" onChange={(e) => { const f = e.target.files?.[0]; if (f) { setOverviewFile(f); setOverviewPreview(URL.createObjectURL(f)); } }} />
                    <Input value={overviewForm.image_path} onChange={(e) => setOverviewForm({ ...overviewForm, image_path: e.target.value })} placeholder="or path" />
                    <textarea value={overviewForm.content} onChange={(e) => setOverviewForm({ ...overviewForm, content: e.target.value })} rows={4} className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm" />
                </CardContent>
            </Card>

            <Card><CardHeader><CardTitle>Purpose & KTECG</CardTitle></CardHeader>
                <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                        <Input value={purposeForm.purpose_title} onChange={(e) => setPurposeForm({ ...purposeForm, purpose_title: e.target.value })} />
                        <Input value={purposeForm.ktecg_title} onChange={(e) => setPurposeForm({ ...purposeForm, ktecg_title: e.target.value })} />
                    </div>
                    <textarea value={purposeForm.purpose_desc} onChange={(e) => setPurposeForm({ ...purposeForm, purpose_desc: e.target.value })} rows={2} className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm" />
                    <textarea value={purposeForm.ktecg_desc} onChange={(e) => setPurposeForm({ ...purposeForm, ktecg_desc: e.target.value })} rows={2} className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm" />
                </CardContent>
            </Card>

            <Card><CardHeader><CardTitle>Vision & Mission</CardTitle></CardHeader>
                <CardContent className="space-y-4">
                    <Input value={vmForm.vision} onChange={(e) => setVmForm({ ...vmForm, vision: e.target.value })} placeholder="Vision" />
                    <textarea value={vmForm.mission} onChange={(e) => setVmForm({ ...vmForm, mission: e.target.value })} rows={4} className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm" placeholder="Mission lines one per line" />
                </CardContent>
            </Card>

            <Card><CardHeader><CardTitle>MD Message — Portrait</CardTitle></CardHeader>
                <CardContent className="space-y-4">
                    <Input value={mdForm.title} onChange={(e) => setMdForm({ ...mdForm, title: e.target.value })} />
                    <textarea value={mdForm.content} onChange={(e) => setMdForm({ ...mdForm, content: e.target.value })} rows={4} className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm" />
                    {mdPreview && <img src={mdPreview} className="h-64 w-48 object-cover rounded-xl border mx-auto" alt="md" />}
                    <Input type="file" accept="image/*" onChange={(e) => { const f = e.target.files?.[0]; if (f) { setMdFile(f); setMdPreview(URL.createObjectURL(f)); } }} />
                    <Input value={mdForm.image_path} onChange={(e) => setMdForm({ ...mdForm, image_path: e.target.value })} placeholder="or path" />
                </CardContent>
            </Card>

            <Button onClick={handleSave} className="w-full"><Save className="h-4 w-4" /> Save All About Sections</Button>
        </div>
    );
}
