import React from "react";
import { CrudListViewPropsType } from "@/app/_components/Crud/types";
import CrudListItemTextField from "@/app/_components/Crud/List/CrudListItemTextField";
import Button from "@/app/_components/Button";

function CrudListTableView(props: CrudListViewPropsType) {
  const actions: string[] = [];
  if (props.onEditClick) actions.push("edit");
  if (props.onDeleteClick) actions.push("delete");

  const thClasses = "py-2";
  const tdClasses = "px-4 py-2";
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
            <tr key={it.id} className="hover:bg-primary-200">
              {props.fields.map((field) => (
                <td key={field.name} className={tdClasses}>
                  <CrudListItemTextField item={it} field={field} />
                </td>
              ))}
              {actions.length ? (
                <td>
                  <div className="flex flex-row">
                    {actions.includes("edit") ? (
                      <Button
                        size="sm"
                        className="flex-1"
                        onClick={() =>
                          props.onEditClick && props.onEditClick(it)
                        }
                      >
                        Edit
                      </Button>
                    ) : null}
                    {actions.includes("delete") ? (
                      <Button
                        size="sm"
                        className="flex-1 bg-red-600 hover:bg-red-700"
                        onClick={() =>
                          props.onDeleteClick && props.onDeleteClick(it)
                        }
                      >
                        Delete
                      </Button>
                    ) : null}
                  </div>
                </td>
              ) : null}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CrudListTableView;
