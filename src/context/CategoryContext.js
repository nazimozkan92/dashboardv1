import { createContext, useContext, useState, useEffect } from "react";
import { fetchCategories } from "../api";
import { useQuery } from "react-query";

const CategoryContext = createContext();

export const CategoryProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);

  const values = { categories, setCategories };

  return (
    <CategoryContext.Provider value={values}>
      {children}
    </CategoryContext.Provider>
  );
};

export const useCategoryProvider = () => useContext(CategoryContext);
