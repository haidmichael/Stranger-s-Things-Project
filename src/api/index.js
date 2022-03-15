
const baseURL = 'https://strangers-things.herokuapp.com/api/2112-FTB-ET-WEB-PT/'

export const getPosts = async () => {
    const url = `${baseURL}/posts/`;
    const response = await fetch(url)
    const json = await response.json()
    return json;
} 

export const registerNewUser = async (newUser) => {
    const url = `${baseURL}/users/register`;
    const response = await fetch (url, {
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

    const json = await response.json();
    console.log(json);
    return json;
};




export const createNewPost = async (newPost) => {
    const url = `${baseURL}/posts/`;
    const response = await fetch (url, {
        method:"POST",
        headers: {
            'Content-Type': 'application/json' 
        },
        body: JSON.stringify(newPost)
    });

    const json = await response.json();
    console.log(json);
    return json;
};