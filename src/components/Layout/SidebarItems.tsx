import Link from "next/link";

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  href: string;
  isActive?: boolean;
}

const SidebarItems: React.FC<SidebarItemProps> = ({
  icon,
  label,
  href,
  isActive,
}) => {
  return (
    <Link href={href} className="hover:!no-underline">
      <div
        className={`transition-all duration-100 ease-in-out active:scale-[0.98] rounded-[11px] mb-1 border ${
          isActive
            ? "bg-primary/10 border-primary/10"
            : "border-transparent hover:bg-hover/50 hover:border-border/50"
        } max-w-full min-w-[37px]`}
      >
        <div className="flex items-center justify-between p-1.5 rounded-lg cursor-pointer select-none">
          <div className="flex gap-2 items-center">
            <div className="bg-secondary p-1 rounded-md shadow-sm shadow-black/20">
              {icon}
            </div>
            <p
              className={`line-clamp-1 ${
                isActive ? "!text-text" : "!text-text/60"
              }`}
            >
              {label}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SidebarItems;
