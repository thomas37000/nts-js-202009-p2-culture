import React from 'react';
import PropTypes from 'prop-types';

const Category = ({ category }) => {
  return (
    <>
      <div id="category">
        <h1>{category.records.fields.nom}</h1>
        <p>
          <strong>{category.records.fields.description}</strong>
        </p>
        <img
          src={category.records.fields.media_2}
          alt={category.records.fields.description}
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
