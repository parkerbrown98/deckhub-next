import { useNextSanityImage } from 'next-sanity-image';
import Image from 'next/image';
import client from '../sanity-client';

const SanityImage = ({ image, alt }) => {
    const imageProps = useNextSanityImage(client, image);

    if (!imageProps) return null;

    return (
        <Image {...(typeof imageProps === 'object' ? imageProps : {src: ''})} alt={alt} loading="lazy" layout="responsive" />
    )
}

export default SanityImage;