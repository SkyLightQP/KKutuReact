import React from 'react';
import styled from 'styled-components';
import BoxTitle from '../BoxTitle';
import BoxContent from '../BoxContent';

const List = styled.div`
    color: #111111;
    box-shadow: 0px 2px 1px #DDDDDD;
    background-color: #EEEEEE;
    float: left;
    padding: 5px;
    width: 200px;
    height: 360px;
    
    div {
        float: left;
    }
`;

const UserIcon = styled.div`
    background-image: url('');
    margin: 1px;
    width: 18px;
    height: 18px;
    border-radius: 5px;
    background-size: 100%;
`;

const UserName = styled.div`
    padding: 2px 0px 0px 3px;
    
    &:hover {
        cursor: pointer;
        background-color: #F4F4F4;
    }
`;

export const UserList: React.FC = () => {
    return (
        <>
            <List>
                <BoxTitle>
                    테스트
                </BoxTitle>
                <BoxContent>
                    <UserIcon/>
                    <UserIcon/>
                    <UserName>유저네임</UserName>
                </BoxContent>
            </List>
        </>
    );
};

export default UserList;