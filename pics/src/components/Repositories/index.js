import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import * as S from './styled';

export default function Repositories () {

    const history = useHistory();
    const [ repositories, setRepositories ] = useState([]);

    useEffect(() => {
        let repositoriesName = localStorage.getItem('repositoriesName');
        
        if (repositoriesName !== null) {
            repositoriesName = JSON.parse(repositoriesName);

            setRepositories(repositoriesName);
            localStorage.clear();
        } else {
            history.push('/');
        }
    }, []);

    return (
        <S.Container>
            <S.Title>Fotos:</S.Title>
                <S.List>
                    {repositories.map( pics => {
                        return (
                            <S.ListItem> 
                                <img 
                                    src={pics.urls}
                                />
                            </S.ListItem>
                        );
                    })}
                </S.List>
            {/* <S.LinkSearchBar to="/">Voltar</S.LinkSearchBar>            */}
            <button> Voltar </button>
        </S.Container>
    );
}