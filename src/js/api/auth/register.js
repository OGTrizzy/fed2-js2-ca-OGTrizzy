export async function register({
  name,
  email,
  password,
  bio,
  banner,
  avatar,
}) {
  const response = await fetch('https://v2.api.noroff.dev/auth/register', {
    method: 'POST',
    headers: {
      'Content-Type':  'application/json',
    },
    body: JSON.stringify({name, email, password, bio, banner, avatar})
  });

  if (!response.ok){
    throw new Error('register failed');
  }

  const data = await response.json();
  return data;
}
