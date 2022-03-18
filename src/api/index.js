
const baseURL = 'https://strangers-things.herokuapp.com/api/2112-FTB-ET-WEB-PT/'

export const getPosts = async () => {
    const url = `${baseURL}/posts/`;
    const response = await fetch(url)
    const json = await response.json()
    return json;
}

export const registerNewUser = async (newUser) => {
    const url = `${baseURL}/users/register`;
    const response = await fetch(url, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user: {
                usernanme: newUser.user,
                password: newUser.password,
            }
        })
    });
}

export const createNewPost = async (newPost) => {
    const url = `${baseURL}/posts/`;
    // const token = "stranger_things_JWT";
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer TOKEN_STRING_HERE' //`${token}`
            },
            body: JSON.stingify({
                post: {
                    title: newPost.title,
                    description: newPost.description,
                    price: newPost.price,
                    location: newPost.location,
                    willDeliver: true
                }
            })
        })
        const data = response.json();
        return data;
    }
    catch(error){console.error(error)}
}
