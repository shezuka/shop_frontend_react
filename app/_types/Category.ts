import { CrudItemFieldType } from "@/app/_components/Crud/types";

export type CategoryType = {
  id: number;
  title: string;
  parent_category_id: number;
  created_at: string;
  updated_at: string;
};

export const CategoryFields: CrudItemFieldType[] = [
  {
    name: "id",
    label: "ID",
    type: "number",
    editable: false,
  },
  {
    name: "title",
    label: "Title",
    type: "string",
  },
  {
    name: "image_id",
    label: "Image",
    type: "image",
  },
  {
    name: "created_at",
    label: "Created at",
    type: "datetime",
    editable: false,
  },
  {
    name: "updated_at",
    label: "Updated at",
    type: "datetime",
    editable: false,
  },
];
