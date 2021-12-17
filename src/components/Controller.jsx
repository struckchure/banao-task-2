import React, { useEffect, useState } from "react";

import "../assets/scss/controller.scss";

export default function Controller({ controller_bg }) {
  controller_bg = controller_bg ? controller_bg : "#333";

  const [active_page, __set_active_page] = useState("circle_1");
  const [page_content, set_page_content] = useState(null);

  useEffect(() => {
    // set_page_content(document.querySelector(".page-content"));
  });

  const set_scroll_to_active = () => {
    const page_content = document.querySelector(".page-content");
    page_content.addEventListener("scroll", () => {
      set_active_page(window.innerHeight / 3);
    });
  };

  // set the currently active page

  const set_active_page = (button_id) => {
    try {
      const all_paths = Array.from(
        document.querySelectorAll(`svg.controller > path`)
      ).reverse();
      const all_buttons = Array.from(
        document.querySelectorAll(`svg.controller > circle`)
      );
      const target_button = document.querySelector(`#${button_id}`);

      document.querySelector(".page-content").scrollTo({
        top:
          document.body.scrollHeight * all_buttons.indexOf(target_button) + 1,
        behavior: "smooth",
      });

      // remove all active elements
      for (const element of all_paths) {
        element.classList.remove("active-arc");
      }

      // add active elements to current position

      for (let index = 0; index < all_buttons.length; index++) {
        const element = all_buttons[index];

        const can_stop =
          all_buttons.indexOf(element) >= all_buttons.indexOf(target_button);

        if (index <= all_buttons.length) {
          if (index > 0) {
            all_paths[all_buttons.indexOf(element) - 1].classList.add(
              "active-arc"
            );
          }
        }

        __set_active_page(button_id);

        if (can_stop) return;
      }
    } catch (e) {
      console.log(e);
    }
  };

  const get_active_path_class = (id) => {
    var active_path_class = `cls-${id}`;

    try {
      page_content.addEventListener("scroll", () => {
        const scroll_top = page_content.scrollTop;
        const target_scroll_pos_y = document.body.scrollHeight * id;

        if (scroll_top >= target_scroll_pos_y) {
          active_path_class = `cls-${id} active-arc`;
        }
      });
    } catch (e) {
      // console.log(e);
    }

    // console.log(active_path_class);

    return active_path_class;
  };

  // get class for currently active dot

  const get_classes = (id) => {
    const classes = active_page == id ? "cls-6" : "cls-6 active-dot";
    return classes;
  };

  return (
    <div className="controller-container">
      <svg className="controller" viewBox="0 0 500 675">
        <path
          className={get_active_path_class(1)}
          d="M669.63,801.41a336.15,336.15,0,0,1-257.13.06"
          transform="translate(-402 -155)"
        />
        <path
          className={get_active_path_class(2)}
          d="M850.06,621.48A336.17,336.17,0,0,1,669.63,801.41"
          transform="translate(-402 -155)"
        />
        <path
          className={get_active_path_class(3)}
          d="M849.67,361.6a336.11,336.11,0,0,1,.39,259.87"
          transform="translate(-402 -155)"
        />
        <path
          className={get_active_path_class(4)}
          d="M669.43,182.5A336.17,336.17,0,0,1,849.67,361.6"
          transform="translate(-402 -155)"
        />
        <path
          className={get_active_path_class(5)}
          d="M413.54,182.1a336.16,336.16,0,0,1,255.89.4"
          transform="translate(-402 -155)"
        />

        <circle
          className={get_classes("circle_1")}
          cx="11.5"
          cy="27.5"
          r="13"
          id={"circle_1"}
          onClick={(e) => {
            set_active_page(e.target.id);
          }}
        />
        <circle
          className={get_classes("circle_2")}
          cx="268.5"
          cy="27.5"
          r="13"
          id={"circle_2"}
          onClick={(e) => {
            set_active_page(e.target.id);
          }}
        />
        <circle
          className={get_classes("circle_3")}
          cx="450.5"
          cy="208.5"
          r="13"
          id={"circle_3"}
          onClick={(e) => {
            set_active_page(e.target.id);
          }}
        />
        <circle
          className={get_classes("circle_4")}
          cx="450.5"
          cy="467.5"
          r="13"
          id={"circle_4"}
          onClick={(e) => {
            set_active_page(e.target.id);
          }}
        />
        <circle
          className={get_classes("circle_5")}
          cx="268.5"
          cy="648.5"
          r="13"
          id={"circle_5"}
          onClick={(e) => {
            set_active_page(e.target.id);
          }}
        />
        <circle
          className={get_classes("circle_6")}
          cx="10.5"
          cy="648.5"
          r="13"
          id={"circle_6"}
          onClick={(e) => {
            set_active_page(e.target.id);
          }}
        />
      </svg>

      <div
        className="controller-dial"
        style={{ backgroundColor: controller_bg }}
      ></div>
    </div>
  );
}
