let hexValues = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e'];
const randomGradient = () => {
    const populate = () => {
        let color = "#";
        for(let i = 0; i < 6; i++) {
            let word = Math.floor(Math.random() * 14)
            color += hexValues[word]
        }
        return color
    }

    const firstColor = populate();
    const secondColor = populate();

    return `linear-gradient(50deg, ${firstColor}, ${secondColor})`;
}

export default randomGradient;