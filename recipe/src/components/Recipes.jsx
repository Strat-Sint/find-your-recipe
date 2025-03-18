import { useEffect, useState } from "react";
import Search from "./Search";
import Pagination from "./Pagination";
import { Link } from "react-router";


function Recipes() {

  
  const [recipes, setRecipes] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [page, setPage] = useState(1)
  const [total, setTotal] = useState(0)
  const limit = 6

  
  useEffect(() => {
    const skip = (page - 1) * limit

    fetch(`https://dummyjson.com/recipes?limit=${limit}&skip=${skip}`)
    .then(response => response.json())
    .then(data => {
      setRecipes(data.recipes);
      setTotal(data.total);
      setLoading(false);
      setSearchTerm("");
    })
    .catch((err) => {
      setError(err);
      console.log(`An error occured ${error}`);
      setLoading(false);
    });
  }, [page])


  
  
  const filterRecipe = recipes.filter((resi) => resi.name.toLowerCase().includes(searchTerm.toLowerCase()))
  const formatInstructions = (text) => {    
  if(String(text).includes(',')) return String(text).split(',').join(' ')
  }

  const formatIngredients = (text) => {
    if(String(text).includes(',')) return String(text).split(',').join(', ')
  }

  return (
    <>
      <div className="full">
        <div className="search">
        <Search searchTerm={searchTerm} setSearchTearm={setSearchTerm}/>
        </div>
        <h2 className="recipesH2">You can click on a recipe to display it seperatelly</h2> 
        <div className="container">
            <div className="card">
              {filterRecipe.map((res, ind) => {
                  return (
                    <Link to={`/recipe/${res.id}`} key={ind}>
                      <div className="recipe">
                        <h3>{res.name}</h3>
                        <p><span className="big">Ingredients</span>:<br></br> {formatIngredients(res.ingredients)}</p>
                        <p><span className="big">Instructions</span>:<br></br>{formatInstructions(res.instructions)}</p>
                        <div className="info">
                          <p><span>Difficulty</span>: {res.difficulty}</p>
                          <p><span>Servings</span>: {res.servings}</p>
                          <p><span>Time</span>: {res.prepTimeMinutes + res.cookTimeMinutes} minutes</p>
                        </div>
                      </div>
                    </Link>   
                  )
                })}
            </div>
        </div>
        <div className="loading">
          {loading && <p>Loading...</p>}
        </div>
        <div>
            <Pagination page={page} setPage={setPage} limit={limit} total={total}/>
        </div>
      </div>

    </>
    
  )
}

export default Recipes
