import classNames from 'classnames';
import {FC, memo, useEffect, useMemo,useState} from 'react';

import {isApple, isMobile} from '../../config';
import {SectionId,videoData} from '../../data/data';
import Section from '../Layout/Section';

const Hero: FC = memo(() => {
  const {imageSrc, description} = videoData;
  const [parallaxEnabled, setParallaxEnabled] = useState(false);

  const resolveSrc = useMemo(() => {
    if (!imageSrc) return undefined;
    return typeof imageSrc === 'string' ? imageSrc : imageSrc.src;
  }, [imageSrc]);

  // Mobile iOS doesn't allow background-fixed elements
  useEffect(() => {
    setParallaxEnabled(!(isMobile && isApple));
  }, []);

  return (
    <Section noPadding sectionId={SectionId.Video}>
      <div className=
        {classNames('flex w-full items-center justify-center bg-cover bg-center px-4 py-8 md:py-12 lg:px-8', 
        parallaxEnabled && 'bg-fixed',
        {'bg-neutral-700': !imageSrc},
        )}
        style={imageSrc ? {backgroundImage: `url(${resolveSrc}`} : undefined}>
            <div style={{color: 'white', fontSize: '50', fontWeight: 'bold'}}>{description}</div>
      </div>
      <div className=
        {classNames('flex w-full items-center justify-center bg-cover bg-center px-4 lg:px-8', 
        parallaxEnabled && 'bg-fixed',
        {'bg-neutral-700': !imageSrc},
        )}
        style={imageSrc ? {backgroundImage: `url(${resolveSrc}`} : undefined}>
            <iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen frameBorder="0" height="315" src="https://www.youtube.com/embed/5NorFemc490?si=vAEAzF7tyKXBeClw"  title="YouTube video player" width="560" />
      </div>
    </Section>
  );
});

Hero.displayName = 'Hero';
export default Hero;

