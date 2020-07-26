

export default function piecesGroup(arr) {
    return arr.reduce((acc, cur) => {
        const val = cur['piece_category']['name'];
        const idx = acc.findIndex(x => x.name.toLowerCase() === val.toLowerCase())
        if (idx === -1) {
            acc.push(cur['piece_category'])
        }
        return acc;
    }, [])
}

