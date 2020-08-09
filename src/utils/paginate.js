

function paginate(items, currentPage, pageSize) {
    if (!items) return;
    if (items.length === 0) return null;

    const startIndex = currentPage * pageSize;

    return items.slice(startIndex, startIndex + pageSize);
};

export default paginate;





