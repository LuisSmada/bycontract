const isBackendHostOnSamePC = false;
let hostVar;

if (isBackendHostOnSamePC) {
  hostVar = import.meta.env.VITE_REACT_APP_API_URL_SAME_PC_SPRING_BACKEND;
} else {
  hostVar = import.meta.env.VITE_REACT_APP_API_URL_DIFFERENT_PC_SPRING_BACKEND;
}

export default {
  apiUrl: hostVar,
};
