function pathFind(path, object) {




      const obj = {}
          path
            .filter(p => p.object === object)
            .forEach(p =>
                obj[p.id] = pathFind(path, p.id))
        return obj
        return path
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
