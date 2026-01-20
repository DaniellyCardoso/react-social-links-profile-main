

interface Props {
  content: string;
  action?: () => void;
}

export function CustomButton({ content, action }: Props) {
  return (
    <button onClick={action}
      className="border border-black-500 p-3 bg-black-50 rounded hover:bg-red-100 cursor-pointer">
      {content}
    </button>
  );
}
