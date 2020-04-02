function insertIntoList () {
  const text = document.getElementById("input").value

  if (text === undefined || text === "")
    alert("Please provide the valid input")
  else {
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(text));
    document.getElementById("list").appendChild(li);

    const length = document.getElementById("list").getElementsByTagName("li").length
    const color = length % 3 === 0 ? "red" : "black"
    li.setAttribute("style", "color: " + color);

    document.getElementById("input").value = ""
  }
}
