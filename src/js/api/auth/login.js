export async function login({ email, password }) {
    const response = await fetch('https://v2.api.noroff.dev/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });

      if (!response.ok){
        throw new Error('login failed');
      }

      const data = await response.json();
      return data;
}
