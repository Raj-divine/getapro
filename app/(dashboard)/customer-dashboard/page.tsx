import AppSidebar from "@/components/CustomerDashboardPage/AppSidebar";
import { Separator } from "@/components/ui/separator";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export default function CustomerDashboardPage() {
    return (
        <>
            <main>
                <SidebarProvider>
                    <AppSidebar />
                    <SidebarInset>
                        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
                            <SidebarTrigger className="-ml-1" />
                            <Separator orientation="vertical" className="mr-2 h-4" />
                        </header>

                    </SidebarInset>
                </SidebarProvider>
            </main>
        </>
    );
}
