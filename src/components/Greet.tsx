interface GreetProps {
  name: string;
  messageCount: number;
}

export const Greet = ({ name, messageCount }: GreetProps) => {
  return (
    <div>
      <h2>
        Welcome {name}! You have {messageCount} unread messages
      </h2>
    </div>
  );
};
