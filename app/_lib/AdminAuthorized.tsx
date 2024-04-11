"use client";

import React from "react";
import { redirect, useRouter } from "next/navigation";
import checkAdminToken from "@/app/_lib/checkAdminToken";

export default function adminAuthorized<P extends object>(
  OriginalComponent: React.ComponentType<P> | React.FunctionComponent<P>,
): React.ComponentType<P> {
  function WrappedComponent(props: P): React.JSX.Element | null {
    const router = useRouter();
    const [tokenVerified, setTokenVerified] = React.useState(false);

    React.useEffect(() => {
      let cancel = false;

      checkAdminToken().then((isValid) => {
        if (cancel) return;
        setTokenVerified(true);
        if (!isValid) {
          router.push("/admin/login");
        }
      });

      return () => {
        cancel = true;
      };
    }, [router]);

    if (!tokenVerified) return null;

    return <OriginalComponent {...props} />;
  }

  return WrappedComponent;
}
