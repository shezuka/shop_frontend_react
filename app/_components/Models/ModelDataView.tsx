"use client";

import React from "react";
import { CrudItemFieldType } from "@/app/_components/Crud/types";
import CrudListItemField from "@/app/_components/Crud/List/CrudListItemField";

type ModelViewDataPropsType = {
  value: any[];
  onItemClick?: (item: any) => void;
  fields: CrudItemFieldType[];
};

function ModelDataView(props: ModelViewDataPropsType) {
  return (
    <table className="w-full table-auto">
      <thead>
        <tr>
          {props.fields.map((field) => (
            <th key={field.name}>{field.label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {props.value.map((item) => (
          <tr
            key={item.id}
            onClick={() => props.onItemClick && props.onItemClick(item)}
            className={`${props.onItemClick ? "cursor-pointer" : ""} hover:bg-primary-300`}
          >
            {props.fields.map((field) => (
              <td key={field.name} className="pt-2">
                <CrudListItemField field={field} item={item} />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ModelDataView;
