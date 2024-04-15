import React from "react";
import { CrudListItemFieldPropsType } from "@/app/_components/Crud/types";
import LoaderSpinner from "@/app/_components/Loader/LoaderSpinner";
import axios from "@/app/_utils/axios";
import Link from "next/link";

function CrudListItemReferenceField({
  field,
  item,
}: CrudListItemFieldPropsType) {
  const value = item[field.name];

  const [referencedItem, setReferencedItem] = React.useState<any>(null);
  const [loading, setLoading] = React.useState(!!value);

  React.useEffect(() => {
    if (!value || !field.referenceOptions) {
      setLoading(false);
      return;
    }

    let cancel = false;
    setLoading(true);

    axios
      .get(`${field.referenceOptions.searchApi}/${value}`)
      .then((response) => {
        if (cancel) return;
        setReferencedItem(response.data);
        setLoading(false);
      });

    return () => {
      cancel = true;
    };
  }, [field, value]);

  if (loading) {
    return (
      <div className="w-full h-full flex justify-center items-center">
        <LoaderSpinner />
      </div>
    );
  }

  if (!referencedItem || !field.referenceOptions) return null;

  const label = referencedItem[field.referenceOptions.labelFieldName];
  if (field.referenceOptions.editLink) {
    return (
      <Link href={`${field.referenceOptions.editLink}/${referencedItem.id}`}>
        {label}
      </Link>
    );
  }
  return label;
}

export default CrudListItemReferenceField;
