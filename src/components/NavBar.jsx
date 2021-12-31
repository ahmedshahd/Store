import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Search, ShoppingCartOutlined } from '@material-ui/icons'
import { Badge } from '@material-ui/core'
import { mobile } from '../responsive'

const Container = styled.div`
    height: 60px;
    ${mobile({ height: '50px' })}
`
const Wraper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${mobile({ padding: '10px 0px' })}
`
const Left = styled.div`
    display: flex;
    align-items: center;
    flex: 1;
    font-size: 14px;
    cursor: pointer;
`
const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({ flex: 2, justifyContent: 'center' })}
`

const Center = styled.div`
    flex: 1;
    text-align: center;
`
const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding; 5px
`
const Input = styled.input`
    border: none;
    outline: none;
    ${mobile({ width: '50px' })}
`
const Logo = styled.h2`
    font-weight: bold;
    ${mobile({ fontSize: '24px' })}
`
const MenuItems = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({ fontSize: '12px', marginLeft: '10px' })}
`
const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({ display: 'none' })}
`
const NavBar = () => {
    return (
        <Container>
            <Wraper>
                <Left>
                    <Language>En</Language>
                    <SearchContainer>
                        <Input />
                        <Search style={{ color: 'gray', fontSize: 16 }} />
                    </SearchContainer>
                </Left>
                <Center>
                    <Link to="/">
                        <Logo>LAMA.</Logo>
                    </Link>
                </Center>
                <Right>
                    <MenuItems>
                        <Link to="/register">Register</Link>
                    </MenuItems>
                    <MenuItems>
                        <Link to="/login">Sign In</Link>
                    </MenuItems>
                    <MenuItems>
                        <Badge badgeContent={4} color="primary">
                            <Link to="/cart">
                                <ShoppingCartOutlined color="action" />
                            </Link>
                        </Badge>
                    </MenuItems>
                </Right>
            </Wraper>
        </Container>
    )
}

export default NavBar
