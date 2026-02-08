import { PropsWithChildren, ReactNode } from "react";

type DashboardMainLayoutProps = Readonly<
  PropsWithChildren<{
    feed?: ReactNode;
    stats?: ReactNode;
  }>
>;

export default function DashboardMainLayout({ feed, stats  }: DashboardMainLayoutProps) {
  return (
    <div>
      <div>{feed}</div>
      <div>{stats}</div>
    </div>
  );
}
