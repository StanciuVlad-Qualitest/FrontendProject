import { useDispatch } from "react-redux";
import { Input } from "../components/Input/Input";
import { uiActions } from "../store/uiSlice";
import { PageWrapper } from "./styles";
import { AppDispatch, RootState } from "../store/store";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { fetchData, usersActions } from "../store/usersSlice";
import { useRef, useState } from "react";
import { number } from "yargs";
import { link } from "fs";
import { User } from "./types";
import { UserCard } from "../components/UserCard/UserCard";
import { SlideShow } from "../components/SlideShow/SlideShow";

export const Home = () => {
  const dispatch = useDispatch<AppDispatch>();
  const isVisible = useSelector(
    (state: RootState) => state.ui.isVisibleLiveSearching
  );
  const numberOfUsers = useRef<HTMLInputElement>(null);
  const prefixToFilter = useRef<HTMLInputElement>(null);
  const isFetched = useSelector((state: RootState) => state.users.isFetched);

  const users1 = useSelector((state: RootState) => state.users.users);
  const [usersToFilter, setUsersToFilter] = useState<User[]>([]);
  function changeHandler() {
    if (!isFetched) {
      dispatch(fetchData(+numberOfUsers.current!.value));
      dispatch(usersActions.setFetched());
      console.log("In fetch");
    } else {
      setUsersToFilter(
        users1.filter((user: User) =>
          user.name.first
            .toLowerCase()
            .startsWith(prefixToFilter.current!.value.toLowerCase())
        )
      );
    }
  }
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
        <button onClick={() => dispatch(uiActions.toggle())}>
          Show SearchBar
        </button>

        <button
          onClick={() => dispatch(fetchData(+numberOfUsers.current!.value))}
        >
          Start fetch!
        </button>
      </div>
      {isVisible && (
        <div>
          <p>Introduce-ti numele persoanei</p>
          <Input type="text" onChange={changeHandler} ref={prefixToFilter} />
        </div>
      )}
      {isFetched && (
        <ol>
          {usersToFilter.map((user: User, index) => (
            <li key={user.name.first + user.name.last}>
              {user.name.first + " " + user.name.last}
            </li>
          ))}
        </ol>
      )}
      {isFetched && <SlideShow users={users1} />}
      {/* Slideshow should be rendered here */}
    </PageWrapper>
  );
};
