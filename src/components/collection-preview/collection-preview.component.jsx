import React from 'react';
import './collection-preview.styles.scss';

const CollectionPreview = ({title, items}) => (
    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {items
                .filter((item, idx) => idx < 4)
                .map(item => (
                    <h2 key={item.id}>{item.name}</h2>
                ))}
        </div>
    </div>
);

export default CollectionPreview;
