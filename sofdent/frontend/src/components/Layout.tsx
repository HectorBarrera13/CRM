import SideBar from "./SideBar";

interface LayoutProps {
  children: React.ReactNode;
  onNavigate?: (page: string) => void;
  currentPage?: string;
  onLogout?: () => void;
}

function Layout({ children, onNavigate, currentPage, onLogout }: LayoutProps) {
  return (
    <div className="flex h-screen bg-slate-50 dark:bg-slate-900">
      {/* Sidebar */}
      <SideBar
        onNavigate={onNavigate}
        currentPage={currentPage}
        onLogout={onLogout}
      />

      {/* Main Content Area */}
      <main className="flex-1 overflow-auto">
        <div className="p-6">{children}</div>
      </main>
    </div>
  );
}

export default Layout;
