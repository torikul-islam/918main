


function capitalize(text) {
    if (text === undefined) return;
    let lowercase = text.toLowerCase();
    if (typeof lowercase !== "string") return lowercase;
    return lowercase.split(' ')
        .map(word => word.charAt(0) === "(" ? "(" + word.charAt(1).toUpperCase() + word.slice(2) : word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}


export default capitalize;