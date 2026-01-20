

interface Props {
  content: string;
  action?: () => void;
}

export function CustomButton({ content, action }: Props) {
  return (
    <button onClick={action}
      className="p-3 bg-(--grey700) w-85 font-[700] rounded cursor-pointer hover:bg-(--green) hover:text-(--grey900)">
      {content}
    </button>
  );
}
