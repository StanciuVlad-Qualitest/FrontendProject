import { useDispatch } from "react-redux";
import { Input } from "../components/Input/Input";
import { uiActions } from "../store/uiSlice";
import { PageWrapper } from "./styles";
import { AppDispatch, RootState } from "../store/store";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { fetchData, usersActions } from "../store/usersSlice";
import { useRef, useState } from "react";
import { User } from "./types";
import { SlideShow } from "../components/SlideShow/SlideShow";
import { useEffect } from "react";
import styled from "styled-components";
const ScrollableList = styled.ul`
  width: 1000px;
  max-height: 400px;
  overflow-y: auto;
  border: 1px solid green;
  padding: 10px;
  margin: 0;
`;

const ListItem = styled.li`
  padding: 5px;
  border-bottom: 1px solid red;
`;
export const Home = () => {
  const dispatch = useDispatch<AppDispatch>();
  const isVisible = useSelector(
    (state: RootState) => state.ui.isVisibleLiveSearching
  );
  const numberOfUsers = useRef<HTMLInputElement>(null);
  const prefixToFilter = useRef<HTMLInputElement>(null);
  const isFetched = useSelector((state: RootState) => state.users.isFetched);

  const users = useSelector((state: RootState) => state.users.users);
  const [usersToFilter, setUsersToFilter] = useState<User[]>(users);
  function changeHandler() {
    if (!isFetched) {
      dispatch(fetchData(+numberOfUsers.current!.value));
      dispatch(usersActions.setFetched());
    } else {
      setUsersToFilter(
        users.filter((user) =>
          user.name.first
            .toLowerCase()
            .startsWith(prefixToFilter.current?.value.toLowerCase() || "")
        )
      );
    }
  }
  useEffect(() => {
    if (isFetched) {
      setUsersToFilter(
        users.filter((user) =>
          user.name.first
            .toLowerCase()
            .startsWith(prefixToFilter.current?.value.toLowerCase() || "")
        )
      );
    }
  }, [isFetched, users]);
  function handlerNumbeInput() {
    if (!isVisible) {
      dispatch(uiActions.toggle());
    }
  }
  return (
    <PageWrapper>
      <div>
        <p>Introduce-ti numarul de persoane</p>
        <Input ref={numberOfUsers} type="number" onChange={handlerNumbeInput} />
      </div>
      {isVisible && (
        <div>
          <p>Introduce-ti numele persoanei</p>
          <Input type="text" onChange={changeHandler} ref={prefixToFilter} />
        </div>
      )}
      <ScrollableList>
        {usersToFilter.map((user: User, index) => (
          <ListItem key={user.name.first + user.name.last}>
            {user.name.first + " " + user.name.last}
          </ListItem>
        ))}
      </ScrollableList>

      {isFetched && <SlideShow users={users} />}
    </PageWrapper>
  );
};
