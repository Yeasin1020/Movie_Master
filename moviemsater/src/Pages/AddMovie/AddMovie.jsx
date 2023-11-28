import React, { useContext } from "react";
import "./AddMovie.scss";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const AddMovie = () => {

  const { user } = useContext(AuthContext);
  const notify = () => {
    return toast.success("Movie Added Successful!!!", {
      position: toast.POSITION.BOTTOM_CENTER,
    });
  }
 

  const handleAddMovie = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const type = form.type.value;
    const category = form.category.value;
    const Quality = form.Quality.value;
    const Language = form.Language.value;
    const hostEmail = form.email.value;
    const hostName = form.hostName.value;
    const thumbnail = form.thumbnail.value;
    const MovieLink = form.movieLink.value;
    const desc = form.description.value;
    console.log(name, type, category, thumbnail, MovieLink, desc, Quality, Language, hostEmail, hostName);
    const addMovie = { name, type, category, thumbnail, MovieLink, desc, Quality, Language, hostEmail, hostName }

    fetch('http://localhost:5000/addMovie', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(addMovie)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.insertedId) {
          form.reset();
          notify();
        }
        
      })

  }

  return (
    <div>
      <section class="bg-white dark:bg-gray-900">
        <div class="py-8 px-4 mx-auto max-w-2xl lg:py-16">
          <h2 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">
            Add a new product
          </h2>
          <form action="#" onSubmit={handleAddMovie}>
            <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
              <div class="sm:col-span-2">
                <label
                  for="name"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Movie Name/Anime Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Type name"
                  required
                />
              </div>
              <div>
                <label
                  for="type"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Type
                </label>
                <select
                  id="type"
                  name="type"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                >
                  <option selected="">Select Type</option>
                  <option value="movie">Movie</option>
                  <option value="anime">Anime</option>
                </select>
              </div>
              {/* <div class="w-full">
                  <label for="price" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
                  <input type="number" name="price" id="price" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="$2999" required=""/>
              </div> */}
              <div>
                <label
                  for="category"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Category
                </label>
                <select
                  id="category"
                  name="category"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                >
                  <option selected="">Select category</option>
                  <option value="Romantic">Romantic</option>
                  <option value="Thriller">Thriller</option>
                  <option value="Story">Story</option>
                  <option value="Sad">Sad</option>
                  <option value="Action">Action</option>
                  <option value="Horror">Horror</option>
                  <option value="Drama">Drama</option>
                  <option value="Comedy">Comedy</option>
                  <option value="War">War</option>
                </select>
              </div>

              {/* Quality, Language	 */}

              <div>
                <label
                  for="Quality"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Quality
                </label>
                <select
                  id="Quality"
                  name="Quality"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                >
                  <option selected="">Select Quality</option>
                  <option value="720p">720p</option>
                  <option value="1080p">1080p</option>
                </select>
              </div>
              {/* <div class="w-full">
                  <label for="price" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
                  <input type="number" name="price" id="price" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="$2999" required=""/>
              </div> */}
              <div>
                <label
                  for="Language"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Language
                </label>
                <select
                  id="Language"
                  name="Language"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                >
                  <option selected="">Select Language</option>
                  <option value="Bangla">Bangla</option>
                  <option value="English">English</option>
                  <option value="Hindi">Hindi</option>
                  <option value="Tamil">Tamil</option>

                </select>
              </div>
              {/* Host Email */}
              <div class="sm:col-span-2">
                <label
                  for="Email"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Host Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={user?.email}
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Host Email "
                  required
                />
              </div>
              {/* Host Name */}
              <div class="sm:col-span-2">
                <label
                  for=""
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Host Name
                </label>
                <input
                  type="text"
                  name="hostName"
                  id="hostName"
                  value={user?.displayName}
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Host Name "
                  required
                />
              </div>

              <div class="sm:col-span-2">
                <label
                  for="thumbnail"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Thumbnail
                </label>
                <input
                  type="link"
                  name="thumbnail"
                  id="thumbnail"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Thumbnail Link "
                  required
                />
              </div>


              <div class="sm:col-span-2">
                <label
                  for="name"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Movie Link
                </label>
                <input
                  type="link"
                  name="movieLink"
                  id="link"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Movie Link "
                  required
                />
              </div>

              <div class="sm:col-span-2">
                <label
                  for="description"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  rows="8"
                  class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Your description here"
                  required
                ></textarea>
              </div>
            </div>
            <button
              type="submit"
              class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-[#6B717A] rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
            >
              Add Movie
            </button>
            <ToastContainer></ToastContainer>
          </form>
        </div>
      </section>
    </div>
  );
};

export default AddMovie;
