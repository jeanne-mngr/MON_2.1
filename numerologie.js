function nombre(chaîne) {
    let somme = 0
    for (let i=0; i < chaîne.length; i++) {
        somme += chaîne.charCodeAt(i)
    }
    return somme
}

function somme(nombre) {
    let somme = 0
    chaîne = String(nombre)
    for (let i=0; i < chaîne.length ; i++) {
        somme += parseInt(chaîne.charAt(i))
    }
    return somme
}

function chiffreAssocie(chaîne) {
    valeur = nombre(chaîne)

    while (valeur > 9) {
        valeur = somme(valeur)
    }
    return valeur
}


// // test de nombre(chaîne)

// // est-ce 2x plus ?
// console.log(nombre("coucou"))
// console.log(nombre("cou"))

// // chaque caractère :la somme est-elle correcte ?
// for (let c of "cou") { 
//     console.log(c + " : " + nombre(c))
// }
// // fin de test de nombre(chaîne)


// // test de somme(nombre)
// console.log(somme(132))

// // avec un chiffre : charAt != charCodeAt
// console.log(somme(4))
// console.log("4".charCodeAt(0))
// console.log("4".charAt(0))

// // conversion chaine de caractères et nombre
// console.log(typeof "4".charAt(0))
// console.log(parseInt("4".charAt(0)))
// console.log(typeof parseInt("4".charAt(0)))
// // fin de test de somme(nombre)

// test de chiffreAssocie(chaîne)

//test valeur somme des chiffres
// console.log(nombre("coucou"))
// console.log(chiffreAssocie("coucou"))
// fin de test de chiffreAssocie(chaîne)