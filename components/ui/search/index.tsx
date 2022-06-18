import React from "react";
import Result from "./result";
import Template from "./template";
import classes from "../../../styles/search.module.css";

type Props = {};

export default function Search({}: Props) {
  return (
    <div>
      <div className={classes["search-area"]}>
        <input
          type="text"
          placeholder="Tìm sản phẩm, danh mục hay thương hiệu mong muốn ..."
        />
        <button>search</button>
      </div>
      {
        false?<>{true ? <Template /> : <Result />}</>:null
      }
    </div>
  );
}
