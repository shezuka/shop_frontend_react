"use client";

import React from "react";
import axios from "@/app/_utils/axios";

type CrudDataGetter = {
  apiUri: string;
  q?: string;
  offset: number;
  limit: number;
  children: (value: any[] | null) => React.ReactElement;
};

function CrudDataGetter(props: CrudDataGetter) {
  const [value, setValue] = React.useState<any[] | null>([]);

  React.useEffect(() => {
    let cancel = false;

    axios
      .get(props.apiUri, {
        params: {
          q: props.q,
          offset: props.offset,
          limit: props.limit,
        },
      })
      .then((resp) => {
        if (cancel) return;
        setValue(resp.data);
      });

    return () => {
      cancel = true;
    };
  }, [props.q, props.offset, props.limit, props.apiUri]);

  return props.children(value);
}

export default CrudDataGetter;
