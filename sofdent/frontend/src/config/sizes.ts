export type SizeVariant = "small" | "medium" | "large";

export interface SizeConfig {
  closed: string;
  open: string;
  padding: string;
  itemPadding: string;
  iconSize: string;
  textSize: string;
  logoSize: string;
  logoText: string;
}

export const sizes: Record<SizeVariant, SizeConfig> = {
  small: {
    closed: "w-14",
    open: "w-56",
    padding: "p-2",
    itemPadding: "px-2 py-2",
    iconSize: "size-5",
    textSize: "text-sm",
    logoSize: "w-6 h-6",
    logoText: "text-sm",
  },
  medium: {
    closed: "w-16",
    open: "w-64",
    padding: "p-3",
    itemPadding: "px-3 py-3",
    iconSize: "size-6",
    textSize: "text-base",
    logoSize: "w-8 h-8",
    logoText: "text-lg",
  },
  large: {
    closed: "w-20",
    open: "w-72",
    padding: "p-4",
    itemPadding: "px-4 py-4",
    iconSize: "size-7",
    textSize: "text-lg",
    logoSize: "w-10 h-10",
    logoText: "text-xl",
  },
};

// Helper function to get size configuration
export const getSize = (size: SizeVariant): SizeConfig => {
  return sizes[size];
};

// Helper function to get all available sizes
export const getAvailableSizes = (): SizeVariant[] => {
  return Object.keys(sizes) as SizeVariant[];
};
