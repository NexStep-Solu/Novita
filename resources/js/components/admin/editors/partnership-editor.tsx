import { useMemo, useState } from 'react';
import { router } from '@inertiajs/react';
import { toast } from 'sonner';
import { Save, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import type { Page, PageSection } from '@/types';

export function PartnershipEditor({ page }: { page: Page & { sections: PageSection[] } }) {
    const hero = useMemo(() => page.sections.find((s) => s.section_type === 'hero'), [page.sections]);
    const opportunities = useMemo(() => page.sections.find((s) => ['opportunities', 'partnership_opportunities'].includes(s.section_type)), [page.sections]);
    const contractMfg = useMemo(() => page.sections.find((s) => ['contract_manufacturing', 'contract_mfg'].includes(s.section_type)), [page.sections]);
    const whyPartner = useMemo(() => page.sections.find((s) => ['why_partner', 'why_partnership', 'benefits'].includes(s.section_type)), [page.sections]);
    const inquiryInfo = useMemo(() => page.sections.find((s) => ['inquiry_info', 'inquiry', 'form_info'].includes(s.section_type)), [page.sections]);
    const cta = useMemo(() => page.sections.find((s) => s.section_type === 'cta'), [page.sections]);

    const [heroForm, setHeroForm] = useState({
        title: hero?.title || 'Business Partnership',
        subtitle: hero?.subtitle || '',
        badge: (hero?.meta as any)?.badge || (hero?.meta as any)?.label || 'Partnerships',
    });
    const [opportunitiesForm, setOpportunitiesForm] = useState({
        badge: (opportunities?.meta as any)?.badge || opportunities?.subtitle || 'Opportunities',
        title: opportunities?.title || 'Partnership Opportunities',
        content: opportunities?.content || '',
    });
    const [contractForm, setContractForm] = useState({
        title: contractMfg?.title || 'Contract Manufacturing',
        subtitle: contractMfg?.subtitle || 'Future Opportunity',
        content: contractMfg?.content || '',
        highlight: (contractMfg?.meta as any)?.highlight || '',
        image_path: contractMfg?.image_path || '',
    });
    const [whyForm, setWhyForm] = useState({
        badge: (whyPartner?.meta as any)?.badge || whyPartner?.subtitle || 'Benefits',
        title: whyPartner?.title || 'Why Partner with NOVITA',
    });
    const [inquiryForm, setInquiryForm] = useState({
        badge: (inquiryInfo?.meta as any)?.badge || inquiryInfo?.subtitle || 'Get in Touch',
        title: inquiryInfo?.title || 'Partnership Inquiry',
        content: inquiryInfo?.content || '',
        email: (inquiryInfo?.meta as any)?.email || 'partnerships@novita.com',
    });
    const [ctaForm, setCtaForm] = useState({
        title: cta?.title || "Let's Build Together",
        subtitle: cta?.subtitle || '',
        link_text: cta?.link_text || 'Contact Us',
        link_url: cta?.link_url || 'mailto:partnerships@novita.com',
    });

    const [contractFile, setContractFile] = useState<File | null>(null);
    const [contractPreview, setContractPreview] = useState<string | null>(contractMfg?.image_path ? `/storage/${contractMfg.image_path}` : null);

    const uploadFile = async (file: File): Promise<string | null> => {
        const fd = new FormData();
        fd.append('file', file);
        const csrf = (document.querySelector('meta[name="csrf-token"]') as HTMLMetaElement)?.content || '';
        const res = await fetch('/admin/upload', { method: 'POST', headers: { 'X-CSRF-TOKEN': csrf } as any, body: fd });
        const j = await res.json();
        return j.path || null;
    };

    const handleSave = async () => {
        let contractPath = contractForm.image_path || null;
        if (contractFile) contractPath = await uploadFile(contractFile);

        const sections = [
            { id: hero?.id, section_type: 'hero', title: heroForm.title, subtitle: heroForm.subtitle, meta: { badge: heroForm.badge } },
            { id: opportunities?.id, section_type: opportunities?.section_type || 'opportunities', title: opportunitiesForm.title, subtitle: opportunitiesForm.badge, content: opportunitiesForm.content, meta: { badge: opportunitiesForm.badge } },
            { id: contractMfg?.id, section_type: contractMfg?.section_type || 'contract_manufacturing', title: contractForm.title, subtitle: contractForm.subtitle, content: contractForm.content, image_path: contractPath, meta: { highlight: contractForm.highlight } },
            { id: whyPartner?.id, section_type: whyPartner?.section_type || 'why_partner', title: whyForm.title, subtitle: whyForm.badge, meta: { badge: whyForm.badge } },
            { id: inquiryInfo?.id, section_type: inquiryInfo?.section_type || 'inquiry_info', title: inquiryForm.title, subtitle: inquiryForm.badge, content: inquiryForm.content, meta: { badge: inquiryForm.badge, email: inquiryForm.email } },
            { id: cta?.id, section_type: 'cta', title: ctaForm.title, subtitle: ctaForm.subtitle, link_text: ctaForm.link_text, link_url: ctaForm.link_url },
        ].filter((s) => s.id);

        router.put(`/admin/pages/${page.id}/sections`, { sections } as any, {
            preserveScroll: true,
            onSuccess: () => toast.success('Partnership sections saved'),
            onError: () => toast.error('Failed to save partnership sections'),
        });
    };

    const SectionHeader = ({ title, type, badge }: { title: string; type: string; badge?: string }) => (
        <div className="flex items-center justify-between">
            <div>
                <CardTitle className="text-base">{title}</CardTitle>
                <CardDescription className="text-xs">{type} • {badge || '—'}</CardDescription>
            </div>
            <Button variant="ghost" size="sm" asChild className="h-7 text-xs">
                <a href="/partnership" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-3 w-3" /> View
                </a>
            </Button>
        </div>
    );

    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-lg font-bold">Partnership Sections</h2>
                    <p className="text-sm text-muted-foreground">Manage each section of the Business Partnership page.</p>
                </div>
                <div className="flex gap-2">
                    <Button variant="outline" size="sm" asChild>
                        <a href="/partnership" target="_blank" rel="noopener noreferrer"><ExternalLink className="h-4 w-4" /> View Public</a>
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

            {/* Opportunities */}
            <Card>
                <CardHeader><SectionHeader title="Partnership Opportunities" type={opportunities?.section_type || 'opportunities'} badge={opportunitiesForm.badge} /></CardHeader>
                <CardContent className="space-y-3">
                    <div><Label>Badge Label</Label><Input value={opportunitiesForm.badge} onChange={(e) => setOpportunitiesForm({ ...opportunitiesForm, badge: e.target.value })} /></div>
                    <div><Label>Title</Label><Input value={opportunitiesForm.title} onChange={(e) => setOpportunitiesForm({ ...opportunitiesForm, title: e.target.value })} /></div>
                    <div><Label>Content</Label><textarea value={opportunitiesForm.content} onChange={(e) => setOpportunitiesForm({ ...opportunitiesForm, content: e.target.value })} rows={2} className="flex min-h-[60px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm" /></div>
                    <p className="text-xs text-muted-foreground">Cards (Technical, Equipment, Raw Materials, Distribution) are managed via page sections meta.</p>
                </CardContent>
            </Card>

            {/* Contract Manufacturing */}
            <Card>
                <CardHeader><SectionHeader title="Contract Manufacturing" type={contractMfg?.section_type || 'contract_manufacturing'} /></CardHeader>
                <CardContent className="space-y-3">
                    <div><Label>Title</Label><Input value={contractForm.title} onChange={(e) => setContractForm({ ...contractForm, title: e.target.value })} /></div>
                    <div><Label>Subtitle / Badge</Label><Input value={contractForm.subtitle} onChange={(e) => setContractForm({ ...contractForm, subtitle: e.target.value })} /></div>
                    <div><Label>Content</Label><textarea value={contractForm.content} onChange={(e) => setContractForm({ ...contractForm, content: e.target.value })} rows={2} className="flex min-h-[60px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm" /></div>
                    <div><Label>Highlight Quote</Label><Input value={contractForm.highlight} onChange={(e) => setContractForm({ ...contractForm, highlight: e.target.value })} /></div>
                    <div>
                        <Label>Image</Label>
                        <div className="flex items-center gap-3">
                            <Input type="file" accept="image/*" onChange={(e) => { const f = e.target.files?.[0]; if (f) { setContractFile(f); setContractPreview(URL.createObjectURL(f)); } }} className="max-w-xs" />
                            {contractPreview && <img src={contractPreview} alt="Contract" className="h-16 w-16 rounded-lg object-cover border" />}
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Why Partner */}
            <Card>
                <CardHeader><SectionHeader title="Why Partner with NOVITA" type={whyPartner?.section_type || 'why_partner'} badge={whyForm.badge} /></CardHeader>
                <CardContent className="space-y-3">
                    <div><Label>Badge Label</Label><Input value={whyForm.badge} onChange={(e) => setWhyForm({ ...whyForm, badge: e.target.value })} /></div>
                    <div><Label>Title</Label><Input value={whyForm.title} onChange={(e) => setWhyForm({ ...whyForm, title: e.target.value })} /></div>
                    <p className="text-xs text-muted-foreground">Benefit cards (Quality, International Standards, KTECG) are managed via page sections meta.</p>
                </CardContent>
            </Card>

            {/* Inquiry Info */}
            <Card>
                <CardHeader><SectionHeader title="Partnership Inquiry Info" type={inquiryInfo?.section_type || 'inquiry_info'} badge={inquiryForm.badge} /></CardHeader>
                <CardContent className="space-y-3">
                    <div><Label>Badge Label</Label><Input value={inquiryForm.badge} onChange={(e) => setInquiryForm({ ...inquiryForm, badge: e.target.value })} /></div>
                    <div><Label>Title</Label><Input value={inquiryForm.title} onChange={(e) => setInquiryForm({ ...inquiryForm, title: e.target.value })} /></div>
                    <div><Label>Content</Label><textarea value={inquiryForm.content} onChange={(e) => setInquiryForm({ ...inquiryForm, content: e.target.value })} rows={2} className="flex min-h-[60px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm" /></div>
                    <div><Label>Contact Email</Label><Input value={inquiryForm.email} onChange={(e) => setInquiryForm({ ...inquiryForm, email: e.target.value })} /></div>
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
