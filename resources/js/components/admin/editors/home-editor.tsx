import { useMemo, useState } from 'react';
import { router } from '@inertiajs/react';
import { Save, Sparkles, Eye, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import type { Page, PageSection } from '@/types';

export function HomeEditor({ page }: { page: Page & { sections: PageSection[] } }) {
    const hero = useMemo(() => page.sections.find((s) => s.section_type === 'hero'), [page.sections]);
    const vmSec = useMemo(() => page.sections.find((s) => s.section_type === 'vision_mission'), [page.sections]);
    const qualitySec = useMemo(() => page.sections.find((s) => s.section_type === 'quality'), [page.sections]);
    const facilitySec = useMemo(() => page.sections.find((s) => s.section_type === 'facility'), [page.sections]);
    const whySec = useMemo(() => page.sections.find((s) => s.section_type === 'why' || s.section_type === 'features'), [page.sections]);
    const statsSec = useMemo(() => page.sections.find((s) => s.section_type === 'stats'), [page.sections]);
    const ctaSec = useMemo(() => page.sections.find((s) => s.section_type === 'cta'), [page.sections]);

    const [heroForm, setHeroForm] = useState({
        title: hero?.title || '',
        subtitle: hero?.subtitle || '',
        slogan: (hero?.meta as any)?.slogan || '',
        badge: (hero?.meta as any)?.badge || '',
        image_path: hero?.image_path || '',
        link_text: hero?.link_text || '',
        link_url: hero?.link_url || '',
        cta_secondary_text: (hero?.meta as any)?.cta_secondary_text || '',
        cta_secondary_url: (hero?.meta as any)?.cta_secondary_url || '',
    });
    const [heroImageFile, setHeroImageFile] = useState<File | null>(null);
    const [heroImagePreview, setHeroImagePreview] = useState<string | null>(
        hero?.image_path ? (hero.image_path.startsWith('http') || hero.image_path.startsWith('/') ? hero.image_path : `/storage/${hero.image_path}`) : null,
    );
    const [vmForm, setVmForm] = useState({
        vision_title: (vmSec?.meta as any)?.vision_title || '',
        vision_desc: (vmSec?.meta as any)?.vision_desc || '',
        mission_title: (vmSec?.meta as any)?.mission_title || '',
        mission_desc: (vmSec?.meta as any)?.mission_desc || '',
    });
    const [qualityForm, setQualityForm] = useState({
        title: qualitySec?.title || '',
        subtitle: qualitySec?.subtitle || '',
        content: qualitySec?.content || '',
        features: ((qualitySec?.meta as any)?.features || []).join('\n'),
        image_path: qualitySec?.image_path || '',
    });
    const [qualityImageFile, setQualityImageFile] = useState<File | null>(null);
    const [qualityImagePreview, setQualityImagePreview] = useState<string | null>(
        qualitySec?.image_path ? (qualitySec.image_path.startsWith('http') || qualitySec.image_path.startsWith('/') ? qualitySec.image_path : `/storage/${qualitySec.image_path}`) : null,
    );
    const [facilityForm, setFacilityForm] = useState({
        title: facilitySec?.title || '',
        subtitle: facilitySec?.subtitle || '',
        content: facilitySec?.content || '',
    });
    const [whyForm, setWhyForm] = useState({
        title: whySec?.title || '',
        subtitle: whySec?.subtitle || '',
    });
    const [statsForm, setStatsForm] = useState({
        stats: JSON.stringify((statsSec?.meta as any)?.stats || [], null, 2),
    });
    const [ctaForm, setCtaForm] = useState({
        title: ctaSec?.title || '',
        subtitle: ctaSec?.subtitle || '',
        link_text: ctaSec?.link_text || '',
        link_url: ctaSec?.link_url || '',
    });

    const handleSaveAll = async () => {
        let heroImagePath = heroForm.image_path || null;
        if (heroImageFile) {
            const fd = new FormData(); fd.append('file', heroImageFile);
            const csrf = (document.querySelector('meta[name="csrf-token"]') as HTMLMetaElement)?.content || '';
            const res = await fetch('/admin/upload', { method: 'POST', headers: { 'X-CSRF-TOKEN': csrf } as any, body: fd });
            const j = await res.json(); if (j.path) heroImagePath = j.path;
        }
        let qualityImagePath = (qualityForm as any).image_path || null;
        if (qualityImageFile) {
            const fd = new FormData(); fd.append('file', qualityImageFile);
            const csrf = (document.querySelector('meta[name="csrf-token"]') as HTMLMetaElement)?.content || '';
            const res = await fetch('/admin/upload', { method: 'POST', headers: { 'X-CSRF-TOKEN': csrf } as any, body: fd });
            const j = await res.json(); if (j.path) qualityImagePath = j.path;
        }
        const payload: any = { sections: [] };
        payload.sections.push({ id: hero?.id, section_type: 'hero', title: heroForm.title, subtitle: heroForm.subtitle, image_path: heroImagePath, link_url: heroForm.link_url, link_text: heroForm.link_text, meta: { slogan: heroForm.slogan, badge: heroForm.badge, cta_secondary_text: heroForm.cta_secondary_text, cta_secondary_url: heroForm.cta_secondary_url }, sort_order: 1, is_active: true });
        payload.sections.push({ id: vmSec?.id, section_type: 'vision_mission', meta: { vision_title: vmForm.vision_title, vision_desc: vmForm.vision_desc, mission_title: vmForm.mission_title, mission_desc: vmForm.mission_desc }, sort_order: 2, is_active: true });
        payload.sections.push({ id: qualitySec?.id, section_type: 'quality', title: qualityForm.title, subtitle: qualityForm.subtitle, content: qualityForm.content, image_path: qualityImagePath, meta: { features: qualityForm.features.split('\n').filter(Boolean) }, sort_order: 3, is_active: true });
        payload.sections.push({ id: facilitySec?.id, section_type: 'facility', title: facilityForm.title, subtitle: facilityForm.subtitle, content: facilityForm.content, meta: (facilitySec?.meta as any), sort_order: 4, is_active: true });
        payload.sections.push({ id: whySec?.id, section_type: whySec?.section_type || 'why', title: whyForm.title, subtitle: whyForm.subtitle, meta: (whySec?.meta as any), sort_order: 5, is_active: true });
        try { payload.sections.push({ id: statsSec?.id, section_type: 'stats', meta: { stats: JSON.parse(statsForm.stats) }, sort_order: 6, is_active: true }); } catch {}
        payload.sections.push({ id: ctaSec?.id, section_type: 'cta', title: ctaForm.title, subtitle: ctaForm.subtitle, link_text: ctaForm.link_text, link_url: ctaForm.link_url, meta: (ctaSec?.meta as any), sort_order: 7, is_active: true });
        router.put(`/admin/pages/${page.id}/sections`, payload, { preserveScroll: true });
    };

    return (
        <div className="space-y-6">
            <Card>
                <CardHeader className="bg-muted/30 border-b"><CardTitle className="flex items-center gap-2"><Sparkles className="h-5 w-5 text-novita" /> Hero</CardTitle><CardDescription>Top hero of Home</CardDescription></CardHeader>
                <CardContent className="p-6 space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2"><Label>Badge</Label><Input value={heroForm.badge} onChange={(e) => setHeroForm({ ...heroForm, badge: e.target.value })} /></div>
                        <div className="space-y-2"><Label>Slogan</Label><Input value={heroForm.slogan} onChange={(e) => setHeroForm({ ...heroForm, slogan: e.target.value })} /></div>
                    </div>
                    <div className="space-y-2"><Label>Title</Label><Input value={heroForm.title} onChange={(e) => setHeroForm({ ...heroForm, title: e.target.value })} /></div>
                    <div className="space-y-2"><Label>Subtitle</Label><textarea value={heroForm.subtitle} onChange={(e) => setHeroForm({ ...heroForm, subtitle: e.target.value })} rows={3} className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm" /></div>
                    <div className="space-y-2">
                        <Label>Hero Image</Label>
                        {heroImagePreview && <img src={heroImagePreview} className="h-40 w-full object-cover rounded-xl border" alt="preview" />}
                        <Input type="file" accept="image/*" onChange={(e) => { const f = e.target.files?.[0]; if (f) { setHeroImageFile(f); setHeroImagePreview(URL.createObjectURL(f)); } }} />
                        <Input value={heroForm.image_path} onChange={(e) => setHeroForm({ ...heroForm, image_path: e.target.value })} placeholder="or path" />
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                        <Input value={heroForm.link_text} onChange={(e) => setHeroForm({ ...heroForm, link_text: e.target.value })} placeholder="Primary CTA text" />
                        <Input value={heroForm.link_url} onChange={(e) => setHeroForm({ ...heroForm, link_url: e.target.value })} placeholder="Primary URL" />
                        <Input value={heroForm.cta_secondary_text} onChange={(e) => setHeroForm({ ...heroForm, cta_secondary_text: e.target.value })} placeholder="Secondary text" />
                        <Input value={heroForm.cta_secondary_url} onChange={(e) => setHeroForm({ ...heroForm, cta_secondary_url: e.target.value })} placeholder="Secondary URL" />
                    </div>
                </CardContent>
            </Card>

            <Card><CardHeader><CardTitle>Vision & Mission</CardTitle></CardHeader><CardContent className="p-6 space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                    <Input value={vmForm.vision_title} onChange={(e) => setVmForm({ ...vmForm, vision_title: e.target.value })} placeholder="Vision title" />
                    <Input value={vmForm.mission_title} onChange={(e) => setVmForm({ ...vmForm, mission_title: e.target.value })} placeholder="Mission title" />
                </div>
                <textarea value={vmForm.vision_desc} onChange={(e) => setVmForm({ ...vmForm, vision_desc: e.target.value })} rows={2} className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm" placeholder="Vision desc" />
                <textarea value={vmForm.mission_desc} onChange={(e) => setVmForm({ ...vmForm, mission_desc: e.target.value })} rows={2} className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm" placeholder="Mission desc" />
            </CardContent></Card>

            <Card><CardHeader><CardTitle>Quality</CardTitle></CardHeader><CardContent className="p-6 space-y-4">
                <Input value={qualityForm.title} onChange={(e) => setQualityForm({ ...qualityForm, title: e.target.value })} />
                <Input value={qualityForm.subtitle} onChange={(e) => setQualityForm({ ...qualityForm, subtitle: e.target.value })} />
                <textarea value={qualityForm.content} onChange={(e) => setQualityForm({ ...qualityForm, content: e.target.value })} rows={2} className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm" />
                {qualityImagePreview && <img src={qualityImagePreview} className="h-40 w-full object-cover rounded-xl border" alt="quality" />}
                <Input type="file" accept="image/*" onChange={(e) => { const f = e.target.files?.[0]; if (f) { setQualityImageFile(f); setQualityImagePreview(URL.createObjectURL(f)); } }} />
                <textarea value={qualityForm.features} onChange={(e) => setQualityForm({ ...qualityForm, features: e.target.value })} rows={3} className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm" placeholder="Features one per line" />
            </CardContent></Card>

            <Card><CardHeader><CardTitle>Facility</CardTitle></CardHeader><CardContent className="p-6 space-y-4">
                <Input value={facilityForm.title} onChange={(e) => setFacilityForm({ ...facilityForm, title: e.target.value })} />
                <Input value={facilityForm.subtitle} onChange={(e) => setFacilityForm({ ...facilityForm, subtitle: e.target.value })} />
                <textarea value={facilityForm.content} onChange={(e) => setFacilityForm({ ...facilityForm, content: e.target.value })} rows={2} className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm" />
            </CardContent></Card>

            <Card><CardHeader><CardTitle>Why</CardTitle></CardHeader><CardContent className="p-6 space-y-4">
                <Input value={whyForm.title} onChange={(e) => setWhyForm({ ...whyForm, title: e.target.value })} />
                <Input value={whyForm.subtitle} onChange={(e) => setWhyForm({ ...whyForm, subtitle: e.target.value })} />
            </CardContent></Card>

            <Card><CardHeader><CardTitle>Stats (JSON)</CardTitle></CardHeader><CardContent><textarea value={statsForm.stats} onChange={(e) => setStatsForm({ stats: e.target.value })} rows={5} className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm font-mono" /></CardContent></Card>

            <Card><CardHeader><CardTitle>CTA</CardTitle></CardHeader><CardContent className="p-6 space-y-4">
                <Input value={ctaForm.title} onChange={(e) => setCtaForm({ ...ctaForm, title: e.target.value })} />
                <textarea value={ctaForm.subtitle} onChange={(e) => setCtaForm({ ...ctaForm, subtitle: e.target.value })} rows={2} className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm" />
                <div className="grid md:grid-cols-2 gap-4"><Input value={ctaForm.link_text} onChange={(e) => setCtaForm({ ...ctaForm, link_text: e.target.value })} /><Input value={ctaForm.link_url} onChange={(e) => setCtaForm({ ...ctaForm, link_url: e.target.value })} /></div>
            </CardContent></Card>

            <div className="flex gap-2">
                <Button onClick={handleSaveAll} className="flex-1"><Save className="h-4 w-4" /> Save All Home Sections</Button>
                <Button variant="outline" asChild><a href="/" target="_blank"><Eye className="h-4 w-4" /> Preview Home</a></Button>
            </div>
        </div>
    );
}
