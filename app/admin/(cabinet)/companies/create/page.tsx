import React from "react";
import CrudCreateItem from "@/app/_components/Crud/Create/CrudCreateItem";
import { CompanyFields } from "@/app/_types/Company";

function CompanyCreatePage() {
  return (
    <CrudCreateItem
      pageTitle={"Create company"}
      fields={CompanyFields}
      createItemApiUrl="/admin/companies"
      onSuccessRedirectUri="/admin/companies"
    />
  );
}

export default CompanyCreatePage;
