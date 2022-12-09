export async function obtainClient() {
  const response = await fetch(import.meta.env.VITE_API_URL);
  const result = await response.json();

  return result;
}

export async function obtainOneClient(id) {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/${id}`);
  const result = await response.json();

  return result;
}

export async function addNewCliente(data) {
  try {
    const response = await fetch(import.meta.env.VITE_API_URL, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    await response.json();
  } catch (error) {
    console.error(error);
  }
}
