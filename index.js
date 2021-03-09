 const { get } = require("superagent")

async function getHabbo(name) {

  
  const url = await get("https://habbo.es/api/public/users?name="+name)
  const habbo = url.body
  
  return habbo
  
}

module.exports = getHabbo;
