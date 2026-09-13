import { useMemo, useState } from 'react';
import { router } from '@inertiajs/react';
import { toast } from 'sonner';
import { Save, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import type { Page, PageSection } from '@/types';

export function ProductsEditor({ page }: { page: Page & { sections: PageSection[] } }) {
    const hero = useMemo(() => page.sections.find((s) => s.section_type === 'hero'), [page.sections]);
    const notice = useMemo(() => page.sections.find((s) => ['notice', 'regulatory_notice', 'disclaimer'].includes(s.section_type)), [page.sections]);
    const categories = useMemo(() => page.sections.find((s) => ['product_categories', 'categories', 'dosage_forms'].includes(s.section_type)), [page.sections]);
    const therapeutic = useMemo(() => page.sections.find((s) => ['therapeutic_categories', 'therapeutic', 'therapeutic_focus'].includes(s.section_type)), [page.sections]);
    const pipeline = useMemo(() => page.sections.find((s) => ['pipeline', 'development_pipeline', 'products_under_development'].includes(s.section_type)), [page.sections]);
    const future = useMemo(() => page.sections.find((s) => ['future_portfolio', 'future_products', 'expansion_portfolio'].includes(s.section_type)), [page.sections]);
    const compliance = useMemo(() => page.sections.find((s) => ['compliance', 'regulatory_compliance'].includes(s.section_type)), [page.sections]);
    const cta = useMemo(() => page.sections.find((s) => s.section_type === 'cta'), [page.sections]);

    const [heroForm, setHeroForm] = useState({
        title: hero?.title || 'Pharmaceutical Products',
        subtitle: hero?.subtitle || '',
        badge: (hero?.meta as any)?.badge || (hero?.meta as any)?.label || 'OUR PRODUCTS',
    });
    const [noticeForm, setNoticeForm] = useState({
        title: notice?.title || 'Regulatory Notice',
        content: notice?.content || 'Product information will be available following regulatory approval. All claims will comply with WHO Ethical Criteria and Myanmar FDA regulations.',
    });
    const [categoriesForm, setCategoriesForm] = useState({
        badge: (categories?.meta as any)?.badge || categories?.subtitle || 'PRODUCT CATEGORIES',
        title: categories?.title || 'Our Product Portfolio',
        subtitle: categories?.subtitle || categories?.content || 'Focused on essential medicines in oral solid dosage forms.',
    });
    const [therapeuticForm, setTherapeuticForm] = useState({
        badge: (therapeutic?.meta as any)?.badge || therapeutic?.subtitle || 'THERAPEUTIC FOCUS',
        title: therapeutic?.title || 'Main Therapeutic Categories',
        subtitle: therapeutic?.subtitle || therapeutic?.content || 'Essential medicines across key therapeutic areas.',
    });
    const [pipelineForm, setPipelineForm] = useState({
        badge: (pipeline?.meta as any)?.badge || pipeline?.subtitle || 'DEVELOPMENT PIPELINE',
        title: pipeline?.title || 'Products Under Development',
        content: pipeline?.content || 'Active pipeline focused on essential medicines — following strict quality protocols and regulatory requirements.',
    });
    const [futureForm, setFutureForm] = useState({
        badge: (future?.meta as any)?.badge || future?.subtitle || 'FUTURE PLANS',
        title: future?.title || 'Future Product Portfolio',
        content: future?.subtitle || future?.content || 'Expanding as facility and approvals progress.',
    });
    const [complianceForm, setComplianceForm] = useState({
        title: compliance?.title || 'Regulatory Compliance',
        content: compliance?.content || 'All product information, promotional materials, and marketing communications will be compliant with international standards.',
    });
    const [ctaForm, setCtaForm] = useState({
        title: cta?.title || 'Partner with NOVITA',
        subtitle: cta?.subtitle || cta?.content || 'For partnership and product inquiries, contact us.',
        link_text: cta?.link_text || 'Contact Us',
        link_url: cta?.link_url || '/contact',
    });

    const handleSave = async () => {
        const sections = [
            { id: hero?.id, section_type: 'hero', title: heroForm.title, subtitle: heroForm.subtitle, meta: { badge: heroForm.badge } },
            { id: notice?.id, section_type: notice?.section_type || 'notice', title: noticeForm.title, content: noticeForm.content },
            { id: categories?.id, section_type: categories?.section_type || 'product_categories', title: categoriesForm.title, subtitle: categoriesForm.badge, content: categoriesForm.subtitle, meta: { badge: categoriesForm.badge } },
            { id: therapeutic?.id, section_type: therapeutic?.section_type || 'therapeutic_categories', title: therapeuticForm.title, subtitle: therapeuticForm.badge, content: therapeuticForm.subtitle, meta: { badge: therapeuticForm.badge } },
            { id: pipeline?.id, section_type: pipeline?.section_type || 'pipeline', title: pipelineForm.title, subtitle: pipelineForm.badge, content: pipelineForm.content, meta: { badge: pipelineForm.badge } },
            { id: future?.id, section_type: future?.section_type || 'future_portfolio', title: futureForm.title, subtitle: futureForm.badge, content: futureForm.content, meta: { badge: futureForm.badge } },
            { id: compliance?.id, section_type: compliance?.section_type || 'compliance', title: complianceForm.title, content: complianceForm.content },
            { id: cta?.id, section_type: 'cta', title: ctaForm.title, subtitle: ctaForm.subtitle, link_text: ctaForm.link_text, link_url: ctaForm.link_url },
        ].filter((s) => s.id);

        router.put(`/admin/pages/${page.id}/sections`, { sections } as any, {
            preserveScroll: true,
            onSuccess: () => toast.success('Products sections saved'),
            onError: () => toast.error('Failed to save products sections'),
        });
    };

    const SectionHeader = ({ title, type, badge }: { title: string; type: string; badge?: string }) => (
        <div className="flex items-center justify-between">
            <div>
                <CardTitle className="text-base">{title}</CardTitle>
                <CardDescription className="text-xs">{type} • {badge || '—'}</CardDescription>
            </div>
            <Button variant="ghost" size="sm" asChild className="h-7 text-xs">
                <a href="/products" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-3 w-3" /> View
                </a>
            </Button>
        </div>
    );

    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-lg font-bold">Products Sections</h2>
                    <p className="text-sm text-muted-foreground">Manage each section of the Products page.</p>
                </div>
                <div className="flex gap-2">
                    <Button variant="outline" size="sm" asChild>
                        <a href="/products" target="_blank" rel="noopener noreferrer"><ExternalLink className="h-4 w-4" /> View Public</a>
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

            {/* Notice */}
            <Card>
                <CardHeader><SectionHeader title="Regulatory Notice" type={notice?.section_type || 'notice'} /></CardHeader>
                <CardContent className="space-y-3">
                    <div><Label>Title</Label><Input value={noticeForm.title} onChange={(e) => setNoticeForm({ ...noticeForm, title: e.target.value })} /></div>
                    <div><Label>Content</Label><textarea value={noticeForm.content} onChange={(e) => setNoticeForm({ ...noticeForm, content: e.target.value })} rows={2} className="flex min-h-[60px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm" /></div>
                </CardContent>
            </Card>

            {/* Product Categories */}
            <Card>
                <CardHeader><SectionHeader title="Product Categories" type={categories?.section_type || 'product_categories'} badge={categoriesForm.badge} /></CardHeader>
                <CardContent className="space-y-3">
                    <div><Label>Badge Label</Label><Input value={categoriesForm.badge} onChange={(e) => setCategoriesForm({ ...categoriesForm, badge: e.target.value })} /></div>
                    <div><Label>Title</Label><Input value={categoriesForm.title} onChange={(e) => setCategoriesForm({ ...categoriesForm, title: e.target.value })} /></div>
                    <div><Label>Subtitle</Label><Input value={categoriesForm.subtitle} onChange={(e) => setCategoriesForm({ ...categoriesForm, subtitle: e.target.value })} /></div>
                </CardContent>
            </Card>

            {/* Therapeutic Categories */}
            <Card>
                <CardHeader><SectionHeader title="Therapeutic Categories" type={therapeutic?.section_type || 'therapeutic_categories'} badge={therapeuticForm.badge} /></CardHeader>
                <CardContent className="space-y-3">
                    <div><Label>Badge Label</Label><Input value={therapeuticForm.badge} onChange={(e) => setTherapeuticForm({ ...therapeuticForm, badge: e.target.value })} /></div>
                    <div><Label>Title</Label><Input value={therapeuticForm.title} onChange={(e) => setTherapeuticForm({ ...therapeuticForm, title: e.target.value })} /></div>
                    <div><Label>Subtitle</Label><Input value={therapeuticForm.subtitle} onChange={(e) => setTherapeuticForm({ ...therapeuticForm, subtitle: e.target.value })} /></div>
                </CardContent>
            </Card>

            {/* Pipeline */}
            <Card>
                <CardHeader><SectionHeader title="Development Pipeline" type={pipeline?.section_type || 'pipeline'} badge={pipelineForm.badge} /></CardHeader>
                <CardContent className="space-y-3">
                    <div><Label>Badge Label</Label><Input value={pipelineForm.badge} onChange={(e) => setPipelineForm({ ...pipelineForm, badge: e.target.value })} /></div>
                    <div><Label>Title</Label><Input value={pipelineForm.title} onChange={(e) => setPipelineForm({ ...pipelineForm, title: e.target.value })} /></div>
                    <div><Label>Content</Label><textarea value={pipelineForm.content} onChange={(e) => setPipelineForm({ ...pipelineForm, content: e.target.value })} rows={2} className="flex min-h-[60px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm" /></div>
                </CardContent>
            </Card>

            {/* Future Portfolio */}
            <Card>
                <CardHeader><SectionHeader title="Future Portfolio" type={future?.section_type || 'future_portfolio'} badge={futureForm.badge} /></CardHeader>
                <CardContent className="space-y-3">
                    <div><Label>Badge Label</Label><Input value={futureForm.badge} onChange={(e) => setFutureForm({ ...futureForm, badge: e.target.value })} /></div>
                    <div><Label>Title</Label><Input value={futureForm.title} onChange={(e) => setFutureForm({ ...futureForm, title: e.target.value })} /></div>
                    <div><Label>Content</Label><textarea value={futureForm.content} onChange={(e) => setFutureForm({ ...futureForm, content: e.target.value })} rows={2} className="flex min-h-[60px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm" /></div>
                </CardContent>
            </Card>

            {/* Compliance */}
            <Card>
                <CardHeader><SectionHeader title="Regulatory Compliance" type={compliance?.section_type || 'compliance'} /></CardHeader>
                <CardContent className="space-y-3">
                    <div><Label>Title</Label><Input value={complianceForm.title} onChange={(e) => setComplianceForm({ ...complianceForm, title: e.target.value })} /></div>
                    <div><Label>Content</Label><textarea value={complianceForm.content} onChange={(e) => setComplianceForm({ ...complianceForm, content: e.target.value })} rows={2} className="flex min-h-[60px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm" /></div>
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
