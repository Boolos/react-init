import * as React from "react";
import * as ReactDOM from "react-dom";

ReactDOM.render(
    <h1>Hello!</h1>,
    document.getElementById("root"),
);

const foo = async () => {
    return "Deferred~";
};

const bar = async () => {
    // tslint:disable-next-line:no-console
    console.log(await foo());
};

bar();
