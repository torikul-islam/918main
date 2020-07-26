

function shopPiecesGroup(arr) {
    let mod = []
    for (const item of arr) {
        const { piece_category } = item;
        const inx = mod.findIndex(x => x.name === piece_category.name.toLowerCase());
        if (inx === -1) {
            mod.push({
                name: piece_category.name.toLowerCase(),
                ids: [item.pk]
            });
        } else {
            mod[inx].ids.push(item.pk)
        }
    }
    return mod;
}

export default shopPiecesGroup;