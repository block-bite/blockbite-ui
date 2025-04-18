import { Wrap } from "./Wrap";
import { Notice as WordpressNotice } from "@wordpress/components";
import { useState } from "@wordpress/element";
import classNames from "classnames";

type NoticeProps = {
  children: React.ReactNode;
  className?: string;
  status?: "success" | "error" | "warning" | "info";
};

export const Notice = ({
  children,
  status = "success",
  className,
}: NoticeProps) => {
  const [showNotice, setShowNotice] = useState(true);

  return (
    <Wrap onClick={() => setShowNotice(false)}>
      {showNotice && (
        <WordpressNotice
          status={status}
          className={classNames(className)}
          onRemove={() => setShowNotice(false)}
        >
          {children}
        </WordpressNotice>
      )}
    </Wrap>
  );
};
