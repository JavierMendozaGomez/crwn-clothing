import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import {connect} from 'react-redux';
import {selectSections} from '../../redux/directory/directory.selectors'
import {createStructuredSelector} from 'reselect';

import './directory.styles.scss';

const Directory = ({sections}) => {
    return (
        <div className='directory-menu'>
            {
                sections.map(({ id, ...otherSectionProps }) => (
                    <MenuItem key={id} {...otherSectionProps} />
                ))
            }
        </div>
    );
}



const mapPropstoState = createStructuredSelector({
    sections: selectSections
});

export default connect(mapPropstoState)(Directory);
