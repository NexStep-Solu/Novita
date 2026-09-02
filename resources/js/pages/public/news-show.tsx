import { Head, Link } from '@inertiajs/react';
import PublicLayout from '@/layouts/public/public-layout';
import { ArrowLeft, ArrowRight, Calendar, MapPin, Tag, ChevronRight, Building2, Award, Users, Briefcase, Milestone, Share2, Facebook, Linkedin, Mail } from 'lucide-react';

interface NewsItem {
    id: number;
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    category: string;
    date: string;
    image: string;
    location?: string;
    gallery?: string[];
}

const allNews: NewsItem[] = [
    {
        id: 1,
        title: 'NOVITA Pharmaceutical Facility - Groundbreaking Ceremony',
        slug: 'groundbreaking-ceremony',
        excerpt: 'Official groundbreaking ceremony marks the beginning of NOVITA\'s state-of-the-art pharmaceutical manufacturing facility in Yangon Industrial Zone.',
        content: 'The groundbreaking ceremony was attended by government officials, industry leaders, and international partners. This marks a significant milestone in Myanmar\'s pharmaceutical manufacturing capabilities.\n\nThe ceremony included speeches from NOVITA leadership, government representatives, and international partners who expressed their support for the project.\n\nThe new facility will feature state-of-the-art manufacturing equipment, quality control laboratories, and warehousing facilities designed to meet international GMP standards.\n\nThis development represents a significant investment in Myanmar\'s pharmaceutical infrastructure and will contribute to the country\'s goal of self-sufficiency in essential medicines.',
        category: 'Milestone',
        date: '2024-01-15',
        image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&h=600&fit=crop',
        location: 'Yangon, Myanmar',
        gallery: [
            'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&h=400&fit=crop',
            'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop',
            'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop',
        ],
    },
    {
        id: 2,
        title: 'CPHI China 2024 - Shanghai',
        slug: 'cphi-china-2024',
        excerpt: 'NOVITA participated in CPHI China 2024, connecting with global pharmaceutical suppliers and exploring latest technologies in drug manufacturing.',
        content: 'Our team visited CPHI China to explore partnerships with international pharmaceutical suppliers and learn about the latest advancements in pharmaceutical manufacturing technologies.\n\nThe exhibition brought together over 3,000 exhibitors from around the world, showcasing the latest innovations in pharmaceutical ingredients, dosage forms, and manufacturing equipment.\n\nKey highlights from the event included:\n- New API sourcing opportunities\n- Advanced manufacturing technologies\n- Quality control innovations\n- Regulatory compliance solutions\n\nNOVITA established valuable connections with potential suppliers and technology partners that will support our manufacturing operations.',
        category: 'Exhibition',
        date: '2024-06-19',
        image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&h=600&fit=crop',
        location: 'Shanghai, China',
        gallery: [
            'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop',
            'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=600&h=400&fit=crop',
            'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600&h=400&fit=crop',
        ],
    },
    {
        id: 3,
        title: 'Factory Development Progress - Phase 1 Construction',
        slug: 'factory-development-phase-1',
        excerpt: 'Significant progress on Phase 1 construction including OSD manufacturing area, quality control laboratory, and warehouse facilities.',
        content: 'Construction of our manufacturing facility is progressing well. Phase 1 includes the installation of tablet and capsule manufacturing equipment, along with a fully equipped quality control laboratory.\n\nCurrent progress:\n- Main building structure: 80% complete\n- HVAC installation: In progress\n- Electrical systems: 60% complete\n- Water systems: Under installation\n\nThe facility is designed to meet international GMP standards and will be capable of producing a range of solid oral dosage forms including tablets and hard gelatin capsules.',
        category: 'Factory Update',
        date: '2024-03-20',
        image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&h=600&fit=crop',
        location: 'Yangon, Myanmar',
    },
    {
        id: 4,
        title: 'CPHI Thailand 2024 - Bangkok',
        slug: 'cphi-thailand-2024',
        excerpt: 'NOVITA attended CPHI Thailand to strengthen regional partnerships and explore opportunities in Southeast Asian pharmaceutical markets.',
        content: 'Our participation in CPHI Thailand allowed us to connect with regional pharmaceutical companies and explore collaboration opportunities in ASEAN markets.\n\nThe exhibition featured over 500 exhibitors and attracted pharmaceutical professionals from across the Southeast Asian region.\n\nKey takeaways:\n- Regional supply chain opportunities\n- ASEAN regulatory harmonization updates\n- Manufacturing technology advancements\n- Quality standards developments\n\nNOVITA is well-positioned to leverage these connections as we develop our manufacturing capabilities.',
        category: 'Exhibition',
        date: '2024-07-17',
        image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1200&h=600&fit=crop',
        location: 'Bangkok, Thailand',
    },
    {
        id: 5,
        title: 'Technical Partnership Agreement Signed',
        slug: 'technical-partnership',
        excerpt: 'NOVITA signed a technical partnership agreement with international pharmaceutical consultants to support manufacturing process development.',
        content: 'This partnership will provide technical expertise in pharmaceutical manufacturing, quality systems, and regulatory compliance to ensure our facility meets international standards.\n\nThe agreement covers:\n- Manufacturing process optimization\n- Quality management system development\n- Regulatory submission support\n- Training and knowledge transfer\n\nThis collaboration represents NOVITA\'s commitment to building world-class pharmaceutical manufacturing capabilities in Myanmar.',
        category: 'Partnership',
        date: '2024-04-10',
        image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1200&h=600&fit=crop',
        location: 'Yangon, Myanmar',
    },
    {
        id: 6,
        title: 'Now Hiring - Pharmaceutical Professionals',
        slug: 'recruitment-pharmaceutical-professionals',
        excerpt: 'NOVITA is seeking experienced pharmaceutical professionals to join our growing team. Multiple positions available in manufacturing, quality, and regulatory affairs.',
        content: 'We are looking for qualified candidates with experience in pharmaceutical manufacturing, quality assurance, quality control, and regulatory affairs to join our team.\n\nOpen positions:\n- Production Manager\n- Quality Assurance Manager\n- Quality Control Analyst\n- Regulatory Affairs Specialist\n- Production Supervisors\n- QC Chemists\n\nWe offer competitive compensation packages and opportunities for professional growth in a dynamic pharmaceutical environment.',
        category: 'Recruitment',
        date: '2024-05-01',
        image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200&h=600&fit=crop',
    },
    {
        id: 7,
        title: 'BIO Asia-Taiwan 2024',
        slug: 'bio-asia-taiwan-2024',
        excerpt: 'NOVITA participated in BIO Asia-Taiwan to explore biotechnology partnerships and emerging pharmaceutical technologies.',
        content: 'Our team attended BIO Asia-Taiwan to learn about the latest developments in biotechnology and explore potential partnerships for future product development.\n\nThe conference featured presentations from leading biotechnology companies and research institutions from around the world.\n\nKey topics covered:\n- Biosimilar development\n- Gene therapy advances\n- Precision medicine\n- Digital health innovations\n\nThis exposure to cutting-edge biotechnology will inform NOVITA\'s future product development strategy.',
        category: 'Exhibition',
        date: '2024-08-21',
        image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1200&h=600&fit=crop',
        location: 'Taipei, Taiwan',
    },
    {
        id: 8,
        title: 'ISPE Singapore Pharma Symposium',
        slug: 'ispe-singapore-2024',
        excerpt: 'NOVITA representatives attended the ISPE Singapore Pharma Symposium to learn about GMP best practices and regulatory updates.',
        content: 'The symposium provided valuable insights into current GMP requirements, regulatory trends, and best practices in pharmaceutical manufacturing.\n\nTopics covered included:\n- Updated GMP guidelines\n- Data integrity requirements\n- Process validation approaches\n- Quality risk management\n\nNOVITA\'s participation in this symposium demonstrates our commitment to staying current with international pharmaceutical standards and best practices.',
        category: 'Exhibition',
        date: '2024-09-12',
        image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&h=600&fit=crop',
        location: 'Singapore',
    },
    {
        id: 9,
        title: 'PHARMA MachTech Expo India 2024',
        slug: 'pharma-machtech-expo-india',
        excerpt: 'NOVITA explored pharmaceutical manufacturing equipment and technology at PHARMA MachTech Expo in Mumbai.',
        content: 'Our team visited the expo to evaluate manufacturing equipment, packaging solutions, and quality control instruments for our upcoming facility.\n\nExhibitors showcased:\n- Tablet manufacturing equipment\n- Capsule filling machines\n- Packaging solutions\n- Quality control instruments\n- HVAC systems\n\nThis visit will inform our equipment procurement decisions as we finalize our facility setup.',
        category: 'Exhibition',
        date: '2024-10-05',
        image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=1200&h=600&fit=crop',
        location: 'Mumbai, India',
    },
    {
        id: 10,
        title: 'Facility Equipment Installation Begins',
        slug: 'equipment-installation',
        excerpt: 'Installation of major manufacturing equipment has commenced at our Yangon facility, marking a key milestone in our operational readiness.',
        content: 'The installation of tablet presses, capsule filling machines, and analytical instruments is now underway. This marks a significant step towards commercial production.\n\nEquipment installed so far:\n- Tablet compression machine\n- Hard gelatin capsule filling machine\n- Tablet deduster and polisher\n- Analytical instruments (HPLC, UV spectrophotometer)\n\nInstallation of additional equipment is scheduled for completion in the coming months.',
        category: 'Factory Update',
        date: '2024-11-15',
        image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&h=600&fit=crop',
        location: 'Yangon, Myanmar',
    },
    {
        id: 11,
        title: 'Company Milestone - Regulatory Pre-Submission Meeting',
        slug: 'regulatory-presubmission',
        excerpt: 'NOVITA held a pre-submission meeting with Myanmar FDA to discuss our product registration pathway and facility approval process.',
        content: 'This productive meeting established clear guidelines for our regulatory submission process and helped us understand the requirements for facility and product approval.\n\nKey discussion points:\n- Facility inspection requirements\n- Product registration procedures\n- Documentation requirements\n- Timeline expectations\n\nNOVITA is committed to full regulatory compliance and will work closely with Myanmar FDA throughout the approval process.',
        category: 'Milestone',
        date: '2024-12-01',
        image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&h=600&fit=crop',
        location: 'Naypyidaw, Myanmar',
    },
];

function formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

function getCategoryIcon(category: string) {
    switch (category) {
        case 'Milestone':
            return <Milestone className="h-5 w-5" />;
        case 'Factory Update':
            return <Building2 className="h-5 w-5" />;
        case 'Exhibition':
            return <Tag className="h-5 w-5" />;
        case 'Partnership':
            return <Users className="h-5 w-5" />;
        case 'Recruitment':
            return <Briefcase className="h-5 w-5" />;
        default:
            return <Tag className="h-5 w-5" />;
    }
}

function getCategoryColor(category: string): string {
    switch (category) {
        case 'Milestone':
            return 'bg-purple-100 text-purple-700';
        case 'Factory Update':
            return 'bg-novita/10 text-novita-dark';
        case 'Exhibition':
            return 'bg-green-100 text-green-700';
        case 'Partnership':
            return 'bg-orange-100 text-orange-700';
        case 'Recruitment':
            return 'bg-red-100 text-red-700';
        default:
            return 'bg-gray-100 text-foreground';
    }
}

export default function NewsShowPage({ slug }: { slug: string }) {
    const newsItem = allNews.find(item => item.slug === slug) || allNews[0];
    const relatedNews = allNews
        .filter(item => item.id !== newsItem.id && item.category === newsItem.category)
        .slice(0, 3);

    return (
        <PublicLayout>
            <Head title={`${newsItem.title} - NOVITA Pharmaceutical`} />

            {/* Hero Section */}
            <section className="relative bg-gray-900 dark:bg-gray-950 text-white">
                <div className="aspect-video md:aspect-[21/9] relative overflow-hidden">
                    <img
                        src={newsItem.image}
                        alt={newsItem.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                            e.currentTarget.src = 'https://images.unsplash.com/photo-1504711434969-e33886168d5c?w=1200&h=600&fit=crop';
                        }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                        <div className="max-w-7xl mx-auto">
                            <Link
                                href="/news"
                                className="inline-flex items-center text-gray-300 hover:text-white mb-4 transition-colors"
                            >
                                <ArrowLeft className="h-4 w-4 mr-2" />
                                Back to News
                            </Link>
                            <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(newsItem.category)} mb-4`}>
                                {getCategoryIcon(newsItem.category)}
                                <span className="ml-2">{newsItem.category}</span>
                            </span>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                                {newsItem.title}
                            </h1>
                            <div className="flex flex-wrap items-center text-sm text-gray-300">
                                <Calendar className="h-4 w-4 mr-2" />
                                {formatDate(newsItem.date)}
                                {newsItem.location && (
                                    <>
                                        <MapPin className="h-4 w-4 ml-4 mr-2" />
                                        {newsItem.location}
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Article Content */}
            <section className="py-12 md:py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Main Content */}
                        <div className="lg:col-span-2">
                            <article className="prose prose-lg max-w-none">
                                {newsItem.content.split('\n\n').map((paragraph, index) => (
                                    <p key={index} className="text-foreground leading-relaxed mb-6">
                                        {paragraph}
                                    </p>
                                ))}
                            </article>

                            {/* Gallery */}
                            {newsItem.gallery && newsItem.gallery.length > 0 && (
                                <div className="mt-12">
                                    <h3 className="text-2xl font-bold text-foreground mb-6">Gallery</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                        {newsItem.gallery.map((image, index) => (
                                            <div key={index} className="aspect-video rounded-lg overflow-hidden">
                                                <img
                                                    src={image}
                                                    alt={`${newsItem.title} - Image ${index + 1}`}
                                                    className="w-full h-full object-cover hover:scale-105 transition-transform"
                                                    onError={(e) => {
                                                        e.currentTarget.src = 'https://images.unsplash.com/photo-1504711434969-e33886168d5c?w=600&h=400&fit=crop';
                                                    }}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-1">
                            {/* Share */}
                            <div className="bg-muted/50 rounded-xl p-6 mb-8">
                                <h3 className="text-lg font-semibold text-foreground mb-4">Share This Article</h3>
                                <div className="flex space-x-3">
                                    <a href="#" className="p-2 bg-card rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                        <Facebook className="h-5 w-5 text-novita" />
                                    </a>
                                    <a href="#" className="p-2 bg-card rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                        <Linkedin className="h-5 w-5 text-novita-dark" />
                                    </a>
                                    <a href="#" className="p-2 bg-card rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                        <Mail className="h-5 w-5 text-muted-foreground" />
                                    </a>
                                </div>
                            </div>

                            {/* Related News */}
                            {relatedNews.length > 0 && (
                                <div className="bg-muted/50 rounded-xl p-6">
                                    <h3 className="text-lg font-semibold text-foreground mb-4">Related News</h3>
                                    <div className="space-y-4">
                                        {relatedNews.map((item) => (
                                            <Link
                                                key={item.id}
                                                href={`/news/${item.slug}`}
                                                className="block group"
                                            >
                                                <div className="flex items-start space-x-3">
                                                    <img
                                                        src={item.image}
                                                        alt={item.title}
                                                        className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
                                                        onError={(e) => {
                                                            e.currentTarget.src = 'https://images.unsplash.com/photo-1504711434969-e33886168d5c?w=100&h=100&fit=crop';
                                                        }}
                                                    />
                                                    <div>
                                                        <p className="text-sm font-medium text-foreground group-hover:text-novita transition-colors line-clamp-2">
                                                            {item.title}
                                                        </p>
                                                        <p className="text-xs text-muted-foreground mt-1">
                                                            {formatDate(item.date)}
                                                        </p>
                                                    </div>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-12 md:py-16 bg-novita text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">
                        Stay Updated
                    </h2>
                    <p className="text-lg text-gray-100 mb-6 max-w-2xl mx-auto">
                        Follow our journey as we build Myanmar's pharmaceutical manufacturing capabilities.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/news"
                            className="inline-flex items-center justify-center bg-white text-novita px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                        >
                            View All News
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                    </div>
                </div>
            </section>
        </PublicLayout>
    );
}
