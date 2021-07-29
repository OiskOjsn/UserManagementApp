import axios from "axios";
import { useCallback, useState } from "react";
import { useHistory } from "react-router-dom";

import { User } from "../types/api/user";

export const useAuth = () => {
  const history = useHistory();

  const [loading, setLoading] = useState<boolean>(false);

  const login = useCallback(
    (id: string) => {
      setLoading(true);

      axios
        .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => {
          if (res.data) {
            history.push("/home");
          } else {
            alert("User Not Found");
            console.log("User Not Found");
          }
        })
        .catch(() => {
          alert("Cannot Login");
          console.log("Cannot Login");
        })
        .finally(() => setLoading(false));
    },
    [history]
  );
  return { login, loading };
};
