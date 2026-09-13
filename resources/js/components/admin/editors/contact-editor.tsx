import { useMemo, useState } from 'react';
import { router } from '@inertiajs/react';
import { toast } from 'sonner';
import { Save, ExternalLink, Plus, Trash2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import type { Page, PageSection } from '@/types';

interface CardItem {
    title: string;
    company?: string;
    address?: string;
    address_lines?: string[];
    phone?: string;
    email?: string;
    map_url?: string;
    lines?: string[];
    note?: string;
    hours?: [string, string][];
    social?: boolean;
}

interface Department {
    title: string;
    email: string;
    icon?: string;
}

export function ContactEditor({ page }: { page: Page & { sections: PageSection[] } }) {
    const hero = useMemo(() => page.sections.find((s) => s.section_type === 'hero'), [page.sections]);
    const infoCards = useMemo(() => page.sections.find((s) => s.section_type === 'info_cards'), [page.sections]);
    const deptEmails = useMemo(() => page.sections.find((s) => s.section_type === 'department_emails'), [page.sections]);
    const map = useMemo(() => page.sections.find((s) => s.section_type === 'map'), [page.sections]);
    const contactForm = useMemo(() => page.sections.find((s) => s.section_type === 'contact_form'), [page.sections]);

    const [heroForm, setHeroForm] = useState({
        title: hero?.title || 'Contact Us',
        subtitle: hero?.subtitle || '',
        badge: (hero?.meta as any)?.badge || (hero?.meta as any)?.label || 'GET IN TOUCH',
    });

    const [cards, setCards] = useState<CardItem[]>((infoCards?.meta as any)?.cards || [
        { title: 'Registered Office', company: 'NOVITA Pharmaceutical Co., Ltd.', address: 'No. 216/222 Bo Myat Htun Housing, Room D3, Corner of 49 Street and Maharbandoola Road, Ward 1, Pazundaung Township, Yangon, Myanmar', phone: '(+95) 9 5000144', email: 'info@novita-myanmar.com.mm', map_url: 'https://maps.app.goo.gl/HJVXT2ghQCwvZzCB7' },
        { title: 'Factory', address_lines: ['No. 92,93 & 94', 'Makhayar Min Thar Gyi Street', 'Thilawa Local Industrial Zone', 'Yangon, Myanmar'], phone: '(+95) 9 977 225 001', map_url: 'https://maps.app.goo.gl/EHKjgoAaFnA4oSgZA' },
        { title: 'Additional Phone', lines: ['For general inquiries'], phone: '(+95) 9 977 225 004', note: 'Factory under development. Visits by appointment only.' },
        { title: 'Office Hours', hours: [['Monday - Friday', '8:30 AM - 5:00 PM'], ['Saturday', '8:30 AM - 1:00 PM'], ['Sunday', 'Closed']], social: true },
    ]);

    const [depts, setDepts] = useState<Department[]>((deptEmails?.meta as any)?.departments || [
        { title: 'General Inquiries', email: 'info@novita-myanmar.com.mm', icon: 'message-square' },
        { title: 'Business Inquiries', email: 'business@novita-myanmar.com.mm', icon: 'globe' },
        { title: 'Careers', email: 'careers@novita-myanmar.com.mm', icon: 'mail' },
    ]);

    const [mapForm, setMapForm] = useState({
        badge: (map?.meta as any)?.badge || map?.subtitle || 'FIND US',
        title: map?.title || 'Our Location',
        embed_url: (map?.meta as any)?.embed_url || '',
        map_url: (map?.meta as any)?.map_url || '',
        map_label: (map?.meta as any)?.map_label || '',
        height: (map?.meta as any)?.height || 450,
    });

    const [formSection, setFormSection] = useState({
        badge: (contactForm?.meta as any)?.badge || contactForm?.subtitle || 'SEND A MESSAGE',
        title: contactForm?.title || 'Contact Form',
        content: contactForm?.content || '',
    });

    const updateCard = (idx: number, field: string, value: any) => {
        setCards((prev) => prev.map((c, i) => (i === idx ? { ...c, [field]: value } : c)));
    };
    const addCard = () => setCards((prev) => [...prev, { title: 'New Card', phone: '', email: '' }]);
    const removeCard = (idx: number) => setCards((prev) => prev.filter((_, i) => i !== idx));

    const updateDept = (idx: number, field: string, value: string) => {
        setDepts((prev) => prev.map((d, i) => (i === idx ? { ...d, [field]: value } : d)));
    };
    const addDept = () => setDepts((prev) => [...prev, { title: 'New Department', email: '' }]);
    const removeDept = (idx: number) => setDepts((prev) => prev.filter((_, i) => i !== idx));

    const updateCardHours = (cardIdx: number, hourIdx: number, field: number, value: string) => {
        setCards((prev) => prev.map((c, i) => {
            if (i !== cardIdx || !c.hours) return c;
            return { ...c, hours: c.hours.map((h, hi) => (hi === hourIdx ? (field === 0 ? [value, h[1]] as [string, string] : [h[0], value] as [string, string]) : h)) };
        }));
    };
    const addCardHour = (cardIdx: number) => {
        setCards((prev) => prev.map((c, i) => {
            if (i !== cardIdx) return c;
            return { ...c, hours: [...(c.hours || []), ['New Day', '9:00 AM - 5:00 PM'] as [string, string]] };
        }));
    };
    const removeCardHour = (cardIdx: number, hourIdx: number) => {
        setCards((prev) => prev.map((c, i) => {
            if (i !== cardIdx || !c.hours) return c;
            return { ...c, hours: c.hours.filter((_, hi) => hi !== hourIdx) };
        }));
    };

    const handleSave = () => {
        const sections = [
            { id: hero?.id, section_type: 'hero', title: heroForm.title, subtitle: heroForm.subtitle, meta: { badge: heroForm.badge } },
            { id: infoCards?.id, section_type: 'info_cards', title: 'Contact Information', meta: { badge: 'CONTACT INFO', cards } },
            { id: deptEmails?.id, section_type: 'department_emails', title: 'Department Contacts', subtitle: 'CONTACT BY DEPARTMENT', meta: { badge: 'CONTACT BY DEPARTMENT', departments: depts } },
            { id: map?.id, section_type: 'map', title: mapForm.title, subtitle: 'FIND US', meta: { badge: mapForm.badge, embed_url: mapForm.embed_url, map_url: mapForm.map_url, map_label: mapForm.map_label, height: mapForm.height } },
            { id: contactForm?.id, section_type: 'contact_form', title: formSection.title, subtitle: 'SEND A MESSAGE', content: formSection.content, meta: { badge: formSection.badge } },
        ].filter((s) => s.id);

        router.put(`/admin/pages/${page.id}/sections`, { sections } as any, {
            preserveScroll: true,
            onSuccess: () => toast.success('Contact page sections saved'),
            onError: () => toast.error('Failed to save contact sections'),
        });
    };

    const SectionHeader = ({ title, type, badge }: { title: string; type: string; badge?: string }) => (
        <div className="flex items-center justify-between">
            <div>
                <CardTitle className="text-base">{title}</CardTitle>
                <CardDescription className="text-xs">{type} • {badge || '—'}</CardDescription>
            </div>
            <Button variant="ghost" size="sm" asChild className="h-7 text-xs">
                <a href="/contact" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-3 w-3" /> View
                </a>
            </Button>
        </div>
    );

    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-lg font-bold">Contact Page Sections</h2>
                    <p className="text-sm text-muted-foreground">Manage each section of the Contact page.</p>
                </div>
                <div className="flex gap-2">
                    <Button variant="outline" size="sm" asChild>
                        <a href="/contact" target="_blank" rel="noopener noreferrer"><ExternalLink className="h-4 w-4" /> View Public</a>
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

            {/* Info Cards */}
            <Card>
                <CardHeader>
                    <div className="flex items-center justify-between w-full">
                        <div>
                            <CardTitle className="text-base">Contact Info Cards</CardTitle>
                            <CardDescription className="text-xs">info_cards • {cards.length} cards</CardDescription>
                        </div>
                        <div className="flex gap-2">
                            <Button variant="ghost" size="sm" asChild className="h-7 text-xs">
                                <a href="/contact" target="_blank" rel="noopener noreferrer"><ExternalLink className="h-3 w-3" /> View</a>
                            </Button>
                            <Button variant="outline" size="sm" onClick={addCard} className="h-7 text-xs"><Plus className="h-3 w-3" /> Add Card</Button>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="space-y-4">
                    {cards.map((card, idx) => (
                        <div key={idx} className="rounded-lg border p-4 space-y-3 relative">
                            <Button variant="ghost" size="sm" onClick={() => removeCard(idx)} className="absolute top-2 right-2 h-6 w-6 p-0 text-destructive"><Trash2 className="h-3 w-3" /></Button>
                            <div className="grid grid-cols-2 gap-3">
                                <div><Label>Card Title</Label><Input value={card.title} onChange={(e) => updateCard(idx, 'title', e.target.value)} /></div>
                                <div><Label>Phone</Label><Input value={card.phone || ''} onChange={(e) => updateCard(idx, 'phone', e.target.value)} /></div>
                            </div>
                            {card.hours ? (
                                <div>
                                    <Label>Office Hours</Label>
                                    <div className="space-y-2 mt-1">
                                        {card.hours.map((h, hi) => (
                                            <div key={hi} className="flex gap-2 items-center">
                                                <Input value={h[0]} onChange={(e) => updateCardHours(idx, hi, 0, e.target.value)} placeholder="Day" />
                                                <Input value={h[1]} onChange={(e) => updateCardHours(idx, hi, 1, e.target.value)} placeholder="Hours" />
                                                <Button variant="ghost" size="sm" onClick={() => removeCardHour(idx, hi)} className="h-6 w-6 p-0 shrink-0"><Trash2 className="h-3 w-3" /></Button>
                                            </div>
                                        ))}
                                        <Button variant="outline" size="sm" onClick={() => addCardHour(idx)} className="h-6 text-xs"><Plus className="h-3 w-3" /> Add Hours</Button>
                                    </div>
                                </div>
                            ) : card.address_lines ? (
                                <div><Label>Address Lines (comma-separated)</Label><Input value={card.address_lines.join(', ')} onChange={(e) => updateCard(idx, 'address_lines', e.target.value.split(',').map((s: string) => s.trim()))} /></div>
                            ) : (
                                <div><Label>Address</Label><textarea value={card.address || ''} onChange={(e) => updateCard(idx, 'address', e.target.value)} rows={2} className="flex min-h-[60px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm" /></div>
                            )}
                            {card.email !== undefined && <div><Label>Email</Label><Input value={card.email || ''} onChange={(e) => updateCard(idx, 'email', e.target.value)} /></div>}
                            <div><Label>Map URL</Label><Input value={card.map_url || ''} onChange={(e) => updateCard(idx, 'map_url', e.target.value)} /></div>
                            {card.note !== undefined && <div><Label>Note</Label><Input value={card.note || ''} onChange={(e) => updateCard(idx, 'note', e.target.value)} /></div>}
                            {card.lines !== undefined && <div><Label>Lines (comma-separated)</Label><Input value={(card.lines || []).join(', ')} onChange={(e) => updateCard(idx, 'lines', e.target.value.split(',').map((s: string) => s.trim()))} /></div>}
                        </div>
                    ))}
                </CardContent>
            </Card>

            {/* Department Emails */}
            <Card>
                <CardHeader>
                    <div className="flex items-center justify-between w-full">
                        <div>
                            <CardTitle className="text-base">Department Emails</CardTitle>
                            <CardDescription className="text-xs">department_emails • {depts.length} departments</CardDescription>
                        </div>
                        <div className="flex gap-2">
                            <Button variant="ghost" size="sm" asChild className="h-7 text-xs">
                                <a href="/contact" target="_blank" rel="noopener noreferrer"><ExternalLink className="h-3 w-3" /> View</a>
                            </Button>
                            <Button variant="outline" size="sm" onClick={addDept} className="h-7 text-xs"><Plus className="h-3 w-3" /> Add Department</Button>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="space-y-3">
                    {depts.map((dept, idx) => (
                        <div key={idx} className="flex gap-3 items-end relative rounded-lg border p-3">
                            <Button variant="ghost" size="sm" onClick={() => removeDept(idx)} className="absolute top-2 right-2 h-6 w-6 p-0 text-destructive"><Trash2 className="h-3 w-3" /></Button>
                            <div className="flex-1 grid grid-cols-2 gap-3">
                                <div><Label>Title</Label><Input value={dept.title} onChange={(e) => updateDept(idx, 'title', e.target.value)} /></div>
                                <div><Label>Email</Label><Input value={dept.email} onChange={(e) => updateDept(idx, 'email', e.target.value)} /></div>
                            </div>
                        </div>
                    ))}
                </CardContent>
            </Card>

            {/* Map */}
            <Card>
                <CardHeader><SectionHeader title="Google Maps" type="map" badge={mapForm.badge} /></CardHeader>
                <CardContent className="space-y-3">
                    <div className="grid grid-cols-2 gap-3">
                        <div><Label>Badge Label</Label><Input value={mapForm.badge} onChange={(e) => setMapForm({ ...mapForm, badge: e.target.value })} /></div>
                        <div><Label>Title</Label><Input value={mapForm.title} onChange={(e) => setMapForm({ ...mapForm, title: e.target.value })} /></div>
                    </div>
                    <div><Label>Embed URL</Label><Input value={mapForm.embed_url} onChange={(e) => setMapForm({ ...mapForm, embed_url: e.target.value })} /></div>
                    <div className="grid grid-cols-2 gap-3">
                        <div><Label>Google Maps Link</Label><Input value={mapForm.map_url} onChange={(e) => setMapForm({ ...mapForm, map_url: e.target.value })} /></div>
                        <div><Label>Link Label</Label><Input value={mapForm.map_label} onChange={(e) => setMapForm({ ...mapForm, map_label: e.target.value })} /></div>
                    </div>
                    <div><Label>Map Height (px)</Label><Input type="number" value={mapForm.height} onChange={(e) => setMapForm({ ...mapForm, height: parseInt(e.target.value) || 450 })} /></div>
                </CardContent>
            </Card>

            {/* Contact Form */}
            <Card>
                <CardHeader><SectionHeader title="Inquiry Form Section" type="contact_form" badge={formSection.badge} /></CardHeader>
                <CardContent className="space-y-3">
                    <div><Label>Badge Label</Label><Input value={formSection.badge} onChange={(e) => setFormSection({ ...formSection, badge: e.target.value })} /></div>
                    <div><Label>Title</Label><Input value={formSection.title} onChange={(e) => setFormSection({ ...formSection, title: e.target.value })} /></div>
                    <div><Label>Description</Label><textarea value={formSection.content} onChange={(e) => setFormSection({ ...formSection, content: e.target.value })} rows={2} className="flex min-h-[60px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm" /></div>
                </CardContent>
            </Card>
        </div>
    );
}
