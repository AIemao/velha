import React from "react";



class Posicao extends React.Component {



    constructor(props) {

        super(props);

        this.state = {

            valor: ''

        }

    }

    jogar(valor) {

        if (this.state.valor !== '')

            throw new Error('Valor inválido');



        this.setState((state) => ({ valor }))

    }



    render() {

        return (

            <div className="Posicao" onClick={(e) => this.props.onClick(e, this)}>{this.state.valor}</div>

        )

    }

}



export default Posicao;