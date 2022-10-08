import { useCallback, useState } from "react";

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const sendRequest = useCallback(async (requestConfig, applyData) => {
    setIsLoading(true);
    setError(null);
    try {
      const rawResponse = await fetch(requestConfig.url, {
        method: requestConfig.method ? requestConfig.method : "GET",
        headers: requestConfig.headers ? requestConfig.headers : {},
        body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
      });

      switch (rawResponse.status) {
        case 200:{}
        case 201: {
          const data = await rawResponse.json();
          applyData(data);
          break;
        }
        case 403: {
          throw new Error("العملية غير مسموحة");
          break;
        }
        default: {
          throw new Error("فشل الطلب !");
        }
      }
    } catch (err) {
      setError("فشل الطلب !");
    }
    setIsLoading(false);
  }, []);
  return {
    isLoading,
    error,
    sendRequest,
  };
};
export default useHttp;
