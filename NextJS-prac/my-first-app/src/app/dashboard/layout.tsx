export default function DashboardLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <section>
            <nav>
                This is our child dashboard
            </nav>
            {children}
        </section>
    )
  }