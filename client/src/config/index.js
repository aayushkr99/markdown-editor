const config = {
    development: {
      SERVER_URL: "http://localhost:5000",
      SOCKET_URL: "http://localhost:5000",
      API_ENDPOINTS: {
        MARKDOWN: "/api/markdown"
      },
      CONVERSION_METHOD: "socket",   // [ "api", "socket", "local" ]
      DEBOUNCE_TIME: 100
    },
    production: {
      SERVER_URL: process.env.REACT_APP_SERVER_URL || "https://api.markdown-editor.com",
      SOCKET_URL: process.env.REACT_APP_SOCKET_URL || "https://api.markdown-editor.com",
      API_ENDPOINTS: {
        MARKDOWN: "/api/markdown"
      },
      CONVERSION_METHOD: "api",   // [ "api", "socket", "local" ]
      DEBOUNCE_TIME: 200
    }
  };
  
  const ENV = process.env.NODE_ENV || "development";
  
  export default config[ENV];

  //CONVERSION_METHOD : api -> it will call the backend api
  //                  : socket -> it will connect through socket
  //                  : local -> it will parse locally ( no backend is involved )