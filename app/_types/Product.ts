import { CrudItemFieldType } from "@/app/_components/Crud/types";

export type ProductType = {
  id: number;
  name: string;
  description: string;
  category_id: number;
  company_id: number;
  image_id: number;
  created_at: string;
  updated_at: string;
};

export const ProductFields: CrudItemFieldType[] = [
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
    name: "image_id",
    label: "Image",
    type: "image",
  },
  {
    name: "company_id",
    label: "Company",
    type: "reference",
    referenceOptions: {
      labelFieldName: "name",
      editLink: "/admin/companies",
      searchApi: "/admin/companies",
    },
  },
  {
    name: "category_id",
    label: "Category",
    type: "reference",
    referenceOptions: {
      labelFieldName: "title",
      editLink: "/admin/categories",
      searchApi: "/admin/categories",
    },
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
