import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const MovieDetails = () => {
  return (
    <div className="mt-5">
      <div class="relative mb-10 mx-0 lg:mx-5 grid grid-cols-1 lg:grid-cols-2 w-full  flex-row rounded-xl   bg-clip-border text-gray-300 shadow-md">
        <div>
		<div class="relative overflow-hidden h-[300px] w-2/3 text-gray-300  shrink-0 rounded-xl bg-clip-border">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80"
            alt="image"
            class="object-cover w-full h-full"
          />
		  
        </div>
		<Button className=" bg-white">Play Trailer</Button>
		</div>
        <div class="p-6">
          <h6 class="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-pink-500 uppercase">
            startups
          </h6>
          <h4 class="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
            Lyft launching cross-platform service this week
          </h4>
          <p class="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
            Like so many organizations these days, Autodesk is a company in
            transition. It was until recently a traditional boxed software
            company selling licenses. Yet its own business model disruption is
            only part of the story
          </p>
          <div className="container p-2 mx-auto rounded-md sm:p-4 dark:text-gray-100 dark:bg-gray-900">
	<h2 className="mb-3 text-2xl font-semibold leadi">Standings</h2>
	<div className="overflow-x-auto">
		<table className="min-w-full text-xs">
			<thead className="rounded-t-lg dark:bg-gray-700">
				<tr className="text-right">
					<th title="Ranking" className="p-3 text-left">Download</th>
					<th title="Team name" className="p-3 text-left">Quality</th>
					<th title="Wins" className="p-3">Language</th>
					<th title="Losses" className="p-3">Size</th>
				</tr>
			</thead>
			<tbody>
				
				
				<tr className="text-right border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-800">
					<td className="px-3 py-2 text-left">
						<span className="text-red-900 text-[15px]"><a href="">Download</a></span>
					</td>
					<td className="px-3 py-2 text-left">
						<span>1080p</span>
					</td>
					<td className="px-3 py-2">
						<span>Bangla, English</span>
					</td>
					<td className="px-3 py-2">
						<span>--</span>
					</td>
					
					
				</tr>
				<tr className="text-right border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-800">
					<td className="px-3 py-2 text-left">
					<span className="text-red-900 text-[15px]"><a href="">Download</a></span>
					</td>
					<td className="px-3 py-2 text-left">
						<span>720p</span>
					</td>
					<td className="px-3 py-2">
						<span>English</span>
					</td>
					<td className="px-3 py-2">
						<span>--</span>
					</td>
					
					
				
				</tr>
				<tr className="text-right border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-800">
					<td className="px-3 py-2 text-left">
					<span className="text-red-900 text-[15px]"><a href="">Download</a></span>
					</td>
					<td className="px-3 py-2 text-left">
						<span>1080p</span>
					</td>
					<td className="px-3 py-2">
						<span>English</span>
					</td>
					<td className="px-3 py-2">
						<span>--</span>
					</td>
					
					
					
				</tr>
				
			</tbody>
		</table>
	</div>
</div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
