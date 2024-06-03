import { useState } from "react";
import { ShrinkedNavbar } from "./ShrinkedNavbar";
import { ExpandedNavbar } from "./ExpandedNavbar";

export function NavbarWrapper() {
  const [isHoveredOver, changeIsHoveredOver] = useState<boolean>(false);

  return (
    <div
      className={`transition-all duration-400 ${
        isHoveredOver ? "w-64" : "w-20"
      }`}
      onMouseEnter={() => changeIsHoveredOver(true)}
      onMouseLeave={() => changeIsHoveredOver(false)}
    >
      {isHoveredOver ? <ExpandedNavbar /> : <ShrinkedNavbar />}
    </div>
  );
}
