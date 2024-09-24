export async function login({ 
  email: email, 
  password: password 
}) {
  const url = 'https://v2.api.noroff.dev/auth/login';
  const body = {
    email,
    password
  }
    const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
      });

      if (!response.ok){
        throw new Error(`login failed: ${errorData.errors[0].message}`);
      }

      const data = await response.json();
      localStorage.setItem('accessToken', data.accessToken);
      return data;
}
