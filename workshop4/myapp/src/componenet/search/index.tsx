import React, { ChangeEvent, useState } from "react";
import axios from "axios";
import { User } from "../types/user";
import SearchResponse from "../types/search.type";
type Props = {
  onSearchUrl: (value: SearchResponse) => void;
};
function Search(props: Props) {
  const [keyboard, setKeyboard] = useState('');
  const { onSearchUrl } = props;

  const searchUrl = async () => {
    onSearchUrl({ isFirst: false, isLoading: true, isError: false, user: [] });

    try {
      const response = await axios.get(
        `https://api.github.com/search/users?q=${keyboard}`
      );
      if (response.status === 200) {
        onSearchUrl({
          isFirst: false,
          isLoading: false,
          isError: false,
          user: response.data.items,
        });
      } else {
        onSearchUrl({
          isFirst: false,
          isLoading: true,
          isError: true,
          user: [],
        });
      }
    } catch (e) {
     onSearchUrl({
          isFirst: false,
          isLoading: true,
          isError: true,
          user: [],
        })
     
    }
  };
  return (
    <div>
      {" "}
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <div>
          <input
            type="text"
            placeholder="enter the name you search"
            value={keyboard}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setKeyboard(e.target.value);
            }}
          />
          &nbsp;<button onClick={searchUrl}>Search</button>
        </div>
      </section>
    </div>
  );
}

export default Search;
