//Types
import { ReactElement } from 'react';

//Constants
import { INFO_BLOCKS_INFO, FOOTER_ICONS } from 'constants/data';

// Next JS
import { useRouter } from 'next/router';

//Components
import InfoBlock from 'components/MainLayout/Footer/InfoBlock/InfoBlock.component';

export default function Footer(): ReactElement {
  const router = useRouter();

  const onIconClickHandler = (path: string) => () => {
    router.push(path);
  };

  return (
    <footer className="flex justify-center items-center w-full h-full bg-dark-background py-12 lg:py-20">
      {/* LITM - Overwriting default elements-grid (global class) behaviour. */}
      <section className="elements-grid grid-cols-1 lg:grid-cols-4 gap-y-10 max-w-[1180px] pt-0">
        <article className="flex flex-col items-center lg:items-stretch gap-4 lg:gap-6">
          <header className="footer-title">Get in touch</header>
          <p className="font-montserrat text-white text-center lg:text-left text-sm tracking-wider">
            the quick fox jumps over the <br /> lazy dog
          </p>
          <section className="flex flex-row gap-5">
            {FOOTER_ICONS.map(({ Icon, path }) => (
              <Icon
                key={Icon.name}
                size={24}
                onClick={onIconClickHandler(path)}
                className="text-light-background cursor-pointer select-none active:opacity-80"
              />
            ))}
          </section>
        </article>
        {INFO_BLOCKS_INFO.map((props) => (
          <InfoBlock key={props.title} {...props} />
        ))}
      </section>
    </footer>
  );
}
