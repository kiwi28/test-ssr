import Link from "next/link";

export const Header = () => {
  return (
    <div>
      <Link href="/">acasa (getServerSideProps)</Link>
      <br />
      <br />
      <Link href="/page2">page2 (getStaticProps)</Link>
      <br />
      <br />
      <Link href="/page3">page3 (getInitialProps)</Link>
    </div>
  );
};
