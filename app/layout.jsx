import '@/assets/styles/globals.css';

export const metadata = {
  title: 'Wayland Country Club',
  description:
    'Located just 15 miles west of Boston in the scenic suburban town of Wayland, MA. The course is operated on a daily greens fee basis and is open to the public.',
  keywords:
    'golf, public golf course, golf course, golf outings, golf tournaments, golf lessons',
};

const MainLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default MainLayout;
