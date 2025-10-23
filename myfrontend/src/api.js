// src/api.js

const API_BASE_URL = "http://127.0.0.1:8000/api/";

export const getJobs = async (token) => {
  const res = await fetch(`${API_BASE_URL}job/list/`, {
    headers: { Authorization: `Token ${token}` },
  });
  return res.json();
};

export const applyToJob = async (jobId, token) => {
  const res = await fetch(`${API_BASE_URL}job/applications/create/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`,
    },
    body: JSON.stringify({
      job: jobId,
      cover_letter: "I am very interested in this position.",
    }),
  });
  return res.json();
};

