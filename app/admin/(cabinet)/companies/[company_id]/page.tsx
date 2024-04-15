import React from "react";
import CrudEditItem from "@/app/_components/Crud/Edit/CrudEditItem";
import { CompanyFields } from "@/app/_types/Company";

function CompanyPage({ params }: Readonly<{ params: { company_id: string } }>) {
  return (
    <CrudEditItem
      itemId={parseInt(params.company_id)}
      pageTitle={"Edit company"}
      fields={CompanyFields}
      getItemApiUrl={"/admin/companies"}
      editItemApiUrl={"/admin/companies"}
      onSuccessRedirectUri={"/admin/companies"}
    />
  );
}

export default CompanyPage;
