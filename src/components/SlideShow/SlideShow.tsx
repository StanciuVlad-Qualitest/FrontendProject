import React, { FC, useRef, useState } from "react";
import { UserCard } from "../UserCard/UserCard";
import { User } from "../../pages/types";
import { Button } from "../Button/Button";
import styled from "styled-components";
interface Props {
  users: User[];
}

const CenteredContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

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
      timer.current = undefined;
    }
  };

  return (
    <CenteredContainer>
      {props.users.length > 0 && (
        <UserCard
          image={props.users[userIndexToShow].picture.large}
          lastName={props.users[userIndexToShow].name.last}
          firstName={props.users[userIndexToShow].name.first}
        />
      )}
      <Button
        ariaLabel="Start slideshow"
        onClick={handleStart}
        variant="primary"
      >
        Start
      </Button>
      <Button ariaLabel="Stop slideshow" onClick={handleStop} variant="primary">
        Stop
      </Button>
    </CenteredContainer>
  );
};

export default SlideShow;
