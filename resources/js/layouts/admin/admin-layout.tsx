import { Link } from '@inertiajs/react';
import { ReactNode } from 'react';
import { LayoutDashboard, FileText, Package, Newspaper, Briefcase, Settings, MessageSquare } from 'lucide-react';
import AppLogo from '@/components/app-logo';
import { AppContent } from '@/components/app-content';
import { AppShell } from '@/components/app-shell';
import { AppSidebarHeader } from '@/components/app-sidebar-header';
import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import type { BreadcrumbItem, NavItem } from '@/types';

const adminNavItems: NavItem[] = [
    { title: 'Dashboard', href: '/admin', icon: LayoutDashboard },
    { title: 'Pages', href: '/admin/pages', icon: FileText },
    { title: 'Products', href: '/admin/products', icon: Package },
    { title: 'News', href: '/admin/news', icon: Newspaper },
    { title: 'Jobs', href: '/admin/jobs', icon: Briefcase },
    { title: 'Contacts', href: '/admin/contacts', icon: MessageSquare },
    { title: 'Settings', href: '/admin/settings', icon: Settings },
];

export default function AdminLayout({ children, breadcrumbs = [] }: { children: ReactNode; breadcrumbs?: BreadcrumbItem[] }) {
    return (
        <AppShell variant="sidebar">
            <Sidebar collapsible="icon" variant="inset">
                <SidebarHeader>
                    <SidebarMenu>
                        <SidebarMenuItem>
                            <SidebarMenuButton size="lg" asChild>
                                <Link href="/admin" prefetch>
                                    <AppLogo />
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    </SidebarMenu>
                </SidebarHeader>
                <SidebarContent>
                    <NavMain items={adminNavItems} />
                </SidebarContent>
                <SidebarFooter>
                    <NavUser />
                </SidebarFooter>
            </Sidebar>
            <AppContent variant="sidebar" className="overflow-x-hidden">
                <AppSidebarHeader breadcrumbs={breadcrumbs} />
                <div className="flex flex-1 flex-col gap-4 p-4 md:p-6 bg-muted/20 min-h-[calc(100svh-4rem)]">{children}</div>
            </AppContent>
        </AppShell>
    );
}
