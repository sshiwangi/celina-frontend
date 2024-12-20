"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";

import {
  Globe,
  HelpCircle,
  Cpu,
  Users,
 
  FileText,
  
  Radio,
  
  User,
  ChartAreaIcon,
} from "lucide-react";
import Link from "next/link";

interface MenuItemProps {
  icon: React.ReactNode;
  label: string;
  isActive?: boolean;
  onClick?: () => void;
  href?: string;
  hasConnector?: boolean;
}

const MenuItem: React.FC<MenuItemProps> = ({
  icon,
  label,
  onClick,
  href,
  hasConnector,
}) => {
  const pathname = usePathname();
  // Check if this menu item's href matches the current path
  const isCurrentPath = href === pathname;

  // Base classes without hover states
  const baseClasses =
    "relative transition-all duration-100 ease-in-out active:scale-[0.98] rounded-[11px] mb-1 border max-w-full min-w-[37px]";

  // Separate classes for active and inactive states including their specific hover behaviors
  const stateClasses = isCurrentPath
    ? "bg-cyan-500 border-primary/10 hover:bg-cyan-700 hover:border-primary/20" // Active item hover
    : "border-transparent hover:bg-hover/50 hover:border-border/50"; // Inactive item hover

  const content = (
    <div className={`${baseClasses} ${stateClasses}`}>
      {hasConnector && (
        <div className="absolute z-0 top-[7px] left-[-18px] w-3 h-3 border-b-2 border-l-2 border-border rounded-bl-full" />
      )}
      <div className="flex items-center justify-between p-1.5 rounded-lg cursor-pointer select-none">
        <div className="flex gap-2 items-center">
          <div className="bg-secondary p-1 rounded-md shadow-sm shadow-black/20">
            {icon}
          </div>
          <div>
            <p
              className={`chakra-text line-clamp-1 ${
                isCurrentPath ? "!text-text" : "!text-text/60"
              }`}
            >
              {label}
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  return href ? (
    <a href={href} className="hover:!no-underline">
      {content}
    </a>
  ) : (
    <div onClick={onClick}>{content}</div>
  );
};

interface CollapsibleSectionProps {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
  isDefaultOpen?: boolean;
}

const CollapsibleSection: React.FC<CollapsibleSectionProps> = ({
  icon,
  label,
  children,
  isDefaultOpen = true,
}) => {
  const [isOpen, setIsOpen] = useState(isDefaultOpen);

  return (
    <div className="flex flex-col relative">
      <div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="border-0 ring-0 outline-none w-full"
        >
          <div className="group inline-flex items-center justify-between p-2 w-full">
            <div className="inline-flex items-center">
              <div className="flex items-center bg-secondary w-[22px] h-[22px] p-1 rounded-md shadow-sm shadow-black/20">
                {icon}
              </div>
              <span className="ml-2 text-text/40 text-[14px] group-hover:text-text">
                {label}
              </span>
            </div>
            <svg className="w-3 h-3 fill-text/40" viewBox="0 0 14 19">
              <path d="M6.50391 0C6.25 0 6.02539 0.0976562 5.83008 0.292969L0.253906 5.64453C0.107422 5.79102 0 5.99609 0 6.2793C0 6.78711 0.380859 7.17773 0.888672 7.17773C1.10352 7.17773 1.33789 7.11914 1.54297 6.91406L6.50391 2.06055L11.4551 6.91406C11.6699 7.10938 11.8945 7.17773 12.1094 7.17773C12.6172 7.17773 12.998 6.78711 12.998 6.2793C12.998 5.99609 12.9004 5.79102 12.7441 5.64453L7.16797 0.292969C6.97266 0.0976562 6.74805 0 6.50391 0Z" />
            </svg>
          </div>
        </button>
      </div>
      {isOpen && (
        <div className="relative">
          <div className="absolute left-[18px] top-0 bottom-0 w-[2px] bg-border" />
          <div className="pl-8">
            {React.Children.map(children, (child) => {
              if (React.isValidElement(child)) {
                return React.cloneElement(child, {
                  hasConnector: true,
                  ...child.props,
                });
              }
              return child;
            })}
          </div>
        </div>
      )}
    </div>
  );
};

const Sidebar = () => {

  return (
    <div className="relative hidden sm:flex bg-background">
      <div className="flex flex-col justify-between p-[18px] relative h-full w-[250px]">
        <div className="">
          <Link
            href={"/"}
            className="mb-8 px-2 py-4  text-3xl font-medium text-cyan-400 bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 "
          >
            <span>Celina</span>
          </Link>

          <div className="mt-4">
            <MenuItem
              icon={<Globe className="w-3.5 h-3.5 text-icon/30" />}
              label="Overview"
              href="/dashboard"
            />

            <CollapsibleSection
              icon={<Cpu className="w-3.5 h-3.5 text-icon/30" />}
              label="Platform"
            >
              <MenuItem
                icon={<Users className="w-3.5 h-3.5 text-icon/30" />}
                label="Agent Settings"
                href="/dashboard/agent-settings"
              />
              {/* <MenuItem
              icon={
                <Phone
                  className={`w-3.5 h-3.5 ${
                    pathname === "/dashboard/phone-numbers"
                      ? "text-primary"
                      : "text-icon/30"
                  }`}
                />
              }
              label="Phone Numbers"
              href="/dashboard/phone-numbers"
            /> */}
              <MenuItem
                icon={<FileText className="w-3.5 h-3.5 text-icon/30" />}
                label="Files"
                href="/dashboard/files"
              />

              <MenuItem
                icon={<ChartAreaIcon className="w-3.5 h-3.5 text-icon/30" />}
                label="Sales Report"
                href="/dashboard/sales-report"
              />
            </CollapsibleSection>

            <MenuItem
              icon={<Radio className="w-3.5 h-3.5 text-icon/30" />}
              label="Marketplace"
              href="/dashboard/marketplace"
            />
          </div>
        </div>

        <div className="flex flex-col relative gap-y-1">
          <MenuItem
            icon={<User className="w-3.5 h-3.5 text-icon/30" />}
            label="Profile"
            href="/account"
          />

          <div className="flex flex-row justify-between gap-x-2">
            <button
              className="inline-flex items-center whitespace-nowrap text-sm font-bold text-text px-4 py-2 w-full rounded-[10px] relative border border-cyan-300/50 bg-cyan-300/60 hover:border-cyan-300/70 ring-inset ring-2 ring-border/40 hover:ring-border/80 hover:bg-primary-hover h-auto pl-2 min-h-8 justify-between gap-1 active:scale-[0.98] overflow-hidden transition-all duration-150 ease-in-out"
              style={{ maxWidth: "77%" }}
            >
              <div className="bg-cyan-300/30 p-1 rounded-md shadow-sm shadow-black/10">
                <Globe className="w-[14px] h-[14px] text-text" />
              </div>
              <div className="overflow-hidden text-ellipsis ml-1">
                shiwangi.kumari@rankz.io&apos;s Org
              </div>
              <svg
                className="h-3 w-3 shrink-0 text-text opacity-50"
                viewBox="0 0 14 19"
              >
                <path d="M6.50391 18.8086C6.74805 18.8086 6.97266 18.7012 7.16797 18.5156L12.7441 13.1641C12.9004 13.0078 12.998 12.8125 12.998 12.5195C12.998 12.0117 12.6172 11.6309 12.1094 11.6309C11.8945 11.6309 11.6699 11.6992 11.4551 11.8945L6.50391 16.748L1.54297 11.8945C1.33789 11.6895 1.10352 11.6309 0.888672 11.6309C0.380859 11.6309 0 12.0117 0 12.5195C0 12.8125 0.107422 13.0078 0.253906 13.1641L5.83008 18.5156C6.02539 18.7012 6.25 18.8086 6.50391 18.8086Z" />
              </svg>
            </button>

            <button className="bg-secondary border-[1px] border-border cursor-pointer flex items-center justify-center px-2 py-1 h-[41px] w-[41px] rounded-xl transition-colors duration-200 hover:bg-secondary/70 hover:border-border/50 active:bg-secondary/80 active:border-border/80">
              <HelpCircle className="text-icon/50 w-[18px] h-[18px]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
