
const baseURL = 'https://strangers-things.herokuapp.com/api/2112-FTB-ET-WEB-PT/'

export const getPosts = async () => {
    const url = `${baseURL}/posts/`;
    const response = await fetch(url)
    const json = await response.json()
    return json;
}

export const registerNewUser = async (userObject) => {
    const url = `${baseURL}/users/register`;
    const response = await fetch(url, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user: {
                username: userObject.user,
                password: userObject.password,
            },
        }),
    });
    console.log(response);

    const json = await response.json();
    console.log(json);

    localStorage.setItem('stranger_things_JWT', json.data.token)
    return json;
}

export const createNewPost = async (newPost) => {
    const url = `${baseURL}/posts/`;
    const token = localStorage.getItem("stranger_things_JWT");
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(
                newPost
            )
        })
        const data = response.json();
        return data;
    }
    catch(error){console.error(error)}
}

export const loginUser = async (userObject) => {
    const url = `${baseURL}/users/login`;
    const response = await fetch (url, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user: {
                username: userObject.user,
                password: userObject.password,
            },
        }),
    });

    console.log(response);

    const json = await response.json();
    console.log(json);

    localStorage.setItem('stranger_things_JWT', json.data.token)
    return json;
};


export const testAuthentication = async () => {
    const url = `${baseURL}/test/me`;

    const response = await fetch (url)
    console.log(response);

    const json = await response.json();
    console.log(json)

    return json;
}


export const editPost = async (newPost) => {
    const url = `${baseURL}/posts/`;
    const token = localStorage.getItem("stranger_things_JWT");
    try {
        const response = await fetch(url, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(
                newPost
            )
        })
        const data = response.json();
        if(data && data.title) {
            newPosts = posts.map(post => {
                if(post.id === postId) {
                    return data;
                } else {
                    return post;
                }
            })
        }
    }
    catch(error){console.error(error)}
}


export const handleDelete = async (postIdToDelete) => {
    const url = `${baseURL}/posts/POST_ID`;
    const token = localStorage.getItem("stranger_things_JWT");
    const response = await fetch(url, {
                    method: "DELETE",
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    },
                    body: JSON.stringify(
                    )
                })
                const data = await response.json();
                if(data) {
                    const newPost = posts.filter(post => post.id !== postIdToDelete);
                    setPost(newPost);
                }
}
