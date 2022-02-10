export const getUserPosts = () => {
    return fetch(`https://jsonplaceholder.typicode.com/posts`)
    .then((response) => response.json())
}