import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer ggIRnpRWHlOz8dFhc14Y1ln1zc9l6665_7_ZIznhBEs_ciVqSBnc-h9XsDJDiaz3z3zz094EzlPEsd1O2gMZUZNK8TzK_v6MwaFOYtuU5m0Jtri29bINFdr_phetY3Yx",
  },
});
