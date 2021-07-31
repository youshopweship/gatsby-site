import React, { useState } from 'react'
import { navigate } from 'gatsby';


const AutoComplete = ({ suggestions }) => {
  const [filteredSuggestions, setFilteredSuggestions] = useState([])
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(0)
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [input, setInput] = useState("")

  const onChange = (e) => {
    const userInput = e.target.value;

    // filter our suggestions that don't contain user's input
    const unLinked = suggestions.filter(
      (suggestion) =>
        suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    )

    setInput(e.target.value)
    setFilteredSuggestions(unLinked)
    setActiveSuggestionIndex(0)
    setShowSuggestions(true)
  }

  const onClick = (e) => {
    navigate(`/product/${(e.target.innerText).toLocaleLowerCase().replaceAll(' ', '-').replaceAll('.', '-')}`)
    setFilteredSuggestions([])
    setInput(e.target.innerText)
    setActiveSuggestionIndex(0)
    setShowSuggestions(false)
  }

  const SuggestionsListComponent = () => {
    return filteredSuggestions.length ? (
      <ul class="suggestions" style={{ margin: 'auto' }}>
        {filteredSuggestions.map((suggestion, index) => {
          let className;
          // Flag the active suggestion with a class
          if (index === activeSuggestionIndex) {
            className = "suggestion-active";
          }
          return (
            <li style={{ textAlign: 'center' }} className={className} key={suggestion} onClick={onClick}>
              {suggestion}
            </li>
          );
        })}
      </ul>
    ) : (
      <div class="no-suggestions" style={{ textAlign: 'center' }}>
        <em>Product not found!</em>
      </div>
    );
  };


  return (
    <div style={{ textAlign: 'center' }}>
      <input
        type="text"
        placeholder="Search products..."
        onChange={onChange}
        // onKeyDown={onkeydown}
        value={input}
      />
      {showSuggestions && input && <SuggestionsListComponent />}
    </div>
  )
}

export default AutoComplete
