import { Link } from '@inertiajs/react';
import { LayoutDashboard, FileText, Package, Newspaper, Briefcase, Settings, MessageSquare } from 'lucide-react';
import AppLogo from '@/components/app-logo';
import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@/components/ui/sidebar';
import type { NavItem } from '@/types';

const mainNavItems: NavItem[] = [
    { title: 'Dashboard', href: '/admin', icon: LayoutDashboard },
    { title: 'Pages', href: '/admin/pages', icon: FileText },
    { title: 'Products', href: '/admin/products', icon: Package },
    { title: 'News', href: '/admin/news', icon: Newspaper },
    { title: 'Jobs', href: '/admin/jobs', icon: Briefcase },
    { title: 'Contacts', href: '/admin/contacts', icon: MessageSquare },
    { title: 'Settings', href: '/admin/settings', icon: Settings },
];

export function AppSidebar() {
    return (
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
                <NavMain items={mainNavItems} />
            </SidebarContent>

            <SidebarFooter>
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}
