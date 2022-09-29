
import { memo } from "react";

const Section = (props) => {
  return (
    <section
      style={props.style || null}
      id={props.id || null}
      className={props.className || null}
    >
      {props.children}
    </section>
  );
};
export default memo(Section)
