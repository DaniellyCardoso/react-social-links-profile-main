"use client";
import { Button } from "@/src/components/Button";

interface Informs {
  id: number;
  content: string;
  type: "text" | "button";
  action?: string;
}

const informs: Informs[] = [
  { id: 1, content: "London, United Kingdom", type: "text" },
  { id: 2, content: "Front-end developer and avid reader.", type: "text" },
  { id: 3, content: "GitHub", type: "button", action: "https://github.com"  },
  { id: 4, content: "Frontend Mentor", type: "button", action: "https://www.frontendmentor.io",},
  { id: 5, content: "LinkedIn", type: "button", action: "https://linkedin.com" },
  { id: 6, content: "Twitter", type: "button", action: "https://x.com" },
  { id: 7, content: "Instagram", type: "button", action: "https://instagram.com"}
];

export function Lista() {
  return (
    <div className="grid grid-cols-1 gap-4">
      {informs.map((item: any, index: any) => {
        if (item.type === "button") {
          return (
            <Button key={item.id} content={item.content} action={() => item.action && window.open(item.action, "_blank")} />
          );
        }
        return (
          <p
            key={item.id}
            className="border border-emerald-500 p-3 bg-emerald-50 rounded"
          >
            {item.content}
          </p>
        );
      })}
    </div>
  );
}
