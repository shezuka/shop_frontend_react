export type AssetUploaderPropsType = {
  label: string;
  value: string;
  onChange: (newAssetId: number | null) => void;
  accept: string;
  showImage?: boolean;
  removable?: boolean;
};
