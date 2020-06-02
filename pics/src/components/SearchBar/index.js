import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import * as S from './styled';

function SearchBar (props) {
    const history = useHistory();
    const [ pic, setPic] = useState('');
    const [ erro, setErro ] = useState(false);
    const config = {
        baseURL: 'https://api.unsplash.com',
        headers: {
            Authorization: 'Client-ID b4VJEjK74AJCdH_pdJaHYEIFoVMfQujzvkJdxojOEmc'
        }
    };

    function picSearch() {
        axios.get('/search/photos?query='+`${pic}`, config)
            .then (response => {
                const repositories = response.data.results;
                const repositoriesName = [];

                repositories.map((pics) => {
                    repositoriesName.push(pics.name);
                });

                localStorage.setItem('repositoriesName', repositoriesName);
                history.push('/repositories');
            })
            .catch(err => {
                setErro(true);
            });
        }        


    return (
        <S.HomeContainer>
            <S.Content>
                <S.Input type="text" placeholder="What pic do you want?" value={pic} onChange={e => setPic(e.target.value)}/>
        
                <S.Button type="button" onClick={picSearch}>Pesquisar</S.Button>
            </S.Content>
        </S.HomeContainer>
    );
}

export default SearchBar;