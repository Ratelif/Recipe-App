import styled from "styled-components"
import { useState } from "react"
import { FaSearch } from "react-icons/fa"
import { useNavigate } from "react-router-dom"

const Search = () => {

  const [input, setInput] = useState("") 
  const navigate = useNavigate()

  const submitHandler = (e) => {
      e.preventDefault()
      navigate(`/searched/${input}`)  
  }

  return (
    <FormStyle onSubmit={submitHandler}>
      <div>
         <FaSearch />
         <input onChange={(e)=> setInput(e.target.value)} type="text" name="search" id="searchId" value={input} />
      </div>
    </FormStyle>
  )
}

const FormStyle = styled.form`
   margin: 0rem 0rem;
   width: 60%;
   
   div {
      position: relative;
      width: 100%;
   }

   input {
      border: none;
      background: linear-gradient(35deg, #706e6e, #bab8b8);
      font-size: 1.1rem;
      color: white;
      padding: 0.6rem 3rem;
      border: none;
      border-radius: 1rem;
      outline: none;
      width: 70%;
   }

   svg{
      position: absolute;
      top: 50%;
      left: 0%;
      transform: translate(100%, -50%);
      color: red;
   }
`

export default Search
