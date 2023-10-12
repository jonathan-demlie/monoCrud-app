"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const client_1 = require("react-dom/client");
const App_tsx_1 = require("./App.tsx");
require("./index.css");
const react_query_1 = require("react-query");
const queryClient = new react_query_1.QueryClient();
client_1.default.createRoot(document.getElementById('root')).render(<react_query_1.QueryClientProvider client={queryClient}>
    <App_tsx_1.default />
  </react_query_1.QueryClientProvider>);
//# sourceMappingURL=main.js.map