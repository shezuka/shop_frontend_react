import { CrudItemFieldType } from "@/app/_components/Crud/types";

export type CompanyType = {
  id: number;
  name: string;
  logo_id: number;
  description: string;
  created_at: string;
  updated_at: string;
};

export const CompanyFields: CrudItemFieldType[] = [
  {
    name: "id",
    label: "ID",
    type: "number",
    editable: false,
  },
  {
    name: "name",
    label: "Name",
    type: "string",
  },
  {
    name: "description",
    label: "Description",
    type: "text",
  },
  {
    name: "logo_id",
    label: "Logo",
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
