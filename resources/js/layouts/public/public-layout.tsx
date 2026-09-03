import { Link, usePage } from '@inertiajs/react';
import { useState, useEffect, useRef } from 'react';
import { Menu, X, Phone, Mail, ChevronDown, MapPin, Facebook, Linkedin, Youtube, Sun, Moon, Home, Building2, FlaskConical, ShieldCheck, Package, Newspaper, BriefcaseBusiness, MessageCircle, Beaker, Leaf, Handshake } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { useAppearance } from '@/hooks/use-appearance';
import type { ReactNode } from 'react';

interface NavItem {
    key: string;
    label: string;
    href: string;
    icon: React.ReactNode;
    children?: NavItem[];
}

const navItems: NavItem[] = [
    { key: 'home', label: 'Home', href: '/', icon: <Home className="h-4 w-4" /> },
    // {
    //     key: 'about',
    //     label: 'About Us',
    //     href: '#',
    //     icon: <Building2 className="h-4 w-4" />,
    //     children: [
    //         { key: 'about-main', label: 'About Us', href: '/about-us', icon: <Building2 className="h-4 w-4" /> },
    //         // { key: 'leadership', label: 'Our Leadership', href: '/leadership', icon: <Building2 className="h-4 w-4" /> },
    //     ],
    // },
    { key: 'about', label: 'About Us', href: '/about-us', icon: <Building2 className="h-4 w-4" /> },
    { key: 'facility', label: 'Our Facility', href: '/our-facility', icon: <FlaskConical className="h-4 w-4" /> },
    { key: 'quality', label: 'Quality', href: '/quality', icon: <ShieldCheck className="h-4 w-4" /> },
    { key: 'product_development', label: 'Product Development', href: '/product-development', icon: <Beaker className="h-4 w-4" /> },
    { key: 'products', label: 'Products', href: '/products', icon: <Package className="h-4 w-4" /> },
    { key: 'partnership', label: 'Business Partnership', href: '/partnership', icon: <Handshake className="h-4 w-4" /> },
    { key: 'sustainability', label: 'Sustainability & EHS', href: '/sustainability', icon: <Leaf className="h-4 w-4" /> },
    { key: 'news', label: 'News & Media', href: '/news', icon: <Newspaper className="h-4 w-4" /> },
    { key: 'careers', label: 'Careers', href: '/careers', icon: <BriefcaseBusiness className="h-4 w-4" /> },
    { key: 'contact', label: 'Contact Us', href: '/contact', icon: <MessageCircle className="h-4 w-4" /> },
];

