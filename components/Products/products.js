import React, { useEffect, useState } from 'react'
import HeadNav from './headNav'
import Search from './Search'
import CockTails from './cockTails'
import Loading from '../tour-project/loading'
import { useGlobalContext } from './context'

// const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

const Products = () => {
  // const [Drinks, setDrinks] = useState([]);
  // const [loading, setLoading] = useState(true)
  // const [SearchTerm, setSearchTerm] = useState('a');

  // const fetchDrinks = async () => {
  //   setLoading(true);
  //   try {
  //     const response = await fetch(url); //fetching the url 
  //     const data = await response.json();
  //     console.log(data);
  //     const { drinks } = data;
  //     if (drinks) {
  //       const newCocktails = drinks.map((item) => {
  //         const {
  //           idDrink,
  //           strDrink,
  //           strDrinkThumb,
  //           strAlcoholic,
  //           strGlass,
  //         } = item

  //         return {
  //           id: idDrink,
  //           name: strDrink,
  //           image: strDrinkThumb,
  //           info: strAlcoholic,
  //           glass: strGlass,
  //         }
  //       })
  //       setDrinks(newCocktails);
  //     }
  //     else {
  //       setDrinks([])
  //     }
  //     setLoading(false)
  //   }
  //   catch (error) {
  //     setLoading(false)
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   fetchDrinks();
  // }, [])
  const { cocktails, loading } = useGlobalContext()
  if (loading) {
    return <Loading />
  }
  if (cocktails.length < 1) {
    return (
      <h2 className='section-title'>
        no cocktails matched your search criteria
      </h2>
    )
  }
  return (
    <div className='min-h-full w-full bg-grey'>
      <HeadNav />
      <Search />
      {cocktails.map((item) => {
        return (
          <CockTails {...item} />
        )
      })}
    </div>
  )
};

export default Products;
