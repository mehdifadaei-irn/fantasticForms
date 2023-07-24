export function colorByEnergy(energy: string): string {
  if (energy === "A") return "#052e16";
  if (energy === "B") return "#15803d";
  if (energy === "C") return "#22c55e";
  if (energy === "D") return "#facc15";
  if (energy === "E") return "#f97316";
  if (energy === "F") return "#dc2626";
  if (energy === "G") return "#7f1d1d";

  return "#333";
}
