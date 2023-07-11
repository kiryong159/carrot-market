import { useState } from "react";

interface IuseMutation {
  loading: boolean;
  data: undefined | any;
  error: undefined | any;
}

type UseMutationResult = [(data: any) => void, IuseMutation];

export default function useMutaion(url: string): UseMutationResult {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<undefined | any>(undefined);
  const [data, setData] = useState<undefined | any>(undefined);
  function Mutation(data: any) {
    setLoading(true);
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json().catch(() => {}))
      .then((json) => setData(json))
      .catch(setError)
      .finally(() => setLoading(false));
  }
  return [Mutation, { loading, error, data }];
}
