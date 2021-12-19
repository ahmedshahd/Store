import styled from 'styled-components'
import { Search, ShoppingCartOutlined } from '@material-ui/icons'
import { Badge } from '@material-ui/core'
const Container = styled.div`
    height: 60px;
    background-color: white;
`
const Wraper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
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
`
const Logo = styled.h2`
    font-weight: bold;
`
const MenuItems = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
`
const Language = styled.span``
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
                    <Logo>LAMA.</Logo>
                </Center>
                <Right>
                    <MenuItems>Register</MenuItems>
                    <MenuItems>Sign In</MenuItems>
                    <MenuItems>
                        <Badge badgeContent={4} color="primary">
                            <ShoppingCartOutlined color="action" />
                        </Badge>
                    </MenuItems>
                </Right>
            </Wraper>
        </Container>
    )
}

export default NavBar
