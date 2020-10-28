import React from 'react';
import PropTypes from 'prop-types';

const Category = ({ category }) => {
  return (
    <>
      <div id="category">
        <h1>{category.records[2].fields.nom}</h1>
        <p>
          <strong>{category.records[2].fields.description}</strong>
        </p>
        <img
          src={category.records[2].fields.media_1}
          alt={category.records[2].fields.description}
        />
      </div>
    </>
  );
};

Category.propTypes = {
  category: PropTypes.shape({
    records: PropTypes.string,
    fields: PropTypes.string,
  }).isRequired,
  nom: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default Category;
