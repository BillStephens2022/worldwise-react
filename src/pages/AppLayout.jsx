export default function AppLayout({ children }) {   
    return (
        <div>
        <PageNav />
        {children}
        </div>
    );
}