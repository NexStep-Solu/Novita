import { useMemo, useState } from 'react';
import { router } from '@inertiajs/react';
import { toast } from 'sonner';
import { Save, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import type { Page, PageSection } from '@/types';

export function QualityEditor({ page }: { page: Page & { sections: PageSection[] } }) {
    const hero = useMemo(() => page.sections.find((s) => s.section_type === 'hero'), [page.sections]);
    const policy = useMemo(() => page.sections.find((s) => ['quality_policy', 'policy', 'content', 'quality', 'overview'].includes(s.section_type)), [page.sections]);
    const safety = useMemo(() => page.sections.find((s) => ['patient_safety', 'safety', 'patient', 'commitment'].includes(s.section_type)), [page.sections]);
    const gmp = useMemo(() => page.sections.find((s) => ['gmp', 'compliance', 'compliance_ready', 'certifications', 'features', 'gmp_standards'].includes(s.section_type)), [page.sections]);
    const systems = useMemo(() => page.sections.find((s) => ['quality_systems', 'systems', 'framework', 'comprehensive_quality'].includes(s.section_type)), [page.sections]);
    const ehs = useMemo(() => page.sections.find((s) => ['ehs', 'environment', 'environmental', 'health_safety'].includes(s.section_type)), [page.sections]);
    const cta = useMemo(() => page.sections.find((s) => s.section_type === 'cta'), [page.sections]);

    const [heroForm, setHeroForm] = useState({
        title: hero?.title || 'Quality Commitment',
        subtitle: hero?.subtitle || '',
        badge: (hero?.meta as any)?.badge || (hero?.meta as any)?.label || 'QUALITY',
    });
    const [policyForm, setPolicyForm] = useState({
        badge: (policy?.meta as any)?.badge || policy?.subtitle || 'QUALITY POLICY',
        title: policy?.title || 'Our Quality Policy',
        content: policy?.content || '',
        image_path: policy?.image_path || '',
    });
    const [safetyForm, setSafetyForm] = useState({
        title: safety?.title || 'Patient Safety Commitment',
        subtitle: safety?.subtitle || safety?.content || '',
    });
    const [gmpForm, setGmpForm] = useState({
        badge: (gmp?.meta as any)?.badge || gmp?.subtitle || 'COMPLIANCE READY',
        title: gmp?.title || 'International Quality Standards',
        content: gmp?.content || '',
        main_title: (gmp?.meta as any)?.main_title || 'Quality System Aligned',
        main_desc: (gmp?.meta as any)?.main_desc || '',
    });
    const [systemsForm, setSystemsForm] = useState({
        badge: (systems?.meta as any)?.badge || systems?.subtitle || 'QUALITY SYSTEMS',
        title: systems?.title || 'Comprehensive Quality Framework',
        content: systems?.content || '',
    });
    const [ehsForm, setEhsForm] = useState({
        badge: (ehs?.meta as any)?.badge || ehs?.subtitle || 'EHS COMMITMENT',
        title: ehs?.title || 'Environmental, Health & Safety',
        content: ehs?.content || '',
        image_path: ehs?.image_path || '',
    });
    const [ctaForm, setCtaForm] = useState({
        title: cta?.title || 'Quality You Can Trust',
        subtitle: cta?.subtitle || cta?.content || '',
        link_text: cta?.link_text || 'View Our Products',
        link_url: cta?.link_url || '/products',
    });

    const [policyFile, setPolicyFile] = useState<File | null>(null);
    const [policyPreview, setPolicyPreview] = useState<string | null>(policy?.image_path ? `/storage/${policy.image_path}` : null);
    const [ehsFile, setEhsFile] = useState<File | null>(null);
    const [ehsPreview, setEhsPreview] = useState<string | null>(ehs?.image_path ? `/storage/${ehs.image_path}` : null);

    const uploadFile = async (file: File): Promise<string | null> => {
        const fd = new FormData();
        fd.append('file', file);
        const csrf = (document.querySelector('meta[name="csrf-token"]') as HTMLMetaElement)?.content || '';
        const res = await fetch('/admin/upload', { method: 'POST', headers: { 'X-CSRF-TOKEN': csrf } as any, body: fd });
        const j = await res.json();
        return j.path || null;
    };

    const handleSave = async () => {
        let policyPath = policyForm.image_path || null;
        if (policyFile) policyPath = await uploadFile(policyFile);
        let ehsPath = ehsForm.image_path || null;
        if (ehsFile) ehsPath = await uploadFile(ehsFile);

        const sections = [
            { id: hero?.id, section_type: 'hero', title: heroForm.title, subtitle: heroForm.subtitle, meta: { badge: heroForm.badge } },
            { id: policy?.id, section_type: policy?.section_type || 'quality_policy', title: policyForm.title, subtitle: policyForm.badge, content: policyForm.content, image_path: policyPath, meta: { badge: policyForm.badge } },
            { id: safety?.id, section_type: safety?.section_type || 'patient_safety', title: safetyForm.title, subtitle: safetyForm.subtitle },
            { id: gmp?.id, section_type: gmp?.section_type || 'gmp', title: gmpForm.title, subtitle: gmpForm.badge, content: gmpForm.content, meta: { badge: gmpForm.badge, main_title: gmpForm.main_title, main_desc: gmpForm.main_desc } },
            { id: systems?.id, section_type: systems?.section_type || 'quality_systems', title: systemsForm.title, subtitle: systemsForm.badge, content: systemsForm.content, meta: { badge: systemsForm.badge } },
            { id: ehs?.id, section_type: ehs?.section_type || 'ehs', title: ehsForm.title, subtitle: ehsForm.badge, content: ehsForm.content, image_path: ehsPath, meta: { badge: ehsForm.badge } },
            { id: cta?.id, section_type: 'cta', title: ctaForm.title, subtitle: ctaForm.subtitle, link_text: ctaForm.link_text, link_url: ctaForm.link_url },
        ].filter((s) => s.id);

        router.put(`/admin/pages/${page.id}/sections`, { sections } as any, {
            preserveScroll: true,
            onSuccess: () => toast.success('Quality sections saved'),
            onError: () => toast.error('Failed to save quality sections'),
        });
    };

    const SectionHeader = ({ title, type, badge }: { title: string; type: string; badge?: string }) => (
        <div className="flex items-center justify-between">
            <div>
                <CardTitle className="text-base">{title}</CardTitle>
                <CardDescription className="text-xs">{type} • {badge || '—'}</CardDescription>
            </div>
            <Button variant="ghost" size="sm" asChild className="h-7 text-xs">
                <a href="/quality" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-3 w-3" /> View
                </a>
            </Button>
        </div>
    );

    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-lg font-bold">Quality Sections</h2>
                    <p className="text-sm text-muted-foreground">Manage each section of the Quality page.</p>
                </div>
                <div className="flex gap-2">
                    <Button variant="outline" size="sm" asChild>
                        <a href="/quality" target="_blank" rel="noopener noreferrer"><ExternalLink className="h-4 w-4" /> View Public</a>
                    </Button>
                    <Button size="sm" onClick={handleSave}><Save className="h-4 w-4" /> Save All</Button>
                </div>
            </div>

            {/* Hero */}
            <Card>
                <CardHeader><SectionHeader title="Hero" type="hero" badge={heroForm.badge} /></CardHeader>
                <CardContent className="space-y-3">
                    <div><Label>Badge Label</Label><Input value={heroForm.badge} onChange={(e) => setHeroForm({ ...heroForm, badge: e.target.value })} /></div>
                    <div><Label>Title</Label><Input value={heroForm.title} onChange={(e) => setHeroForm({ ...heroForm, title: e.target.value })} /></div>
                    <div><Label>Subtitle</Label><textarea value={heroForm.subtitle} onChange={(e) => setHeroForm({ ...heroForm, subtitle: e.target.value })} rows={2} className="flex min-h-[60px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm" /></div>
                </CardContent>
            </Card>

            {/* Quality Policy */}
            <Card>
                <CardHeader><SectionHeader title="Quality Policy" type={policy?.section_type || 'quality_policy'} badge={policyForm.badge} /></CardHeader>
                <CardContent className="space-y-3">
                    <div><Label>Badge Label</Label><Input value={policyForm.badge} onChange={(e) => setPolicyForm({ ...policyForm, badge: e.target.value })} /></div>
                    <div><Label>Title</Label><Input value={policyForm.title} onChange={(e) => setPolicyForm({ ...policyForm, title: e.target.value })} /></div>
                    <div><Label>Content (paragraphs separated by blank line)</Label><textarea value={policyForm.content} onChange={(e) => setPolicyForm({ ...policyForm, content: e.target.value })} rows={4} className="flex min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm" /></div>
                    <div>
                        <Label>Image</Label>
                        <div className="flex items-center gap-3">
                            <Input type="file" accept="image/*" onChange={(e) => { const f = e.target.files?.[0]; if (f) { setPolicyFile(f); setPolicyPreview(URL.createObjectURL(f)); } }} className="max-w-xs" />
                            {policyPreview && <img src={policyPreview} alt="Policy" className="h-16 w-16 rounded-lg object-cover border" />}
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Patient Safety */}
            <Card>
                <CardHeader><SectionHeader title="Patient Safety" type={safety?.section_type || 'patient_safety'} /></CardHeader>
                <CardContent className="space-y-3">
                    <div><Label>Title</Label><Input value={safetyForm.title} onChange={(e) => setSafetyForm({ ...safetyForm, title: e.target.value })} /></div>
                    <div><Label>Subtitle / Description</Label><textarea value={safetyForm.subtitle} onChange={(e) => setSafetyForm({ ...safetyForm, subtitle: e.target.value })} rows={2} className="flex min-h-[60px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm" /></div>
                </CardContent>
            </Card>

            {/* GMP / Compliance */}
            <Card>
                <CardHeader><SectionHeader title="Compliance Ready / GMP" type={gmp?.section_type || 'gmp'} badge={gmpForm.badge} /></CardHeader>
                <CardContent className="space-y-3">
                    <div><Label>Badge Label</Label><Input value={gmpForm.badge} onChange={(e) => setGmpForm({ ...gmpForm, badge: e.target.value })} /></div>
                    <div><Label>Title</Label><Input value={gmpForm.title} onChange={(e) => setGmpForm({ ...gmpForm, title: e.target.value })} /></div>
                    <div><Label>Content</Label><textarea value={gmpForm.content} onChange={(e) => setGmpForm({ ...gmpForm, content: e.target.value })} rows={3} className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm" /></div>
                    <div className="grid grid-cols-2 gap-3">
                        <div><Label>Main Card Title</Label><Input value={gmpForm.main_title} onChange={(e) => setGmpForm({ ...gmpForm, main_title: e.target.value })} /></div>
                        <div><Label>Main Card Description</Label><Input value={gmpForm.main_desc} onChange={(e) => setGmpForm({ ...gmpForm, main_desc: e.target.value })} /></div>
                    </div>
                </CardContent>
            </Card>

            {/* Quality Systems */}
            <Card>
                <CardHeader><SectionHeader title="Quality Systems" type={systems?.section_type || 'quality_systems'} badge={systemsForm.badge} /></CardHeader>
                <CardContent className="space-y-3">
                    <div><Label>Badge Label</Label><Input value={systemsForm.badge} onChange={(e) => setSystemsForm({ ...systemsForm, badge: e.target.value })} /></div>
                    <div><Label>Title</Label><Input value={systemsForm.title} onChange={(e) => setSystemsForm({ ...systemsForm, title: e.target.value })} /></div>
                    <div><Label>Content</Label><textarea value={systemsForm.content} onChange={(e) => setSystemsForm({ ...systemsForm, content: e.target.value })} rows={2} className="flex min-h-[60px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm" /></div>
                </CardContent>
            </Card>

            {/* EHS */}
            <Card>
                <CardHeader><SectionHeader title="EHS Commitment" type={ehs?.section_type || 'ehs'} badge={ehsForm.badge} /></CardHeader>
                <CardContent className="space-y-3">
                    <div><Label>Badge Label</Label><Input value={ehsForm.badge} onChange={(e) => setEhsForm({ ...ehsForm, badge: e.target.value })} /></div>
                    <div><Label>Title</Label><Input value={ehsForm.title} onChange={(e) => setEhsForm({ ...ehsForm, title: e.target.value })} /></div>
                    <div><Label>Content</Label><textarea value={ehsForm.content} onChange={(e) => setEhsForm({ ...ehsForm, content: e.target.value })} rows={3} className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm" /></div>
                    <div>
                        <Label>Image</Label>
                        <div className="flex items-center gap-3">
                            <Input type="file" accept="image/*" onChange={(e) => { const f = e.target.files?.[0]; if (f) { setEhsFile(f); setEhsPreview(URL.createObjectURL(f)); } }} className="max-w-xs" />
                            {ehsPreview && <img src={ehsPreview} alt="EHS" className="h-16 w-16 rounded-lg object-cover border" />}
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* CTA */}
            <Card>
                <CardHeader><SectionHeader title="Call to Action" type="cta" /></CardHeader>
                <CardContent className="space-y-3">
                    <div><Label>Title</Label><Input value={ctaForm.title} onChange={(e) => setCtaForm({ ...ctaForm, title: e.target.value })} /></div>
                    <div><Label>Subtitle</Label><textarea value={ctaForm.subtitle} onChange={(e) => setCtaForm({ ...ctaForm, subtitle: e.target.value })} rows={2} className="flex min-h-[60px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm" /></div>
                    <div className="grid grid-cols-2 gap-3">
                        <div><Label>Button Text</Label><Input value={ctaForm.link_text} onChange={(e) => setCtaForm({ ...ctaForm, link_text: e.target.value })} /></div>
                        <div><Label>Button URL</Label><Input value={ctaForm.link_url} onChange={(e) => setCtaForm({ ...ctaForm, link_url: e.target.value })} /></div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
