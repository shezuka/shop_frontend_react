import React from "react";
import { CrudListViewPropsType } from "@/app/_components/Crud/types";
import CrudListItemField from "@/app/_components/Crud/List/CrudListItemField";
import Button from "@/app/_components/Button";
import CrudListTableItem from "@/app/_components/Crud/List/CrudListTableItem";

function CrudListTableView(props: CrudListViewPropsType) {
  const actions: string[] = [];
  if (props.onEditClick) actions.push("edit");
  if (props.onDeleteClick) actions.push("delete");

  const thClasses = "py-2";
  return (
    <div className="relative">
      <table className="w-full table-auto">
        <thead>
          <tr className="bg-primary-800 text-primary-100">
            {props.fields.map((field) => (
              <th key={field.name} className={thClasses}>
                {field.label}
              </th>
            ))}
            {actions.length ? <th className={thClasses}>Actions</th> : null}
          </tr>
        </thead>
        <tbody>
          {props.items.map((it) => (
            <CrudListTableItem
              key={it.id}
              item={it}
              fields={props.fields}
              onEditClick={props.onEditClick}
              onDeleteClick={props.onDeleteClick}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CrudListTableView;
