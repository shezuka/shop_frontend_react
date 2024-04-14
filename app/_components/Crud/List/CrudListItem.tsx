"use client";

import { CrudItemFieldType } from "@/app/_components/Crud/types";

function CrudListItem({
  item,
  fields,
}: Readonly<{ item: any; fields: CrudItemFieldType[] }>) {
  return (
    <tr>
      {fields.map((field) => (
        <td key={field.name}>{item[field.name]}</td>
      ))}
    </tr>
  );
}

export default CrudListItem;
