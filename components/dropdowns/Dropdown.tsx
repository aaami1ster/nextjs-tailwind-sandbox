import clsx from "clsx";
import React from "react";

type Props = {
  icon: string;
  title: string;
  children: any;
};

const Dropdown = ({ icon, title, children }: Props) => {
  return (
    <div
      className={clsx(
        "", // "o-dropdown",
        " relative", // dropdown
        "inline-block",
        "o-dropdown--no-caret"
      )}
    >
      <button
        className="dropdown-toggle btn btn-light"
        data-hotkey="shift+u"
        tabIndex={0}
        aria-expanded="false"
      >
        <i className="me-md-1 fa fa-print"></i>
        <span className="o_dropdown_title">Print</span>
      </button>
    </div>
  );
};

export default Dropdown;
