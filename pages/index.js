/* eslint-disable @next/next/link-passhref */
import tw from "tailwind-styled-components";
import Map from "./components/Map";
import Link from "next/link";

export default function Home() {
  return (
    <Wrapper>
      <Map />
      <ActionItems>
        <Header>
          <UberLogo src="https://i.ibb.co/84stgjq/uber-technologies-new-20218114.jpg" />
          <Profile>
            <Name>Fahim Chowdhury</Name>
            <UserImage src="https://scontent.fdac59-1.fna.fbcdn.net/v/t1.6435-9/124108561_4103189579697421_3170743220278090600_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=AYqx_Bh-NBQAX_uQz0-&_nc_oc=AQlPfA3pge9Odaj_lKIyt9zvOHvG8biLqLj65btyLx6_gPUayOyl7luKPKHZeO2thTs&_nc_ht=scontent.fdac59-1.fna&oh=a6fff522cc118ce342661b1500173268&oe=61BE73DC" />
          </Profile>
        </Header>
        <ActionButtons>
          <Link href="/search">
            <ActionButton>
              <ActionButtonImage src="https://i.ibb.co/cyvcpfF/uberx.png" />
              Ride
            </ActionButton>
          </Link>
          <Link href="/search">
            <ActionButton>
              <ActionButtonImage src="https://i.ibb.co/n776JLm/bike.png" />
              Wheels
            </ActionButton>
          </Link>
          <Link href="/search">
            <ActionButton>
              <ActionButtonImage src="https://i.ibb.co/5RjchBg/uberschedule.png" />
              Reserve
            </ActionButton>
          </Link>
        </ActionButtons>
        <InputButton>Where to?</InputButton>
      </ActionItems>
    </Wrapper>
  );
}

const Wrapper = tw.div`
  flex flex-col h-screen
`;

const ActionItems = tw.div`
  flex-1 p-4
`;

const Header = tw.div`
  flex justify-between items-center
`;
const UberLogo = tw.img`
  h-28
`;

const Profile = tw.div`
  flex items-center
`;
const Name = tw.div`
  mr-4 w-20 text-sm
`;
const UserImage = tw.img`
  h-12 w-12 rounded-full border border-gray-200 p-px 
`;

const ActionButtons = tw.div`
  flex
`;
const ActionButton = tw.div`
  flex flex-col items-center justify-center bg-gray-200 flex-1 m-1 h-32 rounded-lg transform hover:scale-105 transition text-xl cursor-pointer
`;
const ActionButtonImage = tw.img`
  h-3/5
`;

const InputButton = tw.div`
  h-20 bg-gray-200 p-4 text-2xl flex items-center mt-8
`;
