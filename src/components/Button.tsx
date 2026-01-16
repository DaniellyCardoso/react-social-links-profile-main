

interface Props {
  content: string;
  action?: () => void;
}

export function CustomButton({ content, action }: Props) {
  return (
    <button
      onClick={action}
      className="border border-emerald-500 p-3 bg-emerald-50 rounded hover:bg-emerald-100 cursor-pointer"
    >
      {content}
    </button>
  );
}
