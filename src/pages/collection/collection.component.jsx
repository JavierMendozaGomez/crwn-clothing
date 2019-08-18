import React from 'react';
import CollectionItem from '../../components/collection-item/collection-item.component';

import './collection.styles.scss';

const CollectionPage = ({match}) => {
    console.log(match)
    return (
        <div className='category'>
            <h2>Collection Page</h2>
            <h2>{match.params.collectionId}</h2>
        </div>
    );
}

export default CollectionPage;