
import { getFirestore, addDoc, getDoc, getDocs, deleteDoc, updateDoc, collection, doc } from 'firebase/firestore'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDkxYtvDJ6wL4u7aU7gvS4Q8-ynR2l0b_8",
    authDomain: "entrega-final-cavdeichuk.firebaseapp.com",
    projectId: "entrega-final-cavdeichuk",
    storageBucket: "entrega-final-cavdeichuk.appspot.com",
    messagingSenderId: "1050582346846",
    appId: "1:1050582346846:web:7a3601c1dc2ead667a18cf"
};

// Initialize Firebase
initializeApp(firebaseConfig);


//Consultar BDD
const bdd = getFirestore()

/*
    CREATE --> post
    READ --> get
    UPDATE --> put
    DELETE --> delete
*/

//CRUD PRODUCTOS

export const createProducts = async () => {
    const promise = await fetch('./json/productos.json')
    const productos = await promise.json()
    productos.forEach(async (prod) => {
        await addDoc(collection(bdd, "products"), { //Si existe la coleccion te agrega nuevos productos a la misma, si no te crea la coleccion y te envia estos productos
            nombre: prod.name,
            color: prod.colour,
            idCategoria: prod.idCategoria,
            stock: prod.stock,
            precio: prod.price,
            img: prod.img
        })
    })

}

export const getProducts = async () => {
    const prods = await getDocs(collection(bdd, "products"))
    const items = prods.docs.map(prod => {
        return { ...prod.data(), id: prod.id }
    })
    return items
}

export const getProduct = async (id) => {
    const prod = await getDoc(doc(bdd, "products", id))
    const item = { ...prod.data(), id: prod.id }
    return item
}
//1 o 0
//Tanto Update como Delete no devuelven un estado
export const updateProduct = async (id, info) => {
    await updateDoc(doc(bdd, "products", id), info)
}

export const deleteProduct = async (id) => {
    await deleteDoc(doc(bdd, "products", id))
}

// CREATE y READ OrdenCompra

export const createOrdenCompra = async (cliente, precioTotal, carrito, fecha) => {
    const ordenCompra = await addDoc(collection(bdd, "ordenCompra"), {
        cliente: cliente,
        items: carrito,
        precioTotal: precioTotal,
        fecha: fecha
    })
    return ordenCompra
}

export const getOrdenCompra = async (id) => {
    const ordenCompra = await getDoc(doc(bdd, "ordenCompra", id))
    const item = { ...ordenCompra.data(), id: ordenCompra.id }
    return item
}

export const deleteOrdenCompra = async (id) => {
    await deleteDoc(doc(bdd, "ordenCompra", id))
}