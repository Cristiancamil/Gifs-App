import { KeyboardEvent, useState } from "react";

interface Props {
  placeHolder: string;
  textButton: string;

  onQuery: (query: string) => void;
}

const CustomSearch = ({ placeHolder, textButton, onQuery }: Props) => {

  const [query, setQuery] = useState('')

  const handleSearch = () => {
    onQuery(query);
    setQuery('');
  }

  const handleKeyDowm = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key == "Enter") {
      handleSearch();
    }
  }

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder={placeHolder}
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        onKeyDown={handleKeyDowm}
      />
      <button onClick={handleSearch}>{textButton}</button>
    </div>
  )
}

export default CustomSearch
