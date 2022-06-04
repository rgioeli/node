import fs from 'fs'

export const readOrderFile = filepath => {
    const readFile = fs.readFileSync(filepath, "utf-8");
    const order = parseOrderFile(readFile)
    return order;
}

const parseOrderFile = data => {
    const arr = data
    const order = arr.split("\n")
    .map(x => x.split(":"))
    .reduce((newObj, currObj) => {
        const scrapedCurrObj = parseFloat(currObj[1]);
        newObj.push({name: currObj[0], price: scrapedCurrObj})
        return newObj;
    }, [])

    return order;
}