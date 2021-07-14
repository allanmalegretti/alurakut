import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
import { AlurakutMenu } from '../src/lib/AlurakutCommons'

function ProfileSiderbar (propriedades) {
  //console.log(propriedades);
  return (
    <Box>
        <img src={`https://github.com/${propriedades.githubUser}.png`} style={{ borderRadius: '8px' }} />
      </Box>
  )
}

export default function Home() {
  const usuarioAleatorio = `allanmalegretti`;


  return (
    <>
     <AlurakutMenu></AlurakutMenu>
      <MainGrid>

    <div className="profileArea" style={{gridArea: `profileArea`}}>
      <ProfileSiderbar githubUser={usuarioAleatorio} />
    </div>

    <div className="welcomeArea" style={{gridArea: `welcomeArea`}}>
    <Box>
        Bem Vindo
      </Box>
    </div>
    
    <div className="profileRelationsArea" style={{gridArea: `profileRelationsArea`}}>
      <Box>
        Pessoas da Comunidade
      </Box>
      <Box>
        Comunidades
      </Box>
    </div>
    
    </MainGrid>


    </>
  //<Title>Pagina do Allan</Title>
  )
}
