export async function getKey(name) {
    //call for api to generate a api key for the user
    const response = await fetch('https://v2.api.noroff.dev/auth/create-api-key', {
        method: 'POST',
        body: JSON.stringify({ name }),
        headers: {
            'Content-Type': 'application/json',
        }
    });

    if (!response.ok) {
        throw new Error('failed to create api key');
    }

    const data = await response.json();
    return data.apiKey;
}
