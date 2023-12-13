import React from "react";

type Props = {};

const CPPager = (props: Props) => {
  return (
    <div className="o_cp_pager" role="search">
      <nav className="o_pager items-center flex gap-2" aria-label="Pager">
        <span className="o_pager_counter">
          <span className="o_pager_value inline-block border-bottom border-transparent mb-n1">
            6
          </span>
          <span> / </span>
          <span className="o_pager_limit">20</span>
        </span>
        <span className="btn-group" aria-atomic="true">
          <button
            type="button"
            className="fa fa-chevron-left btn btn-secondary o_pager_previous px-2 rounded-start"
            aria-label="Previous"
            data-tooltip="Previous"
            tabIndex={-1}
            data-hotkey="p"
          ></button>
          <button
            type="button"
            className="fa fa-chevron-right btn btn-secondary o_pager_next px-2 rounded-end"
            aria-label="Next"
            data-tooltip="Next"
            tabIndex={-1}
            data-hotkey="n"
            title=""
          ></button>
        </span>
      </nav>
    </div>
  );
};

export default CPPager;
