import React, { useEffect, useState } from "react";
import "../assets/scss/controller2.scss";

function isVisible(element) {
  const { top, bottom } = element.getBoundingClientRect();
  const vHeight = window.innerHeight || document.documentElement.clientHeight;

  return (top > 0 || bottom > 0) && top < vHeight;
}

export default function Controller2({ controller_bg }) {
  const [page_index, __set_page_index] = useState(0);
  console.log(page_index);

  useEffect(() => {
    set_page();

    sync_controller_indicator();
  });

  const set_page = () => {
    const page_content = document.querySelector(".page-content");

    page_content.scrollTo({
      top: document.body.scrollHeight * page_index,
      behavior: "smooth",
    });
  };

  const sync_controller_indicator = () => {
    const page_content = document.querySelector(".page-content");

    page_content.addEventListener("scroll", (e) => {});
  };

  return (
    <div className="controller-container">
      <svg
        version="1.1"
        id="transring"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 414 414"
        style={{
          enableBackground: "new 0 0 414 414",
          backgroundColor: controller_bg,
        }}
      >
        <path
          id="Transparent_Ring"
          style={{
            opacity: 0.4,
            fill: "none",
            stroke: "#fff",
            strokeWidth: 2,
            strokeMiterlimit: 10,
            enableBackground: "new",
          }}
          d="M84.2,85c31.3-31.5,74.7-51,122.7-51c95.5,0,173,77.5,173,173s-77.5,173-173,173 c-47.8,0-91-19.4-122.3-50.7"
        />

        <path
          id="Opaque_Ring"
          style={{
            fill: "none",
            stroke: "rgb(255, 255, 255)",
            strokeWidth: 3,
            strokeMiterlimit: 10,
            strokeDasharray: `${page_index * 140}, 1000`,
          }}
          d="M84.2,85c31.3-31.5,74.7-51,122.7-51c95.5,0,173,77.5,173,173s-77.5,173-173,173 c-47.8,0-91-19.4-122.3-50.7"
        />

        <g
          id="Dots1"
          onClick={() => {
            __set_page_index(0);
          }}
        >
          <g>
            <path
              style={{ fill: "rgb(0, 146, 255)", opacity: 1 }}
              d="M84,80 c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6 S 87, 80, 84,80 z"
            />
          </g>
          <g>
            <path
              style={{
                opacity: 1,
                fill: "none",
                stroke: "rgb(255, 255, 255)",
                strokeWidth: 2,
                strokeMiterlimit: 10,
              }}
              d="M84,80c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6 S 87, 80, 84,80 z"
            />
          </g>
        </g>

        <g
          id="Dots2"
          onClick={() => {
            __set_page_index(1);
          }}
        >
          <g>
            <path
              style={{ fill: "rgb(0, 146, 255)", opacity: 1 }}
              d="M206.8,29c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6S 210.1,29, 206.8,29 z M206.8"
            />
          </g>
          <g>
            <path
              style={{
                opacity: 1,
                fill: "none",
                stroke: "rgb(255, 255, 255)",
                strokeWidth: 2,
                strokeMiterlimit: 10,
              }}
              d="M206.8,29c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6S 210.1,29, 206.8,29 z M206.8"
            />
          </g>
        </g>

        <g
          id="Dots3"
          onClick={() => {
            __set_page_index(2);
          }}
        >
          <g>
            <path
              style={{ fill: "rgb(0, 146, 255)", opacity: 1 }}
              d="M332,85 c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6 S 335,85, 332,85 z M332"
            />
          </g>
          <g>
            <path
              style={{
                opacity: 1,
                fill: "none",
                stroke: "rgb(255, 255, 255)",
                strokeWidth: 2,
                strokeMiterlimit: 10,
              }}
              d="M332,85 c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6 S 335,85, 332,85 z M332"
            />
          </g>
        </g>

        <g
          id="Dots4"
          onClick={() => {
            __set_page_index(3);
          }}
        >
          <g>
            <path
              style={{ fill: "rgb(0, 146, 255)", opacity: 1 }}
              d="M380,205 c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6 S 383,205, 380,205 z M380"
            />
          </g>
          <g>
            <path
              style={{
                opacity: 1,
                fill: "none",
                stroke: "rgb(255, 255, 255)",
                strokeWidth: 2,
                strokeMiterlimit: 10,
              }}
              d="M380,205 c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6 S 383,205, 380,205 z M380"
            />
          </g>
        </g>

        <g
          id="Dots5"
          onClick={() => {
            __set_page_index(4);
          }}
        >
          <g>
            <path
              style={{ fill: "rgb(0, 146, 255)", opacity: 1 }}
              d="M335,315 c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6 S 340,315, 335,315 z M335"
            />
          </g>
          <g>
            <path
              style={{
                opacity: 1,
                fill: "none",
                stroke: "rgb(255, 255, 255)",
                strokeWidth: 2,
                strokeMiterlimit: 10,
              }}
              d="M335,315 c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6 S 340,315, 335,315 z M335"
            />
          </g>
        </g>

        <g
          id="Dots6"
          onClick={() => {
            __set_page_index(5);
          }}
        >
          <g>
            <path
              style={{ fill: "rgb(0, 146, 255)", opacity: 1 }}
              d="M210,375 c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6 S 215,375, 210,375 z M210"
            />
          </g>
          <g>
            <path
              style={{
                opacity: 1,
                fill: "none",
                stroke: "rgb(255, 255, 255)",
                strokeWidth: 2,
                strokeMiterlimit: 10,
              }}
              d="M210,375 c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6 S 215,375, 210,375 z M210"
            />
          </g>
        </g>

        <g
          id="Dots7"
          onClick={() => {
            __set_page_index(6);
          }}
        >
          <g>
            <path
              style={{ fill: "rgb(0, 146, 255)", opacity: 1 }}
              d="M88,324 c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6 S 92,324, 88,324 z M88"
            />
          </g>
          <g>
            <path
              style={{
                opacity: 1,
                fill: "none",
                stroke: "rgb(255, 255, 255)",
                strokeWidth: 2,
                strokeMiterlimit: 10,
              }}
              d="M88,324 c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6 S 92,324, 88,324 z M88"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}
