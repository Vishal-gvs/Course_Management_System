import type { ReactNode } from "react";
import { getRole } from "../utils/auth";

export default function RoleProtected({
  allowedRoles,
  children,
}: {
  allowedRoles: string[];
  children: ReactNode;
}) {
  const role = getRole();
  if (!allowedRoles.includes(role)) {
    return <div className="text-center text-red-600 mt-10">Access Denied</div>;
  }
  return <>{children}</>;
}
