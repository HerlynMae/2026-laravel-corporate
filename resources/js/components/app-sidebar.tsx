import { Link } from '@inertiajs/react';
import {
    BookCheck,
    BookMarked,
    BookOpen,
    Building,
    ChartNoAxesGantt,
    CircuitBoard,
    FolderGit2,
    KeyRound,
    LayoutGrid,
    User,
    Users,
} from 'lucide-react';
import AppLogo from '@/components/app-logo';
import { NavFooter } from '@/components/nav-footer';
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
import { dashboard } from '@/routes';
import type { NavItem } from '@/types';
import employees from '@/routes/employees';
import roles from '@/routes/roles';
import departments from '@/routes/departments';
import projects from '@/routes/projects';
import tasks from '@/routes/tasks';

// const mainNavItems: NavItem[] = [
//     {
//         title: 'Dashboard',
//         href: dashboard(),
//         icon: LayoutGrid,
//     },
//     {
//         title: 'Employees',
//         href: employees.index(),
//         icon: User,
//     },
//     {
//         title: 'Departments',
//         href: departments.index(),
//         icon: Building,
//     },
//     {
//         title: 'Projects',
//         href: projects.index(),
//         icon: BookCheck,
//     },
//     {
//         title: 'Tasks',
//         href: tasks.index(),
//         icon: BookMarked,
//     },
//     {
//         title: 'Users',
//         href: employees.index(),
//         icon: Users,
//     },
//     {
//         title: 'Roles',
//         href: roles.index(),
//         icon: CircuitBoard,
//     },
// ];

const mainNavItems: NavItem[] = [
    {
        title: 'Dashboard',
        href: dashboard(),
        icon: LayoutGrid,
    },
    {
        title: 'Employees',
        href: employees.index(),
        icon: Users,
        permission: 'view employees',
    },
    {
        title: 'Projects',
        href: projects.index(),
        icon: ChartNoAxesGantt,
        permission: 'view projects',
    },
    {
        title: 'Tasks',
        href: tasks.index(),
        icon: ChartNoAxesGantt,
        permission: 'view tasks',
    },
    {
        title: 'Departments',
        href: departments.index(),
        icon: KeyRound,
        permission: 'manage departments',
    },
    {
        title: 'Users',
        href: dashboard(),
        icon: KeyRound,
        permission: 'manage users',
    },
    {
        title: 'Roles',
        href: roles.index(),
        icon: KeyRound,
        permission: 'manage roles',
    },
];
const footerNavItems: NavItem[] = [
    {
        title: 'Repository',
        href: 'https://github.com/laravel/react-starter-kit',
        icon: FolderGit2,
    },
    {
        title: 'Documentation',
        href: 'https://laravel.com/docs/starter-kits#react',
        icon: BookOpen,
    },
];

export function AppSidebar() {
    return (
        <Sidebar collapsible="icon" variant="inset">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href={dashboard()} prefetch>
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
                <NavFooter items={footerNavItems} className="mt-auto" />
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}
