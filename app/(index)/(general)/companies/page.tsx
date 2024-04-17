"use client";

import React from "react";
import ModelViewPage from "@/app/_components/Models/ModelViewPage";
import { CrudItemFieldType } from "@/app/_components/Crud/types";

const fields: CrudItemFieldType[] = [
  {
    name: "logo_id",
    type: "image",
    label: "Logo",
  },
  {
    name: "name",
    type: "string",
    label: "Name",
  },
  {
    name: "description",
    type: "text",
    label: "Description",
  },
];

function CompaniesPage() {
  return <ModelViewPage apiUri="/companies" fields={fields} />;
}

export default CompaniesPage;
