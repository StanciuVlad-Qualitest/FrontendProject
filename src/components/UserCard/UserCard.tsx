import React, { FC } from "react";

interface Props {
  image: string;
  firstName: string;
  lastName: string;
}

export const UserCard: FC<Props> = (props) => (
  <div>
    <img src={props.image} alt="Photo of a person" />
    <p>
      {props.firstName} {props.lastName}
    </p>
  </div>
);
