import React from "react";

import AutocompleteDropdown from "./components/ui/AutocompleteDropdown";
import { Badge } from "./components/ui/Badge";
import BitePreview from "./components/ui/BitePreview";
import { DisappearingMessage } from "./components/ui/DisappearingMessage";
import FloatingPanel from "./components/ui/FloatingPanel";
import FocalPointControl from "./components/ui/FocalPointControl";
import LinkPicker from "./components/ui/LinkPicker";
import MediaPicker from "./components/ui/MediaPicker";
import MetricsControl from "./components/ui/MetricsControl";
// import { NewWindowPortal } from "./components/ui/NewWindowPortal";
import { PasswordInput } from "./components/ui/PasswordInput";
import RangeSlider from "./components/ui/RangeSlider";
import ResponsiveImage from "./components/ui/ResponsiveImage";
import SectionList from "./components/ui/SectionList";
import SingleBlockTypeAppender from "./components/ui/SingleBlockTypeAppender";
import { TabsWrapper } from "./components/ui/Tabs";
import { TextControl } from "./components/ui/TextControl";
import { TextControlLabel } from "./components/ui/TextControlLabel";
import { ToggleGroup } from "./components/ui/ToggleGroup";

const App = () => {
  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1 style={{ marginBottom: "2rem" }}>
        🧪 Blockbite UI Component Preview
      </h1>
      <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
        <Preview name="AutocompleteDropdown">
          <AutocompleteDropdown
            defaultValue=""
            options={[
              {
                label: "Option 1",
                value: "option-1",
              },
              {
                label: "Option 2",
                value: "option-2",
              },
              {
                label: "Option 3",
                value: "option-3",
              },
              {
                label: "Option 4",
                value: "option-4",
              },
            ]}
            onPressedChange={() => {}}
          />
        </Preview>
        <Preview name="Badge">
          <Badge>Default Badge Text</Badge>
        </Preview>
        <Preview name="BitePreview">
          <BitePreview
            htmlContent="<div>Hello World</div>"
            cssContent="div { color: red; }"
            frontendAssets={{ script: "console.log('Hello World');" }}
          />
        </Preview>
        <Preview name="DisappearingMessage">
          <DisappearingMessage duration={3000} trigger={true}>
            This message will disappear after 3 seconds.
          </DisappearingMessage>
        </Preview>
        <Preview name="FloatingPanel">
          <FloatingPanel>
            <div>Content inside FloatingPanel</div>
          </FloatingPanel>
        </Preview>
        <Preview name="FocalPointControl">
          <FocalPointControl
            defaultValue="50% 50%"
            onValueChange={(value) =>
              console.log("Focal point changed:", value)
            }
          />
        </Preview>
        <Preview name="LinkPicker">
          <LinkPicker />
        </Preview>
        <Preview name="MediaPicker">
          <MediaPicker
            mediaProps={{}}
            mediaCallback={() => console.log("Media callback triggered")}
          />
        </Preview>
        <Preview name="MetricsControl">
          <MetricsControl
            defaultUnit="px"
            defaultValue="16"
            onValueChange={(value) => console.log("Value changed:", value)}
            onUnitChange={(unit) => console.log("Unit changed:", unit)}
          />
        </Preview>

        <Preview name="PasswordInput">
          <PasswordInput
            label="Password"
            value=""
            onChange={(e) => console.log("Password changed:", e.target.value)}
          />
        </Preview>
        <Preview name="RangeSlider">
          <RangeSlider
            defaultValue="50"
            label="Range Slider"
            min={0}
            max={100}
            onValueChange={(value) =>
              console.log("Range value changed:", value)
            }
          />
        </Preview>
        <Preview name="ResponsiveImage">
          <ResponsiveImage media={{ src: "https://via.placeholder.com/150" }} />
        </Preview>
        <Preview name="SectionList">
          <SectionList
            sections={[
              { id: "1", name: "Section 1" },
              { id: "2", name: "Section 2" },
            ]}
            setSections={() => {}}
            activeSection={{ id: "1", title: "Section 1" }}
            setActiveSection={() => {}}
            Update={() => {}}
            newSection={{ id: "3", title: "Section 3" }}
            setCode={() => {}}
            addons={
              <div>
                <button>Add Section</button>
              </div>
            }
          />
        </Preview>
        <Preview name="SingleBlockTypeAppender">
          <SingleBlockTypeAppender />
        </Preview>
        <Preview name="Tabs">
          <TabsWrapper />
        </Preview>
        <Preview name="TextControl">
          <TextControl defaultValue="Default Text" />
        </Preview>
        <Preview name="TextControlLabel">
          <TextControlLabel defaultValue="Default Label Text" />
        </Preview>
        <Preview name="ToggleGroup">
          <ToggleGroup
            options={[
              { label: "Option 1", value: "option-1" },
              { label: "Option 2", value: "option-2" },
            ]}
            defaultPressed="option-1"
            onPressedChange={(value) => console.log("Pressed option:", value)}
          />
        </Preview>
      </div>
    </div>
  );
};

// Small wrapper for layout
const Preview = ({
  name,
  children,
}: {
  name: string;
  children: React.ReactNode;
}) => (
  <div
    style={{ border: "1px solid #ddd", borderRadius: "8px", padding: "1rem" }}
  >
    <h2 style={{ marginBottom: "1rem" }}>{name}</h2>
    <div>{children}</div>
  </div>
);

export default App;
