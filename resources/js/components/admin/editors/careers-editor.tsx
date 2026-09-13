import { useMemo, useState } from 'react';
import { router } from '@inertiajs/react';
import { toast } from 'sonner';
import { Save, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import type { Page, PageSection } from '@/types';

export function CareersEditor({ page }: { page: Page & { sections: PageSection[] } }) {
    const hero = useMemo(() => page.sections.find((s) => s.section_type === 'hero'), [page.sections]);
    const whyWork = useMemo(() => page.sections.find((s) => ['why_work', 'why_novita', 'benefits'].includes(s.section_type)), [page.sections]);
    const culture = useMemo(() => page.sections.find((s) => ['culture', 'company_culture'].includes(s.section_type)), [page.sections]);
    const positions = useMemo(() => page.sections.find((s) => ['positions', 'available_positions', 'open_positions'].includes(s.section_type)), [page.sections]);
    const training = useMemo(() => page.sections.find((s) => ['training', 'training_development', 'growth'].includes(s.section_type)), [page.sections]);
    const cvForm = useMemo(() => page.sections.find((s) => ['cv_form', 'application', 'send_cv'].includes(s.section_type)), [page.sections]);
    const cta = useMemo(() => page.sections.find((s) => s.section_type === 'cta'), [page.sections]);

    const [heroForm, setHeroForm] = useState({
        title: hero?.title || 'Join Our Team',
        subtitle: hero?.subtitle || '',
        badge: (hero?.meta as any)?.badge || (hero?.meta as any)?.label || 'CAREERS',
    });
    const [whyForm, setWhyForm] = useState({
        badge: (whyWork?.meta as any)?.badge || whyWork?.subtitle || 'WHY NOVITA',
        title: whyWork?.title || 'Why Work With NOVITA',
        content: whyWork?.content || '',
    });
    const [cultureForm, setCultureForm] = useState({
        badge: (culture?.meta as any)?.badge || culture?.subtitle || 'OUR CULTURE',
        title: culture?.title || 'Company Culture',
        content: culture?.content || '',
    });
    const [positionsForm, setPositionsForm] = useState({
        badge: (positions?.meta as any)?.badge || positions?.subtitle || 'OPPORTUNITIES',
        title: positions?.title || 'Available Positions',
        content: positions?.content || '',
        note: (positions?.meta as any)?.note || '',
        cta: (positions?.meta as any)?.cta || '',
    });
    const [trainingForm, setTrainingForm] = useState({
        badge: (training?.meta as any)?.badge || training?.subtitle || 'GROWTH',
        title: training?.title || 'Training & Development',
        content: training?.content || '',
    });
    const [cvFormInfo, setCvFormInfo] = useState({
        badge: (cvForm?.meta as any)?.badge || cvForm?.subtitle || 'SUBMIT YOUR CV',
        title: cvForm?.title || 'Send Your CV',
        content: cvForm?.content || '',
    });
    const [ctaForm, setCtaForm] = useState({
        title: cta?.title || 'Ready to Make a Difference?',
        subtitle: cta?.subtitle || '',
        link_text: cta?.link_text || 'Send Your CV',
        link_url: cta?.link_url || 'mailto:careers@novita-myanmar.com.mm',
    });

    const handleSave = () => {
        const sections = [
            { id: hero?.id, section_type: 'hero', title: heroForm.title, subtitle: heroForm.subtitle, meta: { badge: heroForm.badge } },
            { id: whyWork?.id, section_type: whyWork?.section_type || 'why_work', title: whyForm.title, subtitle: whyForm.badge, content: whyForm.content, meta: { badge: whyForm.badge } },
            { id: culture?.id, section_type: culture?.section_type || 'culture', title: cultureForm.title, subtitle: cultureForm.badge, content: cultureForm.content, meta: { badge: cultureForm.badge } },
            { id: positions?.id, section_type: positions?.section_type || 'positions', title: positionsForm.title, subtitle: positionsForm.badge, content: positionsForm.content, meta: { badge: positionsForm.badge, note: positionsForm.note, cta: positionsForm.cta } },
            { id: training?.id, section_type: training?.section_type || 'training', title: trainingForm.title, subtitle: trainingForm.badge, content: trainingForm.content, meta: { badge: trainingForm.badge } },
            { id: cvForm?.id, section_type: cvForm?.section_type || 'cv_form', title: cvFormInfo.title, subtitle: cvFormInfo.badge, content: cvFormInfo.content, meta: { badge: cvFormInfo.badge } },
            { id: cta?.id, section_type: 'cta', title: ctaForm.title, subtitle: ctaForm.subtitle, link_text: ctaForm.link_text, link_url: ctaForm.link_url },
        ].filter((s) => s.id);

        router.put(`/admin/pages/${page.id}/sections`, { sections } as any, {
            preserveScroll: true,
            onSuccess: () => toast.success('Careers sections saved'),
            onError: () => toast.error('Failed to save careers sections'),
        });
    };

    const SectionHeader = ({ title, type, badge }: { title: string; type: string; badge?: string }) => (
        <div className="flex items-center justify-between">
            <div>
                <CardTitle className="text-base">{title}</CardTitle>
                <CardDescription className="text-xs">{type} • {badge || '—'}</CardDescription>
            </div>
            <Button variant="ghost" size="sm" asChild className="h-7 text-xs">
                <a href="/careers" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-3 w-3" /> View
                </a>
            </Button>
        </div>
    );

    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-lg font-bold">Careers Sections</h2>
                    <p className="text-sm text-muted-foreground">Manage each section of the Careers page.</p>
                </div>
                <div className="flex gap-2">
                    <Button variant="outline" size="sm" asChild>
                        <a href="/careers" target="_blank" rel="noopener noreferrer"><ExternalLink className="h-4 w-4" /> View Public</a>
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

            {/* Why Work */}
            <Card>
                <CardHeader><SectionHeader title="Why Work With NOVITA" type={whyWork?.section_type || 'why_work'} badge={whyForm.badge} /></CardHeader>
                <CardContent className="space-y-3">
                    <div><Label>Badge Label</Label><Input value={whyForm.badge} onChange={(e) => setWhyForm({ ...whyForm, badge: e.target.value })} /></div>
                    <div><Label>Title</Label><Input value={whyForm.title} onChange={(e) => setWhyForm({ ...whyForm, title: e.target.value })} /></div>
                    <div><Label>Content</Label><textarea value={whyForm.content} onChange={(e) => setWhyForm({ ...whyForm, content: e.target.value })} rows={2} className="flex min-h-[60px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm" /></div>
                </CardContent>
            </Card>

            {/* Culture */}
            <Card>
                <CardHeader><SectionHeader title="Company Culture" type={culture?.section_type || 'culture'} badge={cultureForm.badge} /></CardHeader>
                <CardContent className="space-y-3">
                    <div><Label>Badge Label</Label><Input value={cultureForm.badge} onChange={(e) => setCultureForm({ ...cultureForm, badge: e.target.value })} /></div>
                    <div><Label>Title</Label><Input value={cultureForm.title} onChange={(e) => setCultureForm({ ...cultureForm, title: e.target.value })} /></div>
                    <div><Label>Content</Label><textarea value={cultureForm.content} onChange={(e) => setCultureForm({ ...cultureForm, content: e.target.value })} rows={2} className="flex min-h-[60px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm" /></div>
                </CardContent>
            </Card>

            {/* Positions */}
            <Card>
                <CardHeader><SectionHeader title="Available Positions" type={positions?.section_type || 'positions'} badge={positionsForm.badge} /></CardHeader>
                <CardContent className="space-y-3">
                    <div><Label>Badge Label</Label><Input value={positionsForm.badge} onChange={(e) => setPositionsForm({ ...positionsForm, badge: e.target.value })} /></div>
                    <div><Label>Title</Label><Input value={positionsForm.title} onChange={(e) => setPositionsForm({ ...positionsForm, title: e.target.value })} /></div>
                    <div><Label>Content</Label><textarea value={positionsForm.content} onChange={(e) => setPositionsForm({ ...positionsForm, content: e.target.value })} rows={2} className="flex min-h-[60px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm" /></div>
                    <div><Label>Note</Label><Input value={positionsForm.note} onChange={(e) => setPositionsForm({ ...positionsForm, note: e.target.value })} /></div>
                    <div><Label>CTA Text</Label><Input value={positionsForm.cta} onChange={(e) => setPositionsForm({ ...positionsForm, cta: e.target.value })} /></div>
                </CardContent>
            </Card>

            {/* Training */}
            <Card>
                <CardHeader><SectionHeader title="Training & Development" type={training?.section_type || 'training'} badge={trainingForm.badge} /></CardHeader>
                <CardContent className="space-y-3">
                    <div><Label>Badge Label</Label><Input value={trainingForm.badge} onChange={(e) => setTrainingForm({ ...trainingForm, badge: e.target.value })} /></div>
                    <div><Label>Title</Label><Input value={trainingForm.title} onChange={(e) => setTrainingForm({ ...trainingForm, title: e.target.value })} /></div>
                    <div><Label>Content</Label><textarea value={trainingForm.content} onChange={(e) => setTrainingForm({ ...trainingForm, content: e.target.value })} rows={2} className="flex min-h-[60px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm" /></div>
                </CardContent>
            </Card>

            {/* CV Form Info */}
            <Card>
                <CardHeader><SectionHeader title="CV Submission Info" type={cvForm?.section_type || 'cv_form'} badge={cvFormInfo.badge} /></CardHeader>
                <CardContent className="space-y-3">
                    <div><Label>Badge Label</Label><Input value={cvFormInfo.badge} onChange={(e) => setCvFormInfo({ ...cvFormInfo, badge: e.target.value })} /></div>
                    <div><Label>Title</Label><Input value={cvFormInfo.title} onChange={(e) => setCvFormInfo({ ...cvFormInfo, title: e.target.value })} /></div>
                    <div><Label>Content</Label><textarea value={cvFormInfo.content} onChange={(e) => setCvFormInfo({ ...cvFormInfo, content: e.target.value })} rows={2} className="flex min-h-[60px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm" /></div>
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
