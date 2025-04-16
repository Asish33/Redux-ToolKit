import { useSelector, useDispatch } from "react-redux";

export default function Todos() {
  const todo = useSelector((state) => state.todos);
  return <div>hi there</div>;
}
