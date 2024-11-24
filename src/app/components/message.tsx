export default function Message({ message }: { message: string }) {
  return (
    <div className="font-flower-island text-lg sm:text-xl pl-4 pr-4 text-stroke">
      {message.split("\\n").map((line, index) => (
        <p key={index} className="text-center">
          {line}
        </p>
      ))}
    </div>
  );
}
