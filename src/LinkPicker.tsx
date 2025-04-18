import { Wrap } from "./Wrap";
import apiFetch from "@wordpress/api-fetch";
import { TextControl } from "@wordpress/components";
import { useEffect, useState } from "@wordpress/element";
import { __ } from "@wordpress/i18n";

export default function LinkPicker(props) {
  const [activeKeyword, setActiveKeyword] = useState("");
  const [links, setLinks] = useState<
    Array<{ id: number; url: string; title: string; post_type: string }>
  >([]);
  const [activeLink, setActiveLink] = useState({
    url: "",
    title: "",
  });

  useEffect(() => {
    if (activeKeyword === "") return;
    setLinks(null);
    apiFetch({
      path: `/blockbite/v1/block-helpers/get-links/${activeKeyword}`,
    }).then(
      (
        fetchedLinks: Array<{
          id: number;
          url: string;
          title: string;
          post_type: string;
        }> | null
      ) => {
        if (fetchedLinks?.length) {
          setLinks([...fetchedLinks]);
        } else {
          setLinks([]);
        }
      }
    );
  }, [activeKeyword]);

  useEffect(() => {
    if (activeLink.url !== "") {
      props.parentCallback(activeLink);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeLink]);

  return (
    <Wrap className="blockbite--editor-linkwrap">
      <TextControl
        label={__("Search link", "blockbitelinks")}
        value={activeKeyword}
        placeholder="Example: About"
        onChange={(value) => setActiveKeyword(value)}
        help={__("Type a post, page, title", "blockbitelinks")}
      />
      {activeKeyword ? (
        <div className="blockbite--editor-linklist">
          <LinkList
            links={links}
            onActiveLink={(link) => [
              setActiveLink({ ...link }),
              setActiveKeyword(""),
            ]}
          />
        </div>
      ) : null}
    </Wrap>
  );
}
function LinkList({ links, onActiveLink }) {
  const list = [];
  if (links === null) {
    return <p>Loading...</p>;
  } else if (links.length === 0) {
    return <p>No Results</p>;
  }
  // iterate over the links and show img with icon based on icon_url and icon
  links.forEach((link) => {
    list.push(
      // add key
      <Wrap key={link.id}>
        <span
          className="blockbite--editor-link"
          onClick={() => onActiveLink(link)}
        >
          <span>{link.title}</span>
          <span className="blockbite--preview-link">{link.url}</span>
          <span className="blockbite--preview-link">{link.post_type}</span>
        </span>
      </Wrap>
    );
  });
  return list;
}
