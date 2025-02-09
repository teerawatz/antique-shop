import { db } from './firebase';
import { collection, addDoc, getDocs, doc, getDoc } from 'firebase/firestore';

async function addItem() {
  try {
    const docRef = await addDoc(collection(db, "items"), {
      name: "Antique Vase",
      price: 100
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

async function getItems() {
  const querySnapshot = await getDocs(collection(db, "items"));
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);
  });
}

// to do - get at_material with at_category
async function getMaterials() {
  const querySnapshot = await getDocs(collection(db, "at_material"));
  for (const materialDoc of querySnapshot.docs) {
    const materialData = materialDoc.data();
    if (materialData.ctId) {
      const categoryDoc = await getDoc(doc(db, "at_category", materialData.ctId));
      if (categoryDoc.exists()) {
        materialData.category = categoryDoc.data();
      }
    }
    console.log(materialDoc.id, '=>', materialData);
  } 
}


export async function getCategories() {

  const querySnapshot = await getDocs(collection(db, "at_category"));

  const categories = [];

  querySnapshot.forEach((doc) => {

    categories.push({ id: doc.id, ...doc.data() });

  });

  return categories;

}


// addItem();
getMaterials();

