const generateRandomBetween = (min, max, exclude) => {
    min = Math.ceil(min)
    max = Math.floor(max)

    const randomNum = Math.floor(Math.random() * (max - min)) + min

    console.log(min, max, exclude)

    if (randomNum == exclude) {
        return generateRandomBetween(min, max, exclude)
    } else {
        return randomNum
    }
}

export default generateRandomBetween