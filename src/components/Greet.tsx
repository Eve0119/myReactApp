interface GreetProps {
  name: string;
}

export const Greet = ({ name }: GreetProps) => {
  return (
    <div>
      <h2>Welcome {name}! You have 10 unread messages</h2>
    </div>
  );
};
