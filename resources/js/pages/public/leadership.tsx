import { Head, Link, usePage } from '@inertiajs/react';
import { useState } from 'react';
import PublicLayout from '@/layouts/public/public-layout';
import { ArrowRight, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface PageSection {
    id: number;
    section_type: string;
    title: string | null;
    subtitle: string | null;
    content: string | null;
    image_path: string | null;
    link_url: string | null;
    link_text: string | null;
    meta: any;
}
interface LeadershipProps {
    page?: { id: number; title: string; slug: string; active_sections?: PageSection[]; activeSections?: PageSection[] };
}
interface Leader {
    name: string;
    title: string;
    bio: string;
    image: string;
    linkedin?: string;
    email?: string;
}

const fallbackBoard: Leader[] = [
    { name: 'Chairman Name', title: 'Chairman of the Board', bio: 'With over 30 years of experience in the pharmaceutical industry, our Chairman brings extensive leadership and strategic vision to NOVITA.', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face' },
];
const fallbackMD: Leader = {
    name: 'U Maung Aye',
    title: 'Managing Director',
    bio: 'Our Managing Director leads NOVITA with a vision to provide quality medicines to Myanmar. With extensive experience in pharmaceutical manufacturing and operations, they drive our mission of building trust through quality.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
};
const fallbackDirectors: Leader[] = [
    { name: 'Director Name', title: 'Director of Operations', bio: 'Responsible for overseeing manufacturing operations and ensuring compliance with international quality standards.', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face' },
    { name: 'Director Name', title: 'Director of Quality', bio: 'Leading our quality assurance and control teams to maintain the highest standards in pharmaceutical manufacturing.', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face' },
];
const fallbackSenior: Leader[] = [
    { name: 'Manager Name', title: 'Head of Manufacturing', bio: 'Overseeing production operations and ensuring efficient manufacturing processes.', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face' },
    { name: 'Manager Name', title: 'Head of Quality Assurance', bio: 'Ensuring all products meet regulatory requirements and quality standards.', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face' },
    { name: 'Manager Name', title: 'Head of Research & Development', bio: 'Leading product development initiatives and formulation research.', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face' },
    { name: 'Manager Name', title: 'Head of Regulatory Affairs', bio: 'Managing regulatory submissions and ensuring compliance with Myanmar FDA requirements.', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face' },
];

function LeaderCard({ leader, onView }: { leader: Leader; onView: (l: Leader) => void }) {
    return (
        <div
            onClick={() => onView(leader)}
            className="group flex flex-col overflow-hidden rounded-[20px] border border-gray-200 dark:border-white/10 bg-white dark:bg-gray-800/50 hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer h-full"
        >
            <div className="relative h-56 overflow-hidden bg-gray-100 dark:bg-gray-700">
                <img src={leader.image} alt={leader.name} className="h-full w-full object-cover object-top group-hover:scale-105 transition duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-3 left-3 right-3">
                    <div className="inline-flex rounded-full bg-white/90 dark:bg-gray-900/80 backdrop-blur px-2.5 py-1 text-xs font-semibold text-gray-900 dark:text-white border border-white/20 line-clamp-1">{leader.title}</div>
                </div>
            </div>
            <div className="flex flex-1 flex-col p-5">
                <h3 className="font-bold text-gray-900 dark:text-white line-clamp-1">{leader.name}</h3>
                <p className="text-xs font-medium text-novita mt-1 line-clamp-1">{leader.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400 line-clamp-3 flex-1">{leader.bio}</p>
                <div className="mt-4 flex items-center justify-between">
                    <span className="text-xs font-semibold text-novita group-hover:underline">View Profile →</span>
                    <div className="flex gap-1">
                        {leader.linkedin && <span className="h-7 w-7 rounded-full bg-gray-100 dark:bg-white/10 flex items-center justify-center"><Linkedin className="h-3.5 w-3.5 text-gray-600 dark:text-gray-300" /></span>}
                        {leader.email && <span className="h-7 w-7 rounded-full bg-gray-100 dark:bg-white/10 flex items-center justify-center"><Mail className="h-3.5 w-3.5 text-gray-600 dark:text-gray-300" /></span>}
                    </div>
                </div>
            </div>
        </div>
    );
}

function SectionGrid({ title, subtitle, leaders, badge, onView }: { title: string; subtitle: string; leaders: Leader[]; badge: string; onView: (l: Leader) => void }) {
    const [visible, setVisible] = useState(8);
    const showAll = visible >= leaders.length;
    const display = leaders.slice(0, visible);
    return (
        <section className="py-10 md:py-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
                    <div>
                        <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 px-3 py-1 text-xs font-semibold tracking-widest text-gray-600 dark:text-gray-300">{badge}</div>
                        <h2 className="mt-3 text-2xl md:text-3xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h2>
                        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 max-w-2xl">{subtitle}</p>
                    </div>
                    <Badge variant="outline" className="font-normal">{leaders.length} members</Badge>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 auto-rows-fr">
                    {display.map((l, idx) => (
                        <LeaderCard key={`${l.name}-${idx}`} leader={l} onView={onView} />
                    ))}
                </div>

                {leaders.length > 8 && (
                    <div className="mt-8 text-center">
                        {!showAll ? (
                            <Button variant="outline" onClick={() => setVisible((v) => v + 8)} className="rounded-full">
                                Show More ({leaders.length - visible} more)
                            </Button>
                        ) : (
                            <Button variant="ghost" onClick={() => setVisible(8)} className="rounded-full">
                                Show Less
                            </Button>
                        )}
                    </div>
                )}

                {leaders.length === 0 && <p className="text-center text-sm text-muted-foreground py-8">No members yet.</p>}
            </div>
        </section>
    );
}

export default function LeadershipPage({ page }: LeadershipProps) {
    const sections = ((page as any)?.active_sections || (page as any)?.activeSections || []) as PageSection[];
    const hero = sections.find((s) => s.section_type === 'hero');
    const heroTitle = hero?.title || 'Our Leadership';
    const heroSubtitle = hero?.subtitle || 'Meet the experienced team guiding NOVITA\'s mission to provide quality medicines for a healthier Myanmar.';
    const heroBadge = (hero?.meta as any)?.badge || 'Leadership';
    const mdSec = sections.find((s) => s.section_type === 'managing_director');
    const managingDirector: Leader = mdSec
        ? { name: mdSec.title || fallbackMD.name, title: mdSec.subtitle || fallbackMD.title, bio: mdSec.content || fallbackMD.bio, image: mdSec.image_path ? (mdSec.image_path.startsWith('http') || mdSec.image_path.startsWith('/') ? mdSec.image_path : `/storage/${mdSec.image_path}`) : fallbackMD.image }
        : fallbackMD;
    const boardSec = sections.find((s) => s.section_type === 'board');
    const boardOfDirectors: Leader[] = boardSec?.meta?.members?.length ? boardSec.meta.members.map((m: any) => ({ name: m.name, title: m.title, bio: m.bio, image: m.image })) : fallbackBoard;
    const directorsSec = sections.find((s) => s.section_type === 'directors');
    const directors: Leader[] = directorsSec?.meta?.members?.length ? directorsSec.meta.members.map((m: any) => ({ name: m.name, title: m.title, bio: m.bio, image: m.image })) : fallbackDirectors;
    const seniorSec = sections.find((s) => s.section_type === 'senior_management');
    const seniorManagement: Leader[] = seniorSec?.meta?.members?.length ? seniorSec.meta.members.map((m: any) => ({ name: m.name, title: m.title, bio: m.bio, image: m.image })) : fallbackSenior;

    const [selected, setSelected] = useState<Leader | null>(null);

    return (
        <PublicLayout>
            <Head title="Our Leadership - NOVITA Pharmaceutical Co., Ltd." />

            {/* Hero - Swiss minimal */}
            <section className="relative overflow-hidden bg-white dark:bg-[#070E1F] border-b border-gray-100 dark:border-white/[0.06]">
                <div className="pointer-events-none absolute inset-0">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.08)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,#000_70%,transparent_110%)]" />
                </div>
                <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
                    <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 dark:border-white/10 bg-white dark:bg-white/[0.06] px-3 py-1 text-xs font-semibold tracking-widest text-gray-600 dark:text-gray-300">{heroBadge}</div>
                    <h1 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white">{heroTitle}</h1>
                    <p className="mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-300">{heroSubtitle}</p>
                </div>
            </section>

            {/* MD - featured, full width, minimal */}
            <section className="py-12 md:py-16 bg-white dark:bg-[#070E1F]">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="overflow-hidden rounded-[24px] border border-gray-200 dark:border-white/10 bg-white dark:bg-gray-800/50 flex flex-col md:flex-row">
                        <div className="md:w-[380px] shrink-0 relative h-80 md:h-auto">
                            <img src={managingDirector.image} alt={managingDirector.name} className="h-full w-full object-cover object-top" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent md:hidden" />
                        </div>
                        <div className="flex-1 p-6 md:p-8 flex flex-col justify-center">
                            <div className="inline-flex rounded-full bg-novita/10 dark:bg-novita/20 px-3 py-1 text-xs font-bold text-novita w-fit">Managing Director</div>
                            <h2 className="mt-3 text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">{managingDirector.name}</h2>
                            <p className="text-sm font-medium text-novita">{managingDirector.title}</p>
                            <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">{managingDirector.bio}</p>
                            <div className="mt-6 flex gap-2">
                                <Button variant="outline" size="sm" onClick={() => setSelected(managingDirector)}>View Profile</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-white/10 to-transparent max-w-5xl mx-auto" />

            <SectionGrid title={boardSec?.title || 'Board of Directors'} subtitle={boardSec?.content || 'Strategic oversight and governance'} leaders={boardOfDirectors} badge="GOVERNANCE" onView={setSelected} />
            <div className="h-px bg-gray-100 dark:bg-white/5 max-w-5xl mx-auto" />
            <SectionGrid title={directorsSec?.title || 'Directors'} subtitle={directorsSec?.content || 'Leaders of key functional areas'} leaders={directors} badge="DIRECTORS" onView={setSelected} />
            <div className="h-px bg-gray-100 dark:bg-white/5 max-w-5xl mx-auto" />
            <SectionGrid title={seniorSec?.title || 'Senior Management'} subtitle={seniorSec?.content || 'Operational excellence across manufacturing'} leaders={seniorManagement} badge="MANAGEMENT" onView={setSelected} />

            {/* CTA minimal */}
            <section className="py-12 bg-gray-50/70 dark:bg-[#0B1220] border-t border-gray-100 dark:border-white/5">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="rounded-[24px] border border-gray-200 dark:border-white/10 bg-white dark:bg-gray-800/50 p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
                        <div><h2 className="text-2xl font-bold text-gray-900 dark:text-white">Join Our Team</h2><p className="text-sm text-gray-600 dark:text-gray-400 mt-1">We're looking for talent who share our vision.</p></div>
                        <Button asChild className="rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:opacity-90"><Link href="/careers">View Open Positions <ArrowRight className="ml-2 h-4 w-4" /></Link></Button>
                    </div>
                </div>
            </section>

            <Dialog open={!!selected} onOpenChange={(o) => !o && setSelected(null)}>
                <DialogContent className="max-w-lg">
                    {selected && (
                        <>
                            <DialogHeader>
                                <DialogTitle>{selected.name}</DialogTitle>
                                <DialogDescription>{selected.title}</DialogDescription>
                            </DialogHeader>
                            <img src={selected.image} alt={selected.name} className="h-64 w-full object-cover object-top rounded-xl" />
                            <p className="text-sm leading-relaxed text-muted-foreground">{selected.bio}</p>
                            <div className="flex gap-2">
                                {selected.linkedin && <Button variant="outline" size="sm" asChild><a href={selected.linkedin} target="_blank"><Linkedin className="h-4 w-4" /> LinkedIn</a></Button>}
                                {selected.email && <Button variant="outline" size="sm" asChild><a href={`mailto:${selected.email}`}><Mail className="h-4 w-4" /> Email</a></Button>}
                            </div>
                        </>
                    )}
                </DialogContent>
            </Dialog>
        </PublicLayout>
    );
}
