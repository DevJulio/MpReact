import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'


import Main from './pages/Main';
import Cardapio from './pages/Cardapio';
//As rotas foram importadas para que sejam acessadas










const Routes = createAppContainer(
    createStackNavigator({
        Main: {
            screen: Main,
            navigationOptions: {
                title: 'Meu Pedido',
             
            }
        },
        Cardapio: {
            screen: Cardapio,
            navigationOptions: {
                title: 'Cardapio'//título da página
            }
        },
    }, {
        defaultNavigationOptions: {//Configurações que serão aplicadas a todas as telas da aplicação
            headerTintColor: '#fff',//Cor do texto do header ffb300 amarelo mps
            headerTitleAlign: "center",

            headerStyle: {//Header de todas as páginas
                backgroundColor: '#C8202C'
            }
        }
    })
);






export default Routes