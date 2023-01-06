import { StyleSheet, Text, View } from "react-native";
import SearchBar from "../components/SearchBar";
import { useState } from "react";
import yelp from "../api/yelp";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);
  const [error, setError] = useState();

  const searchApi = async (searchTerm) => {
    try {
      setError("");
      const response = await yelp.get("/search", {
        params: {
          limit: 20,
          term: searchTerm,
          location: "san jose",
        },
      });
      setResults(response.data.businesses);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(searchTerm)}
      />
      <View style={styles.container}>
        <Text>SearchBar Screen</Text>
        <Text>Found {results.length}</Text>
      </View>
      <Text> {error ? "Sorry Something went wrong" : ""}</Text>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginLeft: 15,
  },
});
// Client ID
// e-22XvY39o6iQMVCrpRQzw
