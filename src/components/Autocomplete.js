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
      let slug = e.target.innerText.toLocaleLowerCase().replaceAll(' ', '-').replaceAll('.', '-').replaceAll('(', '-').replaceAll(')', '-').replaceAll('’', '').replaceAll('–', '-').replaceAll(',', '-').replaceAll('---', '-').replaceAll('--', '-').replaceAll('&', 'and')
    if (slug.substring(slug.length - 1) === '-') {
      slug = slug.substring(0, slug.length - 1)
    }

    navigate(`/product/${slug}`)
    setFilteredSuggestions([])
    setInput('')
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
        value={input}
      />
      {showSuggestions && input && <SuggestionsListComponent />}
    </div>
  )
}

export default AutoComplete
