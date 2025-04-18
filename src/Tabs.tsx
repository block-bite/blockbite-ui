import { Wrap } from "./Wrap";
import { TabPanel } from "@wordpress/components";
import { createContext, useContext, useState } from "@wordpress/element";
import classNames from "classnames";

const TabsContext = createContext<{
  activeTab: string | undefined;
  setActiveTab: React.Dispatch<React.SetStateAction<string | undefined>>;
} | null>(null);

type TabsProps = {
  className?: string;
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  children?: React.ReactNode;
};

export const TabsWrapper = ({
  children,
  defaultValue,
  value,
  onValueChange,
  ...rest
}: TabsProps) => {
  const isControlled = value !== undefined;

  const [internalValue, setInternalValue] = useState(defaultValue || "");

  const activeTab = isControlled ? value : internalValue;

  const handleTabChange = (newValue: string) => {
    if (!isControlled) {
      setInternalValue(newValue);
    }

    if (onValueChange) {
      onValueChange(newValue);
    }
  };

  const providerValue = {
    activeTab,
    setActiveTab: handleTabChange,
  };

  return (
    <TabsContext.Provider value={providerValue}>
      <Wrap important className={rest.className}>
        {children}
      </Wrap>
    </TabsContext.Provider>
  );
};

type TabsListProps = {
  options: { name: string; title: string; icon?: any }[];
  children?: React.ReactNode;
  onValueChange?: (value: string) => void;
  className?: string;
};

export const TabsList = ({
  options,
  children,
  className,
  onValueChange,
}: TabsListProps) => {
  const context = useContext(TabsContext);
  const setActiveTab = onValueChange ? onValueChange : context?.setActiveTab;

  return (
    <TabPanel
      className={classNames("tabs-list", className)}
      tabs={options}
      onSelect={(tabName) => {
        setActiveTab(tabName);
      }}
    >
      {() => children}
    </TabPanel>
  );
};

type TabsContentProps = {
  value: string;
  children: React.ReactNode;
  className?: string;
};

export const TabsContent = ({
  value,
  children,
  className,
}: TabsContentProps) => {
  const context = useContext(TabsContext);
  const activeTab = context?.activeTab;

  return activeTab === value ? (
    <Wrap className={className}>{children}</Wrap>
  ) : null;
};
