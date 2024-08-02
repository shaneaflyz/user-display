import "./Home.css";
import React, { useEffect, useState } from "react";
import { fetchFriends } from "../../services/friendService";
import FriendCard from "../FriendCard/FriendCard";
import ReactPaginate from "react-paginate";

const Home = () => {
  const [friends, setFriends] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const [customPage, setCustomPage] = useState('')
  const [error, setError] = useState("");

  const friendsPerPage = 10;

  useEffect(() => {
    const friendList = async () => {
      const result = await fetchFriends();
      setError("");
      if (result.success) {
        setError("");
        setFriends(result.data);
        setPageCount(Math.ceil(result.data.length / friendsPerPage))
      } else {
        setError(result.message);
      }
    };

    friendList();
  }, [])

  const handleCustomPageChange = (e) => {
    setCustomPage(e.target.value)
  }

  const handleCustomPageSubmit = (e) => {
    e.preventDefault()
    const page = parseInt(customPage, 10) - 1
    if (page >= 0 && page < pageCount) {
      setCurrentPage(page)
    }
  }

  const handlePageClick = (event) => {
    setCurrentPage(event.selected)
  }

  const offset = currentPage * friendsPerPage
  const currentPageData = friends.slice(offset, offset + friendsPerPage)

  return error ? (
    <div className="error">{`An Error has occured: ${error}`}</div>
  ) : (
    <div className="friends-list-container">
      <div className="friends-list">
        {currentPageData.map((friend, index) => (
          <FriendCard key={index} friend={friend} />
        ))}
      </div>
      <div className="pagination-container">
        <ReactPaginate
          previousLabel={"<"}
          nextLabel={">"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          activeClassName={"active"}
          forcePage={currentPage}
        />
      </div>
      <form onSubmit={handleCustomPageSubmit} className="custom-page-form">
        <input
          type="number"
          placeholder="..."
          value={customPage}
          onChange={handleCustomPageChange}
          className="custom-page-input"
          min="1"
          max={pageCount}
        />
        <button type="submit" className="custom-page-button">
          Go
        </button>
      </form>
    </div>
  );
};

export default Home;
