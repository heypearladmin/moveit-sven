interface Props {
  answer: string;
}

export function QuickAnswer({ answer }: Props) {
  return (
    <div className="rounded-2xl border-l-4 border-brass bg-brass/[0.07] px-7 py-6 mb-10">
      <p className="eyebrow mb-2 text-brass">Quick Answer</p>
      <p className="text-[1rem] leading-[1.78] text-navy font-medium">{answer}</p>
    </div>
  );
}
