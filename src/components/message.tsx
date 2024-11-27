export default function Message({ message }: { message: string }) {
  return (
    <div className="font-flower-island text-lg sm:text-xl px-4 text-white-stroke">
      {message.split("\\n").map((line, index) => (
        <p key={index} className="text-center">
          {line}
        </p>
      ))}
    </div>
  );
}