export default function PublicLayout({ children }: { children: ReactNode }) {
    const { url, props } = usePage();
    const navVisibility = (props as any).navVisibility as Record<string, boolean> | undefined;
    const isVisible = (key: string) => {
        if (!navVisibility || Object.keys(navVisibility).length === 0) return true;
        const v = navVisibility[`nav_${key}`];
        return v === undefined ? true : !!v;
    };
    const visibleNavItems = navItems.filter((item) => isVisible(item.key));
    const contactEmail = (props as any).contactEmail || 'info@novita-myanmar.com.mm';
    const contactAddress = (props as any).contactAddress || 'No. 216/222 Bo Myat Htun Housing, Room D3, Corner of 49 Street and Maharbandoola Road, Ward 1, Pazundaung Township, Yangon, Myanmar';
    const contactPhone = (props as any).contactPhone || '(+95) 9 5000144';
    const factoryPhone = (props as any).factoryPhone || '(+95) 9 977 225 001';
    const contactPhone2 = (props as any).contactPhone2 || '(+95) 9 977 225 004';
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [aboutOpen, setAboutOpen] = useState(false);
    const [workOpen, setWorkOpen] = useState(false);
    const [dockAboutOpen, setDockAboutOpen] = useState(false);
    const [dockWorkOpen, setDockWorkOpen] = useState(false);
    const navRef = useRef<HTMLElement>(null);
    const dockNavRef = useRef<HTMLElement>(null);
    const [scrolled, setScrolled] = useState(false);
    const { resolvedAppearance, updateAppearance } = useAppearance();
    const isDark = resolvedAppearance === 'dark';

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 120);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as Node;
            if (navRef.current && !navRef.current.contains(target)) {
                setAboutOpen(false);
                setWorkOpen(false);
            }
            if (dockNavRef.current && !dockNavRef.current.contains(target)) {
                setDockAboutOpen(false);
                setDockWorkOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const isActive = (item: NavItem): boolean => {
        if (item.href === '#') return item.children?.some((child) => url === child.href) ?? false;
        return url === item.href;
    };

    const closeAllDropdowns = () => {
        setAboutOpen(false);
        setWorkOpen(false);
        setDockAboutOpen(false);
        setDockWorkOpen(false);
    };

    return (
        <div className="min-h-screen bg-background text-foreground">
            {/* Top Bar - collapses smoothly
            <motion.div
                animate={{ height: scrolled ? 0 : 40, opacity: scrolled ? 0 : 1 }}
                transition={{ type: 'spring', stiffness: 320, damping: 30, mass: 0.85 }}
                className="bg-gray-900 dark:bg-gray-950 text-white text-sm overflow-hidden will-change-[height]"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-10">
                        <div className="flex items-center space-x-6">
                            <a href={`tel:${contactPhone.replace(/[^+\d]/g, '')}`} className="flex items-center space-x-2 hover:text-gray-300 transition-colors">
                                <Phone className="h-3.5 w-3.5" />
                                <span className="hidden sm:inline">{contactPhone}</span>
                            </a>
                            <a href={`mailto:${contactEmail}`} className="hidden sm:flex items-center space-x-2 hover:text-gray-300 transition-colors">
                                <Mail className="h-3.5 w-3.5" />
                                <span>{contactEmail}</span>
                            </a>
                        </div>
                        <div className="flex items-center space-x-4">
                            <a href="https://www.kyawtharengg.com.mm" target="_blank" rel="noopener noreferrer" className="hidden md:inline-flex items-center gap-1 text-xs font-medium text-gray-300 hover:text-white transition">
                                KTECG Group ↗
                            </a>
                            <button onClick={() => updateAppearance(isDark ? 'light' : 'dark')} className="p-1.5 rounded-md hover:bg-gray-800 transition-colors" aria-label="Toggle dark mode">
                                {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                            </button>
                            <a href="/login" className="hover:text-gray-300 transition-colors text-sm">Login</a>
                        </div>
                    </div>
                </div>
            </motion.div> */}

            {/* Sticky header wrapper - morphs into floating dock */}
            <div className={`sticky top-0 z-40 flex items-center ${scrolled ? 'bg-transparent px-4 h-[64px]' : 'bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 shadow-sm px-0 h-[64px]'}`}>
                <motion.div
                    animate={{
                        borderRadius: scrolled ? 9999 : 0,
                        maxWidth: scrolled ? 760 : 1280,
                        height: scrolled ? 56 : 64,
                    }}
                    transition={{ type: 'spring', stiffness: 320, damping: 30, mass: 0.85 }}
                    className={`mx-auto flex items-center justify-between will-change-transform w-full ${
                        scrolled
                            ? 'bg-white/75 dark:bg-gray-900/75 backdrop-blur-xl border border-gray-200/60 dark:border-gray-700/60 shadow-[0_8px_32px_rgba(0,0,0,0.12)] pl-4 pr-2'
                            : 'bg-transparent border-transparent px-4 sm:px-6 lg:px-8'
                    }`}
                >
                    {/* Logo - Landscape */}
                    <Link href="/" className="flex-shrink-0 flex items-center">
                        <img
                            src="/logo_landscape.png"
                            alt="NOVITA Pharmaceutical Co., Ltd."
                            className={`w-auto object-contain transition-all duration-300 ${scrolled ? 'h-8' : 'h-10'}`}
                            onError={(e) => {
                                (e.target as HTMLImageElement).style.display = 'none';
                                const fallback = (e.target as HTMLImageElement).nextElementSibling as HTMLElement;
                                if (fallback) fallback.style.display = 'flex';
                            }}
                        />
                        <span className="hidden font-bold tracking-tight text-novita text-xl ml-2" style={{ display: 'none' }}>
                            NOVITA
                        </span>
                    </Link>

                    {/* Center nav - morphs text <-> icons */}
                    <div className="hidden lg:flex items-center relative">
                        <AnimatePresence mode="popLayout" initial={false}>
                            {!scrolled ? (
                                <motion.nav
                                    key="text-nav"
                                    ref={navRef as any}
                                    initial={{ opacity: 0, y: 6 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 6 }}
                                    transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                                    className="flex items-center space-x-0.5"
                                >
                                    {visibleNavItems.map((item) => {
                                        if (item.children) {
                                            return (
                                                <div key={item.key} className="relative">
                                                    <button onClick={() => { setAboutOpen(!aboutOpen); setWorkOpen(false); }} className={`px-2.5 py-1.5 text-sm font-medium rounded-md transition-colors inline-flex items-center ${isActive(item) ? 'text-novita bg-blue-50 dark:bg-blue-900/30' : 'text-gray-700 dark:text-gray-300 hover:text-novita hover:bg-gray-50 dark:hover:bg-gray-800'}`}>
                                                        {item.label}<ChevronDown className={`ml-1 h-3 w-3 transition-transform ${aboutOpen ? 'rotate-180' : ''}`} />
                                                    </button>
                                                    <AnimatePresence>
                                                        {aboutOpen && (
                                                            <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.2 }} className="absolute top-full left-0 mt-2 w-56 bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-100 dark:border-gray-700 py-1 z-50">
                                                                {item.children.map((child) => (
                                                                    <Link key={child.key} href={child.href} className="block px-4 py-2.5 text-sm text-gray-700 dark:text-gray-300 hover:text-novita hover:bg-gray-50 dark:hover:bg-gray-700" onClick={closeAllDropdowns}>{child.label}</Link>
                                                                ))}
                                                            </motion.div>
                                                        )}
                                                    </AnimatePresence>
                                                </div>
                                            );
                                        }
                                        return (
                                            <Link key={item.key} href={item.href} className={`px-2.5 py-1.5 text-sm font-medium rounded-md transition-colors ${url === item.href ? 'text-novita bg-blue-50 dark:bg-blue-900/30' : 'text-gray-700 dark:text-gray-300 hover:text-novita hover:bg-gray-50 dark:hover:bg-gray-800'}`}>{item.label}</Link>
                                        );
                                    })}
                                </motion.nav>
                            ) : (
                                <motion.nav
                                    key="icon-nav"
                                    ref={dockNavRef as any}
                                    initial={{ opacity: 0, y: 6, scale: 0.98 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 6, scale: 0.98 }}
                                    transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                                    className="flex items-center gap-0.5"
                                >
                                    <div className="h-6 w-px bg-gray-200 dark:bg-gray-700 mx-1 hidden lg:block" />
                                    {visibleNavItems.map((item) => {
                                        if (item.children) {
                                            const isOpen = item.key === 'about' ? dockAboutOpen : dockWorkOpen;
                                            const setOpen = item.key === 'about' ? setDockAboutOpen : setDockWorkOpen;
                                            const otherSetOpen = item.key === 'about' ? setDockWorkOpen : setDockAboutOpen;
                                            return (
                                                <div key={item.key} className="relative">
                                                    <button onClick={() => { setOpen(!isOpen); otherSetOpen(false); }} title={item.label} className={`w-9 h-9 flex items-center justify-center rounded-full transition-all ${isActive(item) ? 'bg-novita text-white shadow-md' : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/10 hover:text-novita'}`}>
                                                        {item.icon}
                                                    </button>
                                                    <AnimatePresence>
                                                        {isOpen && (
                                                            <motion.div initial={{ opacity: 0, y: -8, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -8, scale: 0.98 }} transition={{ duration: 0.18 }} className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-56 bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-100 dark:border-gray-700 py-1.5 z-50">
                                                                {item.children.map((child) => (
                                                                    <Link key={child.key} href={child.href} className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 dark:text-gray-300 hover:text-novita hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors" onClick={closeAllDropdowns}>
                                                                        <span className="text-gray-400">{child.icon}</span><span>{child.label}</span>
                                                                    </Link>
                                                                ))}
                                                            </motion.div>
                                                        )}
                                                    </AnimatePresence>
                                                </div>
                                            );
                                        }
                                        return (
                                            <Link key={item.key} href={item.href} title={item.label} className={`w-9 h-9 flex items-center justify-center rounded-full transition-all ${url === item.href ? 'bg-novita text-white shadow-md' : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/10 hover:text-novita'}`}>
                                                {item.icon}
                                            </Link>
                                        );
                                    })}
                                    <div className="h-6 w-px bg-gray-200 dark:bg-gray-700 mx-1 hidden lg:block" />
                                    <button onClick={() => updateAppearance(isDark ? 'light' : 'dark')} className="w-9 h-9 hidden lg:flex items-center justify-center rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors" aria-label="Toggle dark mode">
                                        {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                                    </button>
                                </motion.nav>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Mobile controls */}
                    <div className="flex items-center gap-1 lg:hidden">
                        <AnimatePresence initial={false}>
                            {scrolled && (
                                <motion.button
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    onClick={() => updateAppearance(isDark ? 'light' : 'dark')}
                                    className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
                                    aria-label="Toggle dark mode"
                                >
                                    {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                                </motion.button>
                            )}
                        </AnimatePresence>
                        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors lg:hidden" aria-label="Toggle mobile menu">
                            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }} className={`fixed inset-x-0 z-30 lg:hidden bg-white dark:bg-gray-900 shadow-xl border-b border-gray-200 dark:border-gray-800 max-h-[calc(100vh-4rem)] overflow-y-auto ${scrolled ? 'top-[72px] mx-3 rounded-2xl border' : 'top-[104px]'}`}>
                        <div className="px-4 py-4 space-y-1">
                            {visibleNavItems.map((item) => {
                                if (item.children) {
                                    return (
                                        <div key={item.key} className="py-2">
                                            <div className="px-3 py-1 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider flex items-center">{item.icon}<span className="ml-2">{item.label}</span></div>
                                            {item.children.map((child) => (
                                                <Link key={child.key} href={child.href} className={`flex items-center px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${url === child.href ? 'text-novita bg-blue-50 dark:bg-blue-900/30' : 'text-gray-700 dark:text-gray-300 hover:text-novita hover:bg-gray-50 dark:hover:bg-gray-800'}`} onClick={() => setMobileMenuOpen(false)}>{child.icon}<span className="ml-3">{child.label}</span></Link>
                                            ))}
                                        </div>
                                    );
                                }
                                return (
                                    <Link key={item.key} href={item.href} className={`flex items-center px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${url === item.href ? 'text-novita bg-blue-50 dark:bg-blue-900/30' : 'text-gray-700 dark:text-gray-300 hover:text-novita hover:bg-gray-50 dark:hover:bg-gray-800'}`} onClick={() => setMobileMenuOpen(false)}>
                                        {item.icon}<span className="ml-3">{item.label}</span>
                                    </Link>
                                );
                            })}
                            <div className="pt-4 border-t border-gray-200 dark:border-gray-700"><a href="/login" className="flex items-center px-3 py-2.5 rounded-xl text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-novita hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">Login</a></div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <main>{children}</main>

            <footer className="bg-gray-900 dark:bg-gray-950 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div><div className="text-2xl font-bold text-white mb-2">NOVITA</div><div className="text-gray-400 text-xs tracking-widest mb-4">PHARMACEUTICAL CO., LTD.</div><p className="text-gray-400 text-sm mb-4">A member of <a href="https://www.kyawtharengg.com.mm" target="_blank" rel="noopener noreferrer" className="text-white hover:text-novita-light underline decoration-white/20 hover:decoration-novita-light">KTECG Group</a> with over 20 years of experience in pharmaceutical construction.</p><p className="text-gray-400 text-sm">Better Health, Longer Life</p></div>
                        <div><h3 className="text-white font-semibold mb-4">Quick Links</h3><ul className="space-y-2"><li><Link href="/about-us" className="text-gray-400 hover:text-white text-sm transition-colors">About Us</Link></li></ul></div>
                        <div><h3 className="text-white font-semibold mb-4">Legal</h3><ul className="space-y-2"><li><Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</Link></li><li><Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Use</Link></li><li><Link href="/medical-disclaimer" className="text-gray-400 hover:text-white text-sm transition-colors">Medical Disclaimer</Link></li></ul></div>
                        <div><h3 className="text-white font-semibold mb-4">Contact</h3><ul className="space-y-3"><li className="flex items-start space-x-3"><MapPin className="h-4 w-4 text-gray-400 mt-0.5 flex-shrink-0" /><a href="https://maps.app.goo.gl/HJVXT2ghQCwvZzCB7" target="_blank" rel="noopener noreferrer" className="text-gray-400 text-sm hover:text-white">{contactAddress}</a></li><li className="flex items-center space-x-3"><Phone className="h-4 w-4 text-gray-400 flex-shrink-0" /><span className="text-gray-400 text-sm">{contactPhone} / {factoryPhone} / {contactPhone2}</span></li><li className="flex items-center space-x-3"><Mail className="h-4 w-4 text-gray-400 flex-shrink-0" /><span className="text-gray-400 text-sm">{contactEmail}</span></li></ul></div>
                    </div>
                    <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center"><p className="text-gray-400 text-sm">© 2026 NOVITA Pharmaceutical Co., Ltd. All Rights Reserved.</p><div className="flex items-center space-x-4 mt-4 md:mt-0"><a href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook className="h-5 w-5" /></a><a href="#" className="text-gray-400 hover:text-white transition-colors"><Linkedin className="h-5 w-5" /></a><a href="#" className="text-gray-400 hover:text-white transition-colors"><Youtube className="h-5 w-5" /></a></div></div>
                </div>
            </footer>
        </div>
    );
}
