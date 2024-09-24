export async function register({ name, email, password }) {
    const url = 'https://v2.api.noroff.dev/auth/register';
    const body = {
        name: name,
        email: email,
        password: password
      };
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type':  'application/json',
    },
    body: JSON.stringify(body)
  });

  if (!response.ok){
    throw new Error(`Registration failed`);
  }

  const data = await response.json();
  return data;
}