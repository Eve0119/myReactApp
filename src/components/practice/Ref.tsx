import { useEffect, useRef } from "react";

export const Ref = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div>
      <input type="text" placeholder="Type something..." ref={inputRef} />
    </div>
  );
};
