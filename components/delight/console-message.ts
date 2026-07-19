"use client";

import { useEffect } from "react";

export function ConsoleMessage() {
  useEffect(() => {
    const style =
      "color:#D4A574;font-family:Georgia,serif;font-size:14px;font-weight:600;";
    console.log(
      "%cGaurav Kadam · Full-Stack Developer\n%cMumbai · React · TypeScript · APIs\n\nHiring? g.kadam.dev@gmail.com\nhttps://github.com/gauravk2203",
      style,
      "color:#A8A59C;font-size:12px;",
    );
  }, []);

  return null;
}
