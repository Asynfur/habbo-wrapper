async function getHabbo(name) {
 const { get } = require("superagent")
  
  name = name.charAt(0).toUpperCase() + name.slice(1);
  const url = await get("https://habbo.es/api/public/users?name="+name)
  const habbo = url.body
  
  var datos = {
    nombre: habbo.name,
    apodo: habbo.motto,
    date: habbo.memberSince
    
  }
  return datos;
  
}

module.exports = getHabbo;
