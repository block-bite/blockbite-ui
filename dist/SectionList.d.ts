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
declare const SectionList: ({ sections, setSections, activeSection, setActiveSection, Update, newSection, setCode, addons, }: SectionListProps) => import("react/jsx-runtime").JSX.Element;
export default SectionList;
