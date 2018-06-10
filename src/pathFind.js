function pathFind(path, obj) {

          path
            .filter(pathLayer => pathLayer.obj === obj)
            .map(pathLayer =>
                obj[pathLayer.id] = pathFind(path, pathLayer.id))
          return obj["foo"]



}


module.exports = { pathFind }

// pathFind(["foo"], { foo: "bar" }) // === "bar"
// pathFind(["name"], { name: "Dave" }) // === "Dave"
// pathFind(["author", "name"], { author: { name: "Stephen" } }) // === "Stephen"
// pathFind(["book", "author", "name"], {
//   book: {
//     author: {
//       name: "Yuval"
//     }
//   }
// }) // === "Yuval"
