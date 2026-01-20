import { CustomButton } from "@/src/components/Button";

interface Informs {
  id: number;
  content: string;
  action?: string;
}

const informs: Informs[] = [
  { id: 1, content: "GitHub", action: "https://github.com" },
  { id: 2, content: "Frontend Mentor", action: "https://www.frontendmentor.io" },
  { id: 3, content: "LinkedIn", action: "https://linkedin.com" },
  { id: 4, content: "Twitter", action: "https://x.com" },
  { id: 5, content: "Instagram", action: "https://instagram.com" }
];

export function Lista(item: any, id: number) {
  return (
    <div className="grid grid-cols-1 gap-4">
      {informs.map((item) => (
        <CustomButton
          key={item.id}
          content={item.content}
          action={() => item.action && window.open(item.action, "_blank")}
        />
      ))}
    </div>
  );
}
