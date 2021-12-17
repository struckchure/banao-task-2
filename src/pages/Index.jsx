import React, { useEffect, useState } from "react";
import BaseLayout from "../layouts/BaseLayout";
import PageLayout from "../layouts/PageLayout";

export default function Index() {
  const [controller_bg, set_controller_bg] = useState("#333");

  return (
    <BaseLayout controller_bg={controller_bg}>
      <PageLayout
        bg={controller_bg}
        left={
          <section className="left">
            <div className="p-2">
              <p>1</p>
            </div>
          </section>
        }
        right={
          <section className="right">
            <div className="p-2">
              <p>World</p>
            </div>
          </section>
        }
        page_number={1}
        onEntry={() => {
          set_controller_bg("red");
        }}
      />

      <PageLayout
        bg={controller_bg}
        left={
          <section className="left">
            <div className="p-2">
              <p>2</p>
            </div>
          </section>
        }
        right={
          <section className="right">
            <div className="p-2">
              <p>World</p>
            </div>
          </section>
        }
        page_number={2}
        onEntry={() => {
          set_controller_bg("#333");
        }}
      />

      <PageLayout
        bg={controller_bg}
        left={
          <section className="left">
            <div className="p-2">
              <p>3</p>
            </div>
          </section>
        }
        right={
          <section className="right">
            <div className="p-2">
              <p>World</p>
            </div>
          </section>
        }
        page_number={3}
      />

      <PageLayout
        bg={controller_bg}
        left={
          <section className="left">
            <div className="p-2">
              <p>4</p>
            </div>
          </section>
        }
        right={
          <section className="right">
            <div className="p-2">
              <p>World</p>
            </div>
          </section>
        }
        page_number={4}
      />

      <PageLayout
        bg={controller_bg}
        left={
          <section className="left">
            <div className="p-2">
              <p>5</p>
            </div>
          </section>
        }
        right={
          <section className="right">
            <div className="p-2">
              <p>World</p>
            </div>
          </section>
        }
        page_number={5}
      />

      <PageLayout
        bg={controller_bg}
        left={
          <section className="left">
            <div className="p-2">
              <p>6</p>
            </div>
          </section>
        }
        right={
          <section className="right">
            <div className="p-2">
              <p>World</p>
            </div>
          </section>
        }
        page_number={6}
      />

      <PageLayout
        bg={controller_bg}
        left={
          <section className="left">
            <div className="p-2">
              <p>7</p>
            </div>
          </section>
        }
        right={
          <section className="right">
            <div className="p-2">
              <p>World</p>
            </div>
          </section>
        }
        page_number={7}
      />
    </BaseLayout>
  );
}
