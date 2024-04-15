import React from "react";
import CrudListPage from "@/app/_components/Crud/List/CrudListPage";
import { CompanyFields } from "@/app/_types/Company";

function CompaniesPage() {
  return (
    <CrudListPage
      pageTitle={"Companies"}
      fields={CompanyFields}
      itemsApiUrl="/admin/companies"
      deleteUri="/admin/companies"
      create
      edit
    />
  );
}

export default CompaniesPage;
