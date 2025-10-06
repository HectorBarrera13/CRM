export type ColorTheme =
  | "blue"
  | "purple"
  | "green"
  | "orange"
  | "pink"
  | "indigo";

export interface ThemeConfig {
  primary: string;
  secondary: string;
  hover: string;
  active: string;
  shadow: string;
  accent: string;
}

export const themes: Record<ColorTheme, ThemeConfig> = {
  blue: {
    primary: "from-blue-500 to-blue-600",
    secondary: "from-blue-400 to-blue-500",
    hover: "hover:bg-blue-50 dark:hover:bg-blue-900/20",
    active: "bg-gradient-to-r from-blue-500 to-blue-600",
    shadow: "shadow-blue-500/25",
    accent: "from-blue-400 to-blue-500",
  },
  purple: {
    primary: "from-purple-500 to-purple-600",
    secondary: "from-purple-400 to-purple-500",
    hover: "hover:bg-purple-50 dark:hover:bg-purple-900/20",
    active: "bg-gradient-to-r from-purple-500 to-purple-600",
    shadow: "shadow-purple-500/25",
    accent: "from-purple-400 to-purple-500",
  },
  green: {
    primary: "from-green-500 to-green-600",
    secondary: "from-green-400 to-green-500",
    hover: "hover:bg-green-50 dark:hover:bg-green-900/20",
    active: "bg-gradient-to-r from-green-500 to-green-600",
    shadow: "shadow-green-500/25",
    accent: "from-green-400 to-green-500",
  },
  orange: {
    primary: "from-orange-500 to-orange-600",
    secondary: "from-orange-400 to-orange-500",
    hover: "hover:bg-orange-50 dark:hover:bg-orange-900/20",
    active: "bg-gradient-to-r from-orange-500 to-orange-600",
    shadow: "shadow-orange-500/25",
    accent: "from-orange-400 to-orange-500",
  },
  pink: {
    primary: "from-pink-500 to-pink-600",
    secondary: "from-pink-400 to-pink-500",
    hover: "hover:bg-pink-50 dark:hover:bg-pink-900/20",
    active: "bg-gradient-to-r from-pink-500 to-pink-600",
    shadow: "shadow-pink-500/25",
    accent: "from-pink-400 to-pink-500",
  },
  indigo: {
    primary: "from-indigo-500 to-indigo-600",
    secondary: "from-indigo-400 to-indigo-500",
    hover: "hover:bg-indigo-50 dark:hover:bg-indigo-900/20",
    active: "bg-gradient-to-r from-indigo-500 to-indigo-600",
    shadow: "shadow-indigo-500/25",
    accent: "from-indigo-400 to-indigo-500",
  },
};

// Helper function to get theme configuration
export const getTheme = (theme: ColorTheme): ThemeConfig => {
  return themes[theme];
};

// Helper function to get all available themes
export const getAvailableThemes = (): ColorTheme[] => {
  return Object.keys(themes) as ColorTheme[];
};
