export type CrudItemFieldType = {
  name: string;
  label: string;
  type: "number" | "boolean" | "string" | "datetime";
};

export type CrudListViewPropsType = {
  fields: CrudItemFieldType[];
  items: any[];
};

export type CrudListItemFieldPropsType = {
  field: CrudItemFieldType;
  item: any;
};

export type PaginationPropsType = {
  currentPage: number;
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (inPage: number) => void;
};
