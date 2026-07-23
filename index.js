// a function that reverses a string
function reverseString(str) {
    return str.split('').reverse().join('');
}

// a function that sluggifies a string
function slugify(str) {
    return str
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-');
}
