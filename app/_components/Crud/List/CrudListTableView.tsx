import React from "react";
import { CrudListViewPropsType } from "@/app/_components/Crud/types";
import CrudListItemTextField from "@/app/_components/Crud/List/CrudListItemTextField";

function CrudListTableView(props: CrudListViewPropsType) {
  return (
    <div className="relative">
      <table className="w-full table-auto">
        <thead>
          <tr className="bg-primary-800 text-primary-100">
            {props.fields.map((field) => (
              <th key={field.name} className="py-2">
                {field.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {props.items.map((it) => (
            <tr key={it.id} className="hover:bg-primary-200">
              {props.fields.map((field) => (
                <td key={field.name} className="py-2 px-4">
                  <CrudListItemTextField item={it} field={field} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CrudListTableView;
