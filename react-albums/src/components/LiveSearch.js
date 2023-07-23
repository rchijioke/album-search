import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "components/SearchBar";
import Results from "components/Results";

export default function LiveSearch(props) {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    const baseURL = "https://itunes.apple.com/search";
    const params = {
      term: term,
      country: "CA",
      media: "music",
      entity: "album",
      attribute: "artistTerm"
    };
    const searchURL = `${baseURL}?term=${params.term}&country=${params.country}&media=${params.media}&entity=${params.entity}&attribute=${params.attribute}`;
    axios.get(searchURL).then(response => {
      setResults(response.data.results);
    });
  },[term]);

  return (
    <Fragment>
      <header className="logo">
        <img src="images/brand.png" alt="Brand" />
      </header>
      <main>
        <SearchBar onSearch={term => setTerm(term)} />
        <Results results={results} />
      </main>
    </Fragment>
  );
}
