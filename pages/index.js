import StyledLink from "../components/StyledLink";

export default function Home() {
  return (
    <>
      <h1>Home content here</h1>
      <StyledLink href="/team" passHref legacyBehavior>
        <a>This is our team</a>
      </StyledLink>
    </>
  );
}
