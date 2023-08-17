/* eslint-disable prettier/prettier */
import { View, Text, SafeAreaView, ScrollView, FlatList, Button, Pressable } from 'react-native';
import React, { useState } from 'react';
import { categories } from './categories';

const StateSample3 = () => {

  const [categoryList, setcategoryList] = useState(categories);
  const [isSort, setisSort] = useState(false);

  const sortByName = () => {
    if (isSort == false) {
      categoryList.sort((a, b) => a.name.localeCompare(b.name));
      setisSort(true);
    }
    else {
      categoryList.sort((a, b) => b.name.localeCompare(a.name));
      setisSort(false);
    }

    setcategoryList([...categoryList]);
  };
  const deleteCategory = (id) => {
    var filteredCategories = categoryList.filter(q => q.id !== id);
    setcategoryList([...filteredCategories]);
    // console.log(filteredCategories.length);
  };

  const renderItem = ({ item }) => <Pressable onPress={() => deleteCategory(item.id)}><Text style={{ fontSize: 30 }}>{item.name}</Text></Pressable>;
  return (
    <View>
      <Text style={{ fontSize: 30 }}>Length = {categoryList.length}</Text>
      <Button title='Sort by name' onPress={sortByName} />
      <FlatList
        data={categoryList}
        renderItem={renderItem}
      />
    </View>
  );
};

export default StateSample3;
