import { PageHeader } from "@/components/ui/layout/page-header";

export default function DeviceLayout({ children, params }: { children: React.ReactNode, params: { device: string } }) {
  return (
    <>
      <PageHeader title={params.device} />
      <main>{children}</main>
    </>
  )
}