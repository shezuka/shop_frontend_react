export type CrudItemFieldType = {
  name: string;
  label: string;
  type: "number" | "boolean" | "string" | "datetime";
  editable?: boolean;
};

export type CrudListViewPropsType = {
  fields: CrudItemFieldType[];
  items: any[];
  onEditClick?: (item: any) => void;
  onDeleteClick?: (item: any) => void;
};

export type CrudListItemFieldPropsType = {
  field: CrudItemFieldType;
  item: any;
};

export type CrudCreateItemPropsType = {
  pageTitle: string;
  fields: CrudItemFieldType[];
  createItemApiUrl: string;
  onSuccessRedirectUri: string;
};

export type CrudEditItemPropsType = {
  itemId: number;
  pageTitle: string;
  fields: CrudItemFieldType[];
  getItemApiUrl: string;
  editItemApiUrl: string;
  onSuccessRedirectUri: string;
};

export type CrudManageItemPropsType = {
  item: any;
  fields: CrudItemFieldType[];
  onFieldChange: (fieldName: string, newValue: any) => void;
};

export type CrudEditItemFieldPropsType = {
  item: any;
  field: CrudItemFieldType;
  onFieldChange: (fieldName: string, newValue: any) => void;
};

export type PaginationPropsType = {
  currentPage: number;
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (inPage: number) => void;
};
