interface GreetProps {
  name: string;
  messageCount?: number;
  isLoggedIn?: boolean;
}

export const Greet = ({
  name,
  messageCount = 0,
  isLoggedIn = true,
}: GreetProps) => {
  return (
    <div>
      <h2>
        {isLoggedIn
          ? "Welcome " +
            name +
            " ! You have " +
            messageCount +
            " unread messages"
          : "Welcome Guest"}
        ;
      </h2>
    </div>
  );
};
