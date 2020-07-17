import React from 'react';

export default class extends React.Component {
  render() {
    let {brand_name, product_name, description, image_url, website} = this.props
    return (
       <article>
        <h2>{name}</h2>
        <img src={ gif } alt={ name } />
       </article>
    );
  }
}