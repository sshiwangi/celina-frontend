import ToggleSwitch from "@/components/ui/toggle";

interface FunctionItemProps {
  title: string;
  description: string;
  checked: boolean;
  onChange: () => void;
  testId: string;
  readMoreLink?: string;
}

const FunctionItem = ({
//   icon,
  title,
  description,
  checked,
  onChange,
  testId,
  readMoreLink,
}: FunctionItemProps) => (
  <div
    className="space-y-2 flex flex-row items-center justify-between py-4"
    data-testid={`${testId}-item`}
  >
    <div className="flex flex-row items-center justify-start gap-x-4">
      {/* {icon} */}
      <div className="-ml-2">
        <label
          className="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 
                       inline-flex flex-1 lg:flex-none w-full lg:w-1/5 lg:min-w-[200px] 
                       items-center justify-between text-sm -mb-2 lg:mb-0 mt-2 lg:mt-0 text-text/60"
          data-testid={`${testId}-label`}
        >
          {title}
        </label>
        <p
          className="text-xs text-muted-foreground text-wrap"
          data-testid={`${testId}-description`}
        >
          {description}{" "}
          {readMoreLink && (
            <a
              href={readMoreLink}
              target="_blank"
              rel="noreferrer"
              className="italic"
              data-testid={`${testId}-read-more-link`}
            >
              Read More
            </a>
          )}
        </p>
      </div>
    </div>
    <ToggleSwitch
      checked={checked}
      onChange={onChange}
      testId={`${testId}-switch`}
    />
  </div>
);

export default FunctionItem;