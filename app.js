const tag = name => (content= "") => {
  let div = document.createElement(name)
  div.textContent = content
  return div
}
fetch('./db_products.json')
   .then(response => response.json())
   .then(data => {
     let fragment = new DocumentFragment();
     data.productos.forEach(producto => {
       let section = tag("section")()
       let img = tag('img')()
       img.setAttribute("src",producto.imagen)
       let nombre = tag("h1")(producto.nombre)
       let p = tag("p")(producto.precio)

       section.append(img,nombre,p)
       fragment.append(section)

     })
     document.querySelector("main").append(fragment)
   })
