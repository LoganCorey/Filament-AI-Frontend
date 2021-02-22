import axios from "axios";
import annotateJWT from "./annotateJWT";
let baseUrl;

if (process.env.NODE_ENV === "development") {
  baseUrl = "http://localhost:8000/api/v1/";
}else{
  baseUrl = "https://api-annotator.herokuapp.com/api/v1/";
}

export const loginAction = (email, password) => {
  return axios
    .post(`${baseUrl}user/login`, { email, password })
    .then((res) => {
      // if successful store cookie
      //console.log(res)
      annotateJWT.setJwt(res.data.token);
      //console.log(annotateJWT.getJwt())
      return res;
    })
    .catch((e) => {
      return e.response;
    });
};

export const registerAction = (email, phone, password, passwordConfirm) => {
  return axios
    .post(`${baseUrl}user/signup`, {
      email,
      phone,
      password,
      passwordConfirm,
    })
    .then((res) => {
      // if successful store cookie
      annotateJWT.setJwt(res.data.token);
      return res;
    })
    .catch((e) => {
      return e.response;
    });
};

export const logoutAction = () => {
  annotateJWT.eraseJwt();
};

export const getTags = () => {
  const jwt = annotateJWT.getJwt();
  const headers = {
    headers: {
      Authorization: "Bearer " + jwt,
    },
  };
  return axios
    .get(`${baseUrl}tag`, headers)
    .then((res) => {
      return res;
    })
    .catch((e) => {
      return e.response;
    });
};

export const getSnippets = () => {
  const jwt = annotateJWT.getJwt();
  const headers = {
    headers: {
      Authorization: "Bearer " + jwt,
    },
  };
  return axios
    .get(`${baseUrl}snippet`, headers)
    .then((res) => {
      return res;
    })
    .catch((e) => {
      return e.response;
    });
};

export const createSnippet = (snippet) => {
  const jwt = annotateJWT.getJwt();
  const headers = {
    headers: {
      Authorization: "Bearer " + jwt,
    },
  };
  return axios
    .post(`${baseUrl}snippet`, { snippet }, headers)
    .then((res) => {
      return res;
    })
    .catch((e) => {
      return e.response;
    });
};

export const patchSnippet = (id, snippet) => {
  const jwt = annotateJWT.getJwt();
  const headers = {
    headers: {
      Authorization: "Bearer " + jwt,
    },
  };
  return axios
    .patch(`${baseUrl}snippet/${id}`, { snippet }, headers)
    .then((res) => {
      return res;
    })
    .catch((e) => {
      return e.response;
    });
};

export const getSnippet = (id) => {
  const jwt = annotateJWT.getJwt();
  const headers = {
    headers: {
      Authorization: "Bearer " + jwt,
    },
  };
  return axios
    .get(`${baseUrl}snippet/${id}`, headers)
    .then((res) => {
      return res;
    })
    .catch((e) => {
      return e.response;
    });
};

export const createTag = () => {
  const jwt = annotateJWT.getJwt();
  const headers = {
    headers: {
      Authorization: "Bearer " + jwt,
    },
  };
  return axios
    .post(`${baseUrl}tag`, headers)
    .then((res) => {
      return res;
    })
    .catch((e) => {
      return e.response;
    });
};

export const createAnnotation = (tagid, snippetid, annotation) => {
  const jwt = annotateJWT.getJwt();
  const headers = {
    headers: {
      Authorization: "Bearer " + jwt,
    },
  };
  return axios
    .post(`${baseUrl}annotation`, { tagid, snippetid, annotation }, headers)
    .then((res) => {
      return res;
    })
    .catch((e) => {
      return e.response;
    });
};

export const deleteAnnotation = (id) => {
  const jwt = annotateJWT.getJwt();
  const headers = {
    headers: {
      Authorization: "Bearer " + jwt,
    },
  };
  return axios
    .delete(`${baseUrl}annotation/${id}`, headers)
    .then((res) => {
      return res;
    })
    .catch((e) => {
      return e.response;
    });
};

export const getAnnotationBySnippetId = (id) => {
  const jwt = annotateJWT.getJwt();
  const headers = {
    headers: {
      Authorization: "Bearer " + jwt,
    },
  };
  return axios
    .get(`${baseUrl}annotation/getbysnippetid/${id}`, headers)
    .then((res) => {
      return res;
    })
    .catch((e) => {
      return e.response;
    });
};
