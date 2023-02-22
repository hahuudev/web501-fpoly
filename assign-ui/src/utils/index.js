export const generateSlug = (string)=> {
    return string.toLowerCase().replaceAll(' ', '-')
}