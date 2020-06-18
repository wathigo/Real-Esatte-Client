import React from 'react';

const Categories = (props) => {
    const { categories } = props;
    const category_names = categories.map(category => category.name);
    const allCategories = ['All', ...category_names];
    const options = allCategories.map(category => <option key={category}>{category}</option>);
    return (
            <div className="category-filter">
              <select id="category-selector-filter" >
                {options}
              </select>
            </div>
    );
};

export default Categories;