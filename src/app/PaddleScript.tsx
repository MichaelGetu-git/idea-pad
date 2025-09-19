"use client";

import { useEffect } from "react";
import Script from "next/script";

export default function PaddleScript() {
  useEffect(() => {
    if (typeof window !== "undefined" && window.Paddle) {
      window.Paddle.Setup({
        vendor: 123456,
      });
    }
  }, []);

  return (
    <Script
      src="https://cdn.paddle.com/paddle/paddle.js"
      strategy="beforeInteractive"
    />
  );
}
