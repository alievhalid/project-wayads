export const getUserPosts = (userId) => {

    return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
}
