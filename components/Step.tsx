interface ComponentProps {
  no: number;
  name: string;
  onClick?: () => void;
  active: boolean;
}

const Step: React.FC<ComponentProps> = ({ no, name, active, onClick }) => {
  return (
    <li className="flex items-center gap-5 text-white tracking-widest">
      <button className={`w-8 h-8 centralize rounded-full border border-light-gray ${active && "bg-light-blue text-marine-blue font-bold"}`} onClick={onClick}>
        {no}
      </button>
      <div className="hidden lg:flex flex-col uppercase">
        <small className="text-cool-gray">Step {no}</small>
        <span className="font-medium">{name}</span>
      </div>
    </li>
  );
};

export default Step;
