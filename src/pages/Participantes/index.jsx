import React, { useState } from "react";
import NavBar from "../../components/Navbar/index.jsx";
import Gustavo from './../imag/Gustavo.png'
import Aleksander from './../imag/Aleksander.png'
import Sergio from './../imag/Sergio.png'
import { Bloco, Card, Cards, Icon, Imagen, Text } from "./styled.js";
import Inta from './../imag/instagram.png'
import Youtube from './../imag/youtube.png'
import Twutter from './../imag/twitter.png'

export const Participantes = () => {
  const [mostrarInfoGustavo, setMostrarInfoGustavo] = useState(false);
  const [mostrarInfoAleksander, setMostrarInfoAleksander] = useState(false);
  const [mostrarInfoSergio, setMostrarInfoSergio] = useState(false);
  return (
    <>
      <NavBar />
      <Cards>
        {/* Card Gustavo */}
        <Card>
          <Imagen
            src={Gustavo}
            alt="Gustavo"
            onClick={() => setMostrarInfoGustavo(!mostrarInfoGustavo)}
          />
          {mostrarInfoGustavo && (
            <Bloco>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate facilis deserunt perspiciatis maiores placeat itaque, voluptatibus nostrum doloremque magnam iure accusantium asperiores voluptatem sequi dolore enim nulla! Laborum, necessitatibus rem.
              </Text>
              <ul>
                <li style={{ display: 'flex', alignItems: 'center', width: '300px' }}><Icon src={Inta} alt="" /> <p>rbgbrubrib@norinbo</p></li>
                <li style={{ display: 'flex', alignItems: 'center', width: '300px' }}><Icon src={Youtube} alt="" /> <p>rbgbrubrib@norinbo</p></li>
                <li style={{ display: 'flex', alignItems: 'center', width: '300px' }}><Icon src={Twutter} alt="" /> <p>rbgbrubrib@norinbo</p></li>
              </ul>
            </Bloco>
          )}
        </Card>

        <Card>
          <Imagen
            src={Aleksander}
            alt="Aleksander"
            onClick={() => setMostrarInfoAleksander(!mostrarInfoAleksander)}
          />
          {mostrarInfoAleksander && (
            <Bloco>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate facilis deserunt perspiciatis maiores placeat itaque, voluptatibus nostrum doloremque magnam iure accusantium asperiores voluptatem sequi dolore enim nulla! Laborum, necessitatibus rem.
              </Text>
              <ul>
                <li style={{ display: 'flex', alignItems: 'center', width: '300px' }}><Icon src={Inta} alt="" /> <p>rbgbrubrib@norinbo</p></li>
                <li style={{ display: 'flex', alignItems: 'center', width: '300px' }}><Icon src={Youtube} alt="" /> <p>rbgbrubrib@norinbo</p></li>
                <li style={{ display: 'flex', alignItems: 'center', width: '300px' }}><Icon src={Twutter} alt="" /> <p>rbgbrubrib@norinbo</p></li>
              </ul>
            </Bloco>
          )}
        </Card>
        <Card>
          <Imagen
            src={Sergio}
            alt="Sergio"
            onClick={() => setMostrarInfoSergio(!mostrarInfoSergio)}
          />
          {mostrarInfoSergio && (
            <Bloco>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate facilis deserunt perspiciatis maiores placeat itaque, voluptatibus nostrum doloremque magnam iure accusantium asperiores voluptatem sequi dolore enim nulla! Laborum, necessitatibus rem.
              </Text>
              <ul>
                <li style={{ display: 'flex', alignItems: 'center', width: '300px' }}><Icon src={Inta} alt="" /> <p>rbgbrubrib@norinbo</p></li>
                <li style={{ display: 'flex', alignItems: 'center', width: '300px' }}><Icon src={Youtube} alt="" /> <p>rbgbrubrib@norinbo</p></li>
                <li style={{ display: 'flex', alignItems: 'center', width: '300px' }}><Icon src={Twutter} alt="" /> <p>rbgbrubrib@norinbo</p></li>
              </ul>
            </Bloco>
          )}
        </Card>
      </Cards>

    </>
  )

}