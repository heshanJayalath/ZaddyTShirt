import swatch from "../Assets/Customer/CustomTShirt/swatch.png";
import fileIcon from "../Assets/Customer/CustomTShirt/file.png";
import ai from "../Assets/Customer/CustomTShirt/ai.png";
import logoShirt from "../Assets/Customer/CustomTShirt/logo-tshirt.png";
import stylishShirt from "../Assets/Customer/CustomTShirt/stylish-tshirt.png";

export const EditorTabs = [
  {
    name: "colorpicker",
    icon: swatch,
  },
  {
    name: "filepicker",
    icon: fileIcon,
  },
  {
    name: "aipicker",
    icon: ai,
  },
];

export const FilterTabs = [
  {
    name: "logoShirt",
    icon: logoShirt,
  },
  {
    name: "stylishShirt",
    icon: stylishShirt,
  },
];

export const DecalTypes = {
  logo: {
    stateProperty: "logoDecal",
    filterTab: "logoShirt",
  },
  full: {
    stateProperty: "fullDecal",
    filterTab: "stylishShirt",
  },
};
