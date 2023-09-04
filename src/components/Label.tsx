import { FC } from "react";

interface LabelProps {
  label: string;
}

const Label: FC<LabelProps> = ({ label }) => {
  return (
    <p className="bg-slate-200 font-[400] w-[200px] text-center text-zinc-800 tracking-wider text-lg">
      {label!}
    </p>
  );
};

export default Label;
