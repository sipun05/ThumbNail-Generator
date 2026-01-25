export type ColorScheme = {
  id: string;
  name: string;
  colors: string[];
};

export const colorSchemes: ColorScheme[] = [
  {
    id: "vibrant",
    name: "Vibrant",
    colors: ["#ff0057", "#ff7a00", "#ffd500"],
  },
  {
    id: "cool",
    name: "Cool Blues",
    colors: ["#0ea5e9", "#2563eb", "#1e40af"],
  },
  {
    id: "dark",
    name: "Dark Mode",
    colors: ["#09090b", "#18181b", "#27272a"],
  },
  {
    id: "pastel",
    name: "Pastel",
    colors: ["#fbcfe8", "#e9d5ff", "#bfdbfe"],
  },
  {
    id: "earth",
    name: "Earth",
    colors: ["#78350f", "#92400e", "#a16207"],
  },
  {
    id: "neon",
    name: "Neon",
    colors: ["#22d3ee", "#a855f7", "#ec4899"],
  },
];
