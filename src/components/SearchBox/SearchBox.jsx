import { useDispatch, useSelector } from "react-redux";
import css from "./SearchBox.module.css";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";

export default function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);
  const handelOnFilter = (event) => {
    dispatch(changeFilter(event.target.value.trim()));
  };
  return (
    <div>
      <p>Find contact by name</p>
      <input
        className={css.input}
        type="text"
        value={filter}
        onChange={handelOnFilter}
      />
    </div>
  );
}
