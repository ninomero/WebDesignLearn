import React, { useEffect, useState } from 'react'
import { ProductCard } from './../components/UIkit'

import { db } from '../firebase'
import { collection, getDocs } from 'firebase/firestore';

const ProductList = () => {
  const [lists, setList] = useState([]);

  // FireStore データ取得
  useEffect(() => {
    async function fetchData() {
      console.log("useEffect開始");
      try {
        console.log('GetData開始')

        const snapshots = collection(db, "products")
        await getDocs(snapshots).then((snapShot) => {
          setList(snapShot.docs.map((doc) => ({ ...doc.data() })))
        })
        console.log(lists);
      }
      catch (error) {
        console.log(`There was an error: ${error}`);
        alert("データが正しく取得できておりません");
      }
    }

    fetchData()
  }, [])

  return (
    <setcion className="c-section-wrapin">
      <div className='p-grid__row'>
        {lists.map((list) => (
          <div key={list.id}>
            <ProductCard name={list.name} price={list.price} key={list.id}/>
          </div>
        )
        )}
      </div>
    </setcion>
  )
}

export default ProductList