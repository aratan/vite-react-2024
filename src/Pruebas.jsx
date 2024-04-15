import { Button, Flex } from 'antd';

//const mensaje = 'Arbiol';
//const mensaje = [0,1,2,3,4,5,6,7,8,9];
const mensaje = {
    msg: 'Hola Mundo',
    title: 'Victor'
};
// las props pasan info del componente padre al hijo 
const leer = function( props){
    console.log(props)
    return 5+5 ;   
}

// https://ant.design/components/button
export function Header( props ) {
    
    return ( <> 
    <p>{ leer() }</p>
    <h1>{ mensaje.title} </h1> 
    <h1>{ props.title} </h1> 
    <code>{ JSON.stringify( mensaje) }</code>
    <p>Parrafo sub { 1 + 1 } </p> 

    <Flex gap="small" wrap="wrap">
        <Button type="primary">Primary Button</Button>
    </Flex>

    </> 
    );

}