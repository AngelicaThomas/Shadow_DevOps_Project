// src/api.js
export async function triggerProcess(videoUrls) {
  const res = await fetch("/api/videos/process", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-backend-secret": "mysecret123",
    },
    body: JSON.stringify({ videoUrls }),
  });

  return res.json();
}
