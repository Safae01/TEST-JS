let body = document.getElementsByTagName("body")[0];
body.style.cssText = "margin: 0px; background: lightgray; font-family: Tahoma, Arial;";

let header = document.createElement("header");
header.className = "website-head";
header.style.cssText = "display: flex; padding: 20px; background-color: beige; justify-content: space-between; align-items: center;";
body.appendChild(header);

let div = document.createElement("div");
div.className = "content";
div.style.cssText = "display: flex;  padding: 20px; flex-wrap: wrap; justify-content: center; gap: 20px; min-height: calc(100vh - 142px); box-sizing: border-box;";
body.appendChild(div);

for (let i = 1; i <= 15; i++) {
    let product = document.createElement("div");
    product.className = "product";
    product.style.cssText = "padding: 20px; background-color: lightgreen; border: 1px solid green; width: calc((100% - 40px) / 3); box-sizing: border-box; text-align: center; color: black; border-radius: 6px;";

    let span = document.createElement('span');
    span.style.cssText = "font-size: 40px; color: black; font-weight: normal; display: block; margin-bottom: 10px; margin-top: 10px;";
    span.textContent = i;

    product.appendChild(span);
    product.appendChild(document.createTextNode("product"));

    div.appendChild(product);
}
let footer = document.createElement("footer"); 
footer.className="footer";
footer.style.cssText="background-color: green ;font-size:26px;text-align:center;padding:20px;color:black"
footer.textContent="Copyright 2021"
body.appendChild(footer)