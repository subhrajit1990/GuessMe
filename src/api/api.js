function callBackFunction(pRes) {
	console.log("data :::"+JSON.stringify(pRes));
  if(pRes.status >= 200 &&  pRes.status < 300)
	 return pRes;
  
  const error = new Error(pRes.statusText);
  error.pRes = pRes;
  throw error;
}

export default function requestService(url, options = {}) {
  const extraParameters = {
    options,
  };

  return fetch("https://myapplicationdata.herokuapp.com/"+url,extraParameters)
    .then(res => callBackFunction(res))
    .catch(error => console.log(error))
        
}


