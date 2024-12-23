interface ToggleSwitchProps {
  checked: boolean;
  onChange: () => void;
  testId?: string;
}

const ToggleSwitch = ({ checked, onChange, testId }: ToggleSwitchProps) => (
  <button
    type="button"
    role="switch"
    aria-checked={checked}
    data-state={checked ? "checked" : "unchecked"}
    onClick={onChange}
    className="peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full 
             border-1 border-transparent shadow-md ring-2 ring-gray-700/70 
             data-[state=checked]:ring-primary transition-colors focus-visible:outline-none 
             focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 
             focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 
             data-[state=checked]:bg-primary data-[state=unchecked]:bg-gray-700/70"
    data-testid={testId}
  >
    <span
      data-state={checked ? "checked" : "unchecked"}
      className="pointer-events-none block h-4 w-4 rounded-full bg-gradient-to-br 
                from-gray-400 to-white shadow-sm shadow-black/60 ring-2 ring-white 
                transition-transform data-[state=checked]:translate-x-4 
                data-[state=unchecked]:translate-x-0.5"
    />
  </button>
);

export default ToggleSwitch;
