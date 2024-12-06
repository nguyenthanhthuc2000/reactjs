import React, { useEffect } from "react";
import { useParams } from "react-router-dom"; // Import useParams
import users from "../data.json";
import { Link } from "react-router";

function User() {
  const { id } = useParams(); // Lấy tham số 'id' từ URL

  useEffect(() => {
    // Có thể thực hiện các logic tùy chỉnh hoặc API call tại đây
    console.log('User ID:', id);
  }, [id]);

  const user = users.find((user) => user.id === id); // Tìm người dùng theo ID trong data.json

  return (
    <div className="card-wrapper">
      {user ? (
        <div>
          <div class="fui-loading-square">
            <span class="logo"> 
              { user.name }
            </span>
            <div class="square1"></div>
            <div class="square2"></div>
            <div class="square3"></div>
            <div class="square4"></div>
            <div class="square5"></div>
            <div class="square6"></div>
            <div class="square7"></div>
            <div class="square8"></div>
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <Link to="/" title="View Detail" class="fui-button-moveOver">
            Quay về
            <span class="btn-icon">
              <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14.0909 7.26521C14.4968 6.8906 15.1294 6.9159 15.504 7.32172L18.7348 10.8217C19.0884 11.2047 19.0884 11.7952 18.7348 12.1782L15.504 15.6783C15.1294 16.0841 14.4968 16.1094 14.091 15.7348C13.6851 15.3602 13.6598 14.7276 14.0344 14.3217L15.716 12.5L6 12.5C5.44771 12.5 5 12.0523 5 11.5C5 10.9477 5.44771 10.5 6 10.5L15.716 10.5L14.0344 8.67829C13.6598 8.27247 13.6851 7.63981 14.0909 7.26521Z"
                  fill="currentColor"
                />
              </svg>
            </span>
          </Link>
        </div>
      ) : (
        <p>User not found</p>
      )}
    </div>
  );
}

export default User;
