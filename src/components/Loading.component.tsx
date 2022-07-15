import { CSSProperties, ReactElement } from "react";
import { BarLoader } from "react-spinners";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
};

export default function Loading(): ReactElement {
  return (
    <div>
      <h2 className="title is-2 is-size-3-mobile is-spaced mb-6">Loading</h2>
      <BarLoader cssOverride={override} width={250} />
    </div>
  );
}
