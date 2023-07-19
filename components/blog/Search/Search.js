import { useSelector } from 'react-redux';
import styles from './search.module.css';
import { AiOutlineSearch } from 'react-icons/ai';
import { useEffect, useState } from 'react';

const Search = ({ setSearchResult }) => {
  const { posts } = useSelector((store) => store.blog);
  const [query, setQuery] = useState('');
  useEffect(() => {
    setSearchResult(posts);
  }, [posts]);
  const handleOnChange = (e) => {
    setQuery(e.target.value);
    if (e.target.value == '') return setSearchResult(posts);
    const resultPosts = posts.filter(
      (post) =>
        post.title.toLowerCase().includes(e.target.value.toLowerCase()) ||
        post.body.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setSearchResult(resultPosts);
  };
  return (
    <div className={styles.form}>
      <input
        type="text"
        placeholder="Search"
        onChange={handleOnChange}
        value={query}
      />
      <div className={styles.icon}>
        <AiOutlineSearch />
      </div>
    </div>
  );
};
export default Search;
