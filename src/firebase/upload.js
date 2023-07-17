import MOCK_DATA_2 from '../data/MOCK_DATA_2.json' assert { type: 'json' }
import { collection, addDoc } from 'firebase/firestore'
import { db } from './config.js'

const productosRef = collection(db, "productos")

MOCK_DATA_2.forEach((item) => {
    addDoc(productosRef, item)
})