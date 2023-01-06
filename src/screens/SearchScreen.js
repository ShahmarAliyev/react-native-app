import { StyleSheet, Text, View } from "react-native";
import SearchBar from "../components/SearchBar";
import { useState } from "react";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, results, error] = useResults();

  const filterResultsByPrice = (price) => {
    return results.filter((results) => {
      return results.price === price;
    });
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
      <ResultsList results={filterResultsByPrice("$")} title="Cost Effective" />
      <ResultsList results={filterResultsByPrice("$$")} title="Bit Pricier" />
      <ResultsList results={filterResultsByPrice("$$$")} title="Big Spender" />
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
