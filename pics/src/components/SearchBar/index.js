import React from 'react';
import * as S from './styled';

function SearchBar () {
    return (
        <S.HomeContainer>
            <S.Content>
                <S.Input type="text" placeholder="What pic do you want?"/>
        
                <S.Button type="button">Pesquisar</S.Button>
            </S.Content>
        </S.HomeContainer>
    );
}

export default SearchBar;