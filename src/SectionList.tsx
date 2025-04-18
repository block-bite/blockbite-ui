import { Wrap } from "./Wrap";
import { Button } from "@wordpress/components";
import { useRef, useState } from "@wordpress/element";

import { TextControl } from "./TextControl";
import classNames from "classnames";

import PlusIcon from "@blockbite/icons/dist/Plus";
import TrashIcon from "@blockbite/icons/dist/Trash";

type SectionTypeProps = {
  id: string;
  name: string;
  ref?: any;
  code?: string;
  content?: any;
};

type SectionListProps = {
  sections: SectionTypeProps[];
  setSections: React.Dispatch<React.SetStateAction<any[]>>;
  activeSection: any;
  setActiveSection: any;
  Update: any;
  newSection: any;
  setCode: (code: string) => void;
  addons?: JSX.Element;
};

const SectionList = ({
  sections,
  setSections,
  activeSection,
  setActiveSection,
  Update,
  newSection,
  setCode,
  addons,
}: SectionListProps) => {
  const [renameSection, setRenameSection] = useState({
    id: "",
    name: "",
  });
  const textFieldRef = useRef<HTMLInputElement | null>(null);

  const addSection = () => {
    const createNewSection = { ...newSection() };
    setSections([...sections, createNewSection]);
  };

  const removeSection = () => {
    if (!activeSection || sections.length === 0) return;

    const newSections = sections.filter(
      (section) => section.id !== activeSection
    );

    let newActiveSection = null;

    if (newSections.length > 0) {
      // If we're not deleting the last section
      const currentIndex = sections.findIndex((s) => s.id === activeSection);
      const nextIndex = Math.min(currentIndex, newSections.length - 1);
      newActiveSection = newSections[nextIndex]?.id || newSections[0]?.id;
    } else {
      // If we're deleting the last section, create a new one
      const createNewSection = { ...newSection() };
      newSections.push(createNewSection);
      newActiveSection = createNewSection.id;
    }

    setSections(newSections);
    setActiveSection(newActiveSection);
    setCode(newSections.find((s) => s.id === newActiveSection)?.code || "");
  };

  const onBlurHandler = (value) => {
    setSections((prevSections: SectionTypeProps[]) =>
      prevSections.map(
        (section: SectionTypeProps): SectionTypeProps =>
          section.id === renameSection.id
            ? { ...section, name: value }
            : section
      )
    );

    setRenameSection({
      id: "",
      name: "",
    });
  };

  return (
    <Wrap important className="w-[200px] border-r">
      <ul className="h-[calc(100%-80px)] divide-y overflow-auto">
        {addons}
        <li>
          <ul className="divide-y border-b">
            {sections.map((section, index) => (
              <li
                key={`section__${index}__${section?.id}`}
                className="relative m-0"
              >
                <button
                  className={classNames(
                    "text-gray-medium w-full truncate bg-opacity-50 px-3 py-2 text-left text-sm/6 font-semibold hover:bg-easy hover:text-wordpress",
                    {
                      "bg-easy": section.id === activeSection,
                    }
                  )}
                  onClick={() => {
                    setActiveSection(section.id);
                    Update(activeSection, section.id);
                  }}
                  onDoubleClick={() => {
                    setRenameSection({
                      id: section.id,
                      name: section.name,
                    });
                  }}
                >
                  {section.name}
                </button>

                {renameSection.id === section.id && (
                  <TextControl
                    className="absolute left-0 top-0 h-full w-full"
                    defaultValue={renameSection.name}
                    onChange={(value) =>
                      setRenameSection({
                        ...renameSection,
                        name: value,
                      })
                    }
                    ref={textFieldRef}
                    onBlur={(value) => onBlurHandler(value)}
                  />
                )}
              </li>
            ))}
          </ul>
        </li>
      </ul>
      <Wrap className="flex justify-center gap-2 p-2">
        <Button
          onClick={addSection}
          icon={<PlusIcon />}
          variant="tertiary"
          size="compact"
        >
          Add
        </Button>
        <Button
          onClick={removeSection}
          icon={<TrashIcon />}
          variant="tertiary"
          size="compact"
        >
          Remove
        </Button>
      </Wrap>
    </Wrap>
  );
};

export default SectionList;
