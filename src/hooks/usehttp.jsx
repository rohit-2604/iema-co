// src/hooks/useHttp.jsx
import { useState, useCallback } from "react";

const API_BASE_URL = import.meta.env.VITE_BACKEND_URL || "http://1.1.1.1:8080/";
// Example .env value:
// VITE_BACKEND_URL="https://your-backend-url.com/api"

export const useHttp = () => {
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [errorStatus, setErrorStatus] = useState(null); // add this

  const request = useCallback(
    async (endpoint, method = "GET", body = null, headers = {}) => {
      setLoading(true);
      setError(null);
      setErrorStatus(null); // reset on each request

      try {
        const config = {
          method,
          headers: {
            ...headers,
          },
        };

        if (body) {
          if (body instanceof FormData) {
            config.body = body; // Do NOT set Content-Type for FormData
          } else {
            config.headers["Content-Type"] = "application/json";
            config.body = JSON.stringify(body);
          }
        }

        const response = await fetch(`${API_BASE_URL}${endpoint}`, config);

        if (!response.ok) {
          setErrorStatus(response.status); // capture status
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        return data;
      } catch (err) {
        setError(err.message);
        return null;
      } finally {
        setLoading(false);
      }
    },
    []
  );

  const get = useCallback(
    (endpoint, headers) => request(endpoint, "GET", null, headers),
    [request]
  );
  const post = useCallback(
    (endpoint, body, headers) => request(endpoint, "POST", body, headers),
    [request]
  );
  const put = useCallback(
    (endpoint, body, headers) => request(endpoint, "PUT", body, headers),
    [request]
  );
  const del = useCallback(
    (endpoint, headers) => request(endpoint, "DELETE", null, headers),
    [request]
  );

  return { get, post, put, del, loading, error, errorStatus }; // expose errorStatus
};