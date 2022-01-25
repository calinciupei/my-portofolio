import { createBrowserHistory } from "history";

const history = global.window ? createBrowserHistory() : null;

export default history;
