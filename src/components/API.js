const BACKEND_URL = 'http://localhost:8080';

export const POST_CONTACT_FORM = (data) => {
  const response = await fetch(`${BACKEND_URL}/contact`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    }
  })

  const body = response.json();
  return body;
};

export const POST_DOWNLOAD_FORM = (data) => {
  const response = await fetch(`${BACKEND_URL}/download`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    }
  })

  const body = response.json();
  return body;
};
