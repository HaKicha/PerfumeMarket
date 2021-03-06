import React, {Component} from "react";
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import {ApolloProvider} from 'react-apollo';
import ApolloClient from 'apollo-client';
import {createHttpLink} from "apollo-link-http";
import {InMemoryCache} from "apollo-cache-inmemory";
import MainPage from "./MainPage/MainPage";
import Cart from "./Cart/Cart";
import Catalog from "./Catalog/ContentDir/Catalog";
import Checkout from "./Checkout/Checkout";
import Product from "./Product/Product";
import Profile from "./Profile/Profile";
import {UrlStore} from "../stores/UrlStore";
import {Provider} from 'mobx-react';
import Register from './Auth/Register';
import AboutUs from './About/AboutUs';
import Cabinet from "./Cabinet/Cabinet";
import {UserStore} from '../stores/userStore';


const httpLink = createHttpLink({
    uri: UrlStore.MAIN_GRAPHQL_URI
});

// const authLink = setContext((_, {headers}) => {
//     return {
//         headers: {
//             ...headers,
//             authorization: urlStore.TOKEN ? `Bearer ${urlStore.TOKEN}` : "",
//         }
//     }
// });

const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
});

const store = {
    userStore: new UserStore(),
    urlStore: UrlStore
};

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <ApolloProvider client={client}>
                    <BrowserRouter>
                        <Switch>
                            <Route exact path={'/'} component={MainPage}/>
                            <Route path={'/cart'} component={Cart}/>
                            <Route path={'/catalog/:id'} component={Catalog}/>
                            <Route path={'/checkout'} component={Checkout}/>
                            <Route path={'/product/:id'} component={Product}/>
                            <Route path={'/profile'} component={Profile}/>
                            <Route path={'/signIn'} component={Profile}/>
                            <Route path={'/signUp'} component={Register}/>
                            <Route path={'/aboutUs'} component={AboutUs}/>
                            <Route path={'/cabinet'} component={Cabinet}/>

                        </Switch>
                    </BrowserRouter>
                </ApolloProvider>
            </Provider>
        );
    }
}

export default App;