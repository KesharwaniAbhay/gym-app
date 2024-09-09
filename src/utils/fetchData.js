export const exerciseOptions = {
	method: 'GET',
	headers: {
	  'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
	  'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
	},
  };
  
export const youtubeOptions = {
	method: 'GET',
	headers: {
	  'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
	  'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
	},
  };
  
  export const fetchData = async (url, options) => {
	const res = await fetch(url, options);
	let data;
	if(res.ok){
		console.log("ok")
		data = await res.json();
	}
	else{
		console.log("error")
	}
	return data;
  };
  
  