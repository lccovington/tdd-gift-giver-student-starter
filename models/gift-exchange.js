class GiftExchange {

    static pairs(names) {
        try {

            if(names.length % 2 !== 0) {throw "The number of names can not be odd"} ;

            names = names.sort(() => Math.random() - 0.5)

            let pairedNames = []

            while (names.length > 0) {
                const chunk = names.splice(0, 2);
                pairedNames.push(chunk);
            }
            return pairedNames
          }
          catch(err) {
            console.log(err)
          }
    }

    static traditional(names) {

        names = names.sort(() => Math.random() - 0.5)

        let pairedNameStrings = []

        for (let i = 0; i < names.length; i++) {

            let name1 = names[i]
            let name2 = names[i + 1]

            if (i == names.length - 1) {
                name1 = names[i]
                name2 = names[0]
            }

            let str = `${name1} is giving a gift to ${name2}`

            pairedNameStrings.push(str);
          }
        
        return pairedNameStrings
    }

}

module.exports = GiftExchange