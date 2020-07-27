

function paginate(items, currentPage, pageSize) {
    if (items.length === 0) return null;

    const startIndex = currentPage * pageSize;

    return items.slice(startIndex, startIndex + pageSize);
};

export default paginate;


// paginate([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14], 2, 5);





