const API_BASE = import.meta.env.VITE_API_BASE_URL || "http://localhost:3001";

function checkResponse(res) {
  if (!res.ok) {
    return Promise.reject(new Error(`Error: ${res.status}`));
  }

  return res.json();
}

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
    .then(checkResponse)
    .then((data) => {
      sessionStorage.setItem(sessionKey, "true");
      return data;
    })
    .catch((err) => {
      console.error("Failed to track play:", err);
    });
}

export function getPlayCounts() {
  return fetch(`${API_BASE}/paleshelter`).then(checkResponse);
}
