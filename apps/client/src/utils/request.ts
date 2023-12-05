const request = async (input: RequestInfo | URL, init?: RequestInit) => {
  const promise = new Promise<Response>((resolve, reject) => {
    fetch(input, init)
      .then((response) => {
        if (response.ok) {
          resolve(response);
        } else {
          reject(response);
        }
      })
      .catch((error) => reject(error));
  });

  return promise;
};

export default request;
