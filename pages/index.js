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
            <UserImage src="https://lh3.googleusercontent.com/ogw/ADea4I7SKgAVLP6zGXMmN17uLlZY5Z_XorSJ0d0chnO4ig=s83-c-mo" />
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
