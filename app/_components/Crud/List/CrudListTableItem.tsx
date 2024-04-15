"use client";

import { CrudItemFieldType } from "@/app/_components/Crud/types";
import CrudListItemField from "@/app/_components/Crud/List/CrudListItemField";
import Button from "@/app/_components/Button";
import React from "react";

function CrudListTableItem(
  props: Readonly<{
    item: any;
    fields: CrudItemFieldType[];
    onEditClick?: (item: any) => void;
    onDeleteClick?: (item: any) => void;
  }>,
) {
  const actions = !!props.onEditClick || !!props.onDeleteClick;
  const tdClasses = "px-4 py-2";
  return (
    <tr className="hover:bg-primary-200">
      {props.fields.map((field) => (
        <td key={field.name} className={tdClasses}>
          <CrudListItemField item={props.item} field={field} />
        </td>
      ))}
      {actions ? (
        <td>
          <div className="flex flex-row">
            {props.onEditClick ? (
              <Button
                size="sm"
                className="flex-1"
                onClick={() =>
                  props.onEditClick && props.onEditClick(props.item)
                }
              >
                Edit
              </Button>
            ) : null}
            {props.onDeleteClick ? (
              <Button
                size="sm"
                className="flex-1 bg-red-600 hover:bg-red-700"
                onClick={() =>
                  props.onDeleteClick && props.onDeleteClick(props.item)
                }
              >
                Delete
              </Button>
            ) : null}
          </div>
        </td>
      ) : null}
    </tr>
  );
}

export default CrudListTableItem;
