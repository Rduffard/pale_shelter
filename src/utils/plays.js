const API_BASE = import.meta.env.VITE_API_BASE_URL || "http://localhost:3001";

export function trackPlay(trackId) {
  const sessionKey = `paleshelter-played-${trackId}`;

  if (sessionStorage.getItem(sessionKey)) {
    return Promise.resolve();
  }

  return fetch(`${API_BASE}/paleshelter`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ trackId }),
  })
    .then((res) => {
      if (!res.ok) {
        return Promise.reject(new Error(`Error: ${res.status}`));
      }

      sessionStorage.setItem(sessionKey, "true");
      return res.json();
    })
    .catch((err) => {
      console.error("Failed to track play:", err);
    });
}
