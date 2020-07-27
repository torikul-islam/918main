


function capitalize(text) {
    let lowercase = text.toLowerCase();
    if (typeof lowercase !== "string") return lowercase;
    return lowercase.split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}


export default capitalize;