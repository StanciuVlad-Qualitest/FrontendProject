import React, { FC } from "react";

interface Props {
  image: string;
  firstName: string;
  lastName: string;
}

export const UserCard: FC<Props> = (props) => (
  <div>
    <img src={props.image} alt="Person's userCard" />
    <p>
      {props.firstName} {props.lastName}
    </p>
  </div>
);
