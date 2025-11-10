const API_BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:4000";

export const processVideo = async (videoUrls) => {
  const response = await fetch(`${API_BASE_URL}/api/process`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-backend-secret": "mysecret123"
    },
    body: JSON.stringify({ videoUrls }),
  });
  return response.json();
};

// alias untuk kompatibilitas lama
export { processVideo as triggerProcess };
