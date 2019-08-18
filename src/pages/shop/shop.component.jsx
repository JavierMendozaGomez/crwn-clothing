import React from'react';
import CollectionPreview from '../../components/collection-preview/collection-preview.component'
import {selectCollections} from '../../redux/shop/shop.selectors';
import {createStructuredSelector} from 'reselect';
import {connect} from 'react-redux';

const ShopPage = ({collections}) => (
    <div className='shop-page'>
        {
            collections.map(({ id, ...otherProps }) => (
                <CollectionPreview key={id} {...otherProps} />
            ))
        }
    </div>
);

const mapStateToProps = createStructuredSelector({
    collections: selectCollections
});

export default connect(mapStateToProps)(ShopPage);
