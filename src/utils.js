const shakespearApi = "https://api.graph.cool/simple/v1/shakespear";

let options = () => {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON:stringify({
      // we will write this later
        query: `{
          allPoems(
            first: 1
            skip: ${random(0,160)}
          ) {
            title
            author
            lines
            text
          }
        }`
      
    })
}

function randomInt(min, max) {
  min=Math.ceil(min);
  max=Math.floor(max);
  return Math.floor(Math.random() * (max-min+1)) + min;

}
