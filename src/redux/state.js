import img from '../assets/image.jpg'

let state = {
    messages:
        [
        {
            name: 'Anna',
            message: 'ejfposejfosejfposdjfpsodfjpsdofjspdofjsp'
        },
        {
            name: 'Sofia',
            message: 'Hello2'
        },
        {
            name: 'Andrey',
            message: 'Hello3'
        },
        {
            name: 'Anton',
            message: 'Hello4'
        },
        {
            name: 'Miroslav',
            message: 'Hello5'
        }
        ],
    posts: [{text: 'hello', src_image: img},
        {text: 'hello2'},
        {text: 'hello3'},
        {text: 'hello4'},
        {text: 'hello5'}]
}
export let addPost = (postText) => {
    let post = {
        text:postText,
        src_image:img
    }
    state.posts.push(post)
}
export default state;