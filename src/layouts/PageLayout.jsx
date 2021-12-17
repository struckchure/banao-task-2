import React, { useEffect } from "react";
import { useInView, InView } from "react-intersection-observer";

function isVisible(element) {
  const { top, bottom } = element.getBoundingClientRect();
  const vHeight = window.innerHeight || document.documentElement.clientHeight;

  return (top > 0 || bottom > 0) && top < vHeight;
}

export default function PageLayout(props) {
  const { left, right, page_number, onEntry } = props;

  useEffect(() => {
    document.querySelector(".page-content").addEventListener("scroll", (e) => {
      if (isVisible(document.getElementById(page_number))) {
        onEntry ? onEntry() : null;
        break
      }
    });
  });

  return (
    <div className="main-content" id={page_number}>
      {/* left section */}
      <section className="left">
        <p>{`in view ? => `}</p>
        {left}
      </section>
      {/* {left} */}

      {/* right section */}
      <section className="right">{right}</section>
      {/* {right} */}
    </div>
  );
}
