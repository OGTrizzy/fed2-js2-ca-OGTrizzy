import { API_AUTH_LOGIN } from "../constants"; 

export async function login({ email, password }) {
  const url = API_AUTH_LOGIN;
  const body = {
    email,
    password,
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Login failed: ${errorData.errors[0]?.message}`);
    }

    const data = await response.json();
    localStorage.setItem('accessToken', data.accessToken);
    return data;
  } catch (error) {
    console.error('Error during login:', error.message);
    throw error;
  }
}

