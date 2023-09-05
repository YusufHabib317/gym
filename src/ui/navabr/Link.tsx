import { SelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
  toggleMenu?: boolean;
};

const Link = (props: Props) => {
  const { page, selectedPage, setSelectedPage, toggleMenu } = props;
  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;

  return (
    <AnchorLink
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
      className={`${selectedPage === lowerCasePage ? "text-primary-500" : ""}
      transition duration-500 
      ${toggleMenu ? "hover:text-primary-500" : "hover:text-primary-300"}
      `}
    >
      {page}
    </AnchorLink>
  );
};

export default Link;
