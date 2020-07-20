


function chuckRooms(arr) {
    if (arr.length === 0) return;

    const mid = Math.ceil(arr.length / 2);
    return Array(Math.ceil(arr.length / mid)).fill().map((_, i) => arr.slice(i * mid, i * mid + mid));
}

export default chuckRooms;