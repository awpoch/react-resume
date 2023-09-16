import {FC, memo, useEffect, useState, useMemo} from 'react';
import classNames from 'classnames';

import {isApple, isMobile} from '../../config';
import {videoData, SectionId} from '../../data/data';
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
        {classNames('flex w-full items-center justify-center bg-cover bg-center px-4 py-16 md:py-24 lg:px-8', 
        parallaxEnabled && 'bg-fixed',
        {'bg-neutral-700': !imageSrc},
        )}
        style={imageSrc ? {backgroundImage: `url(${resolveSrc}`} : undefined}>
            {description}
      </div>
      <div className=
        {classNames('flex w-full items-center justify-center bg-cover bg-center px-4 py-16 md:py-24 lg:px-8', 
        parallaxEnabled && 'bg-fixed',
        {'bg-neutral-700': !imageSrc},
        )}
        style={imageSrc ? {backgroundImage: `url(${resolveSrc}`} : undefined}>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/5NorFemc490?si=vAEAzF7tyKXBeClw" title="YouTube video player" frameBorder="0"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
      </div>
    </Section>
  );
});

Hero.displayName = 'Hero';
export default Hero;

