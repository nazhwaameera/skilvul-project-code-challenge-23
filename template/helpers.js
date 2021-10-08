export const getPosts = async() => {

};

export const getPost = async(post_id) => {

};

export const getPostComments = async(post_id) => {

};

export const getAuthor = async(user_id) => {
    try {
        var users = await fetch('https://jsonplaceholder.typicode.com/users/' + user_id);
        return users.json();
    } catch (error) {
        console.log('getAuthor', error);
        throw error;
    }
};

export const getPostsByAuthor = async(author_id) => {
    for (author_id in posts.user_id) {
        createPostElement(posts.body);
    }
};

export const getRandomPic = async() => {
    try {
        const image = await fetch('https://source.unsplash.com/random/720x480');
        return image.url;
    } catch (error) {
        console.log('getRandomPic', error);
        throw error;
    }
};

export const getRandomProfile = async() => {
    try {
        const image = await fetch('https://source.unsplash.com/480x480/?profile');
        return image.url;
    } catch (error) {
        console.log('getRandomProfile', error);
        throw error;
    }
};