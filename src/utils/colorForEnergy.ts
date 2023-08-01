export function colorByEnergy(energy: string): string {
  if (energy === "A") return "#027702";
  if (energy === "B") return "#24B303";
  if (energy === "C") return "#7ECC2B";
  if (energy === "D") return "#FFE001";
  if (energy === "E") return "#F29021";
  if (energy === "F") return "#EB422D";
  if (energy === "G") return "#D60000";

  return "#333";
}
