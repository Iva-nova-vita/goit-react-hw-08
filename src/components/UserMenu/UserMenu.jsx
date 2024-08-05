import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import css from "./UserMenu.module.css";
import { logout } from "../../redux/auth/operations";
import Button from '@mui/material/Button';


export default function UserMenu() {
  const disaptch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome, {user.name}</p>
      <Button type="button" color="secondary" onClick={() => disaptch(logout())}>
        Logout
      </Button>
    </div>
  );
}
