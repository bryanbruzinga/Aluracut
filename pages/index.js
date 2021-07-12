import MainGrid from "../src/components/MainGrid";
import Box from "../src/components/Box";
import {
  AlurakutMenu,
  OrkutNostalgicIconSet,
} from "../src/lib/AluracutCommons";
import { ProfileRelationsBoxWrapper } from "../src/components/ProfileRelations";

function ProfileSidebar({ githubUser }) {
  return (
    <Box>
      <img
        src={`https://github.com/${githubUser}.png`}
        alt=""
        style={{ borderRadius: "8px" }}
      />
    </Box>
  );
}

export default function Home() {
  const githubUser = "bryanbruzinga";
  const pessoasFavoritas = ["bryanbruzinga", "bryanbruzinga", "bryanbruzinga"];

  return (
    <>
      <AlurakutMenu />
      <MainGrid>
        <div className="profileArea" style={{ gridArea: "profileArea" }}>
          <ProfileSidebar githubUser={githubUser} />
        </div>
        <div className="welcomeArea" style={{ gridArea: "welcomeArea" }}>
          <Box>
            <h1 className="title">Bem vindo(a)</h1>

            <OrkutNostalgicIconSet />
          </Box>
        </div>
        <div
          className="profileRelationsArea"
          style={{ gridArea: "profileRelationsArea" }}
        >
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Pessoas da comunidade ({pessoasFavoritas.length})
            </h2>
            <ul>
              {pessoasFavoritas.map((item, index) => {
                return (
                  <li>
                    <a href={`/users/${githubUser}`} key={index}>
                      <img src={`https://github.com/${githubUser}.png`} />
                      <span>{githubUser}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
          <Box>Comunidades</Box>
        </div>
      </MainGrid>
    </>
  );
}
