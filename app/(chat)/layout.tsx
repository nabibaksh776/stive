//@ts-nocheck
import { cookies } from 'next/headers';

import { AppSidebar } from '@/components/custom/app-sidebar';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';



export const experimental_ppr = true;

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {


  return (
    <SidebarProvider >
      <AppSidebar user={{user : null}} />
      <SidebarInset>{children}</SidebarInset>
    </SidebarProvider>
  );
}
