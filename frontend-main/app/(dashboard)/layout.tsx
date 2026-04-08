import CommandCenterLayout from '@/components/CommandCenterLayout';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <CommandCenterLayout>{children}</CommandCenterLayout>;
}
