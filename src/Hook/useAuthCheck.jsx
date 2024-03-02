import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { userLoggedIn } from "../Redux/user/userSlice";
import { useJwt } from "react-jwt";

export default async function useAuthCheck() {
  const dispatch = useDispatch();
  const [authChecked, setAuthChecked] = useState(false);

  const localAuth = localStorage?.getItem("magicalHairOil_jwt");
  const { isExpired } = useJwt(localAuth);
  if (isExpired) {
    localStorage.removeItem("magicalHairOil_jwt");
  }

  useEffect(() => {
    if (localAuth) {
      fetch(`${import.meta.env.VITE_BACKEND_URL}/user/logged-user`, {
        headers: {
          authorization: `bearer ${localAuth}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data?.success) {
            dispatch(
              userLoggedIn({
                token: localAuth,
                data: data,
              })
            );
          }
        })
        .finally(() => {
          setAuthChecked(true);
        });
    }
  }, [dispatch, setAuthChecked, localAuth]);

  return authChecked;
}
