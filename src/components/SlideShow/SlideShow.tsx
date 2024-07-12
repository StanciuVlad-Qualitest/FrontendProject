import React, { FC, useEffect, useRef, useState } from "react";
import { UserCard } from "../UserCard/UserCard";
import { User } from "../../pages/types";

interface Props {
  users: User[];
}

export const SlideShow: FC<Props> = (props: Props) => {
  const [userIndexToShow, setUserIndexToShow] = useState(0);
  const timer = useRef<number | undefined>(undefined);

  const handleStart = () => {
    timer.current = window.setInterval(() => {
      setUserIndexToShow((prevIndex) => (prevIndex + 1) % props.users.length);
    }, 2000);
  };

  const handleStop = () => {
    if (timer.current) {
      clearInterval(timer.current);
      timer.current = undefined; // Reset the timer reference
    }
  };

  useEffect(() => {
    handleStart();
    return () => handleStop(); // Clean up on unmount
  }, [props.users]);

  return (
    <div>
      {props.users.length > 0 && (
        <UserCard
          image={props.users[userIndexToShow].picture.large}
          lastName={props.users[userIndexToShow].name.last}
          firstName={props.users[userIndexToShow].name.first}
        />
      )}
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
};

export default SlideShow;
