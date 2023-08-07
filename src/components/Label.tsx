import { FC } from "react";

interface LabelProps {
  label: string;
}

const Label: FC<LabelProps> = ({ label }) => {
  return (
    <h4 className="font-semibold text-zinc-800 tracking-wider text-lg">
      ____{label!}____
    </h4>
  );
};

export default Label;
