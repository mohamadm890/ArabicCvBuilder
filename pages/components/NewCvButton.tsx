// app/leading-page/NewCvButton.jsx (or .tsx)
"use client";

import { useRouter } from "next/navigation";

export default function NewCvButton() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/templates");
  };

  return (
    <button
      style={{
        width: "132px",
        height: "44px",
        backgroundColor: "#167FFC",
        fontSize: "12px",
        color: "white",
        fontWeight: "700",
        borderRadius: "24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "1px solid #60a5fa",
        cursor: "pointer",
        userSelect: "none",
        transition: "background-color 0.2s",
      }}
      className="hover:bg-blue-50"
      onClick={handleClick}
    >
      إنشاء سيرة ذاتية
    </button>
  );
}
