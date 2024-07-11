import { useDispatch } from "react-redux";
import { Input } from "../components/Input/Input";
import { uiActions } from "../store/uiSlice";
import { PageWrapper } from "./styles";
import { AppDispatch, RootState } from "../store/store";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { fetchData, usersActions } from "../store/usersSlice";
import { useRef } from "react";
import { number } from "yargs";

export const Home = () => {
  const dispatch = useDispatch<AppDispatch>();
  const isVisible = useSelector(
    (state: RootState) => state.ui.isVisibleLiveSearching
  );
  const numberOfUsers = useRef<HTMLInputElement>(null);
  let isFirst = false;
  function changeHandler() {
    if (!isFirst) {
      dispatch(fetchData(+numberOfUsers.current!.value));
      isFirst = true;
    }
  }
  return (
    <PageWrapper>
      <div>
        <p>Introduce-ti numarul de persoane</p>
        <Input ref={numberOfUsers} type="number" />
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
          <Input type="text" onChange={changeHandler} />
        </div>
      )}
      {/* Slideshow should be rendered here */}
    </PageWrapper>
  );
};
