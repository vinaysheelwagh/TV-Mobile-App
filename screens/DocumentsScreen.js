import React, { useState } from "react";
import { FlatList, SafeAreaView, View } from "react-native";
import { FocussedStatusBar } from "../components";
import CaseHeader from "../components/CaseHeader";
import DocumentCard from "../components/DocumentCard";
import { COLORS, DocumentsData } from "../constants";

const DocumentsScreen = ({ navigation }) => {
  const [documentsData, setDocumentsData] = useState(DocumentsData);

  const handleSearch = (value) => {
    if (!value.length) return setDocumentsData(DocumentsData);
    const filteredData = DocumentsData.filter((item) => item.name.toLowerCase().includes(value.toLowerCase()));
    if (filteredData.length) setDocumentsData(filteredData);
    else setDocumentsData(DocumentsData);
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocussedStatusBar backgroundColor={COLORS.primary} />
      <View style={{ flex: 1 }}>
        <View style={{ zIndex: 0 }}>
          <FlatList
            data={documentsData}
            renderItem={({ item }) => <DocumentCard data={item} />}
            keyExtractor={({ id }) => id}
            showsHorizontalScrollIndicator={false}
            ListHeaderComponent={<CaseHeader onSearch={handleSearch} navigation={navigation} />}
          />
        </View>
        <View style={{ position: "absolute", top: 0, left: 0, bottom: 0, right: 0, zIndex: -1 }}>
          <View style={{ height: 300, backgroundColor: COLORS.primary }} />
          <View style={{ flex: 1, backgroundColor: COLORS.white }} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default DocumentsScreen;
