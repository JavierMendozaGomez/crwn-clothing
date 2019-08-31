import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {auth} from '../../firebase/firebase.utils';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import {createStructuredSelector} from 'reselect';
import {selectUserCurrentUser} from '../../redux/user/user.selectors';
import {selectCartHidden} from '../../redux/cart/car.selectors';
import './header.styles.scss';

import {
	HeaderContainer,
	LogoContainer,
	OptionsContainer,
	OptionDiv,
	OptionLink	
} from './header.styles';


const Header = ({currentUser, hidden}) => (
    <HeaderContainer>
        <LogoContainer to='/'>
            <Logo className='logo'/>
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to='/shop'>
                SHOP
            </OptionLink>
            <OptionLink  to='/shop'>
                CONTACT
            </OptionLink>
            {
                currentUser ? (
                <OptionDiv onClick={() => auth.signOut()}>
                    SIGN OUT
                </OptionDiv>
                ) : (
                <OptionLink  to ='/signin'>
                    SIGN IN
                </OptionLink>
                )}
            <CartIcon />
        </OptionsContainer>
        {
            hidden ? null: <CartDropdown />
        }
    </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
    currentUser: selectUserCurrentUser,
    hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
