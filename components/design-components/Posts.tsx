
import Section from './Section';
import { Loader2 } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel';
import Link from 'next/link';
import Heading from './Heading';
import SplitText from '../ui/split-text';

export const extractUrl = (text: string) => {
    const urlRegex = /(https?:\/\/[^\s]+)/;
    const match = text.match(urlRegex);
    return match ? match[0] : null;
};

type PostType = {
    title: string;
    description: string;
    image: string;
    url: string;
}[]

const Posts = ({ data2 }: { data2: PostType }) => {
    // const [currentIndex, setCurrentIndex] = useState(0);

    // const handleNext = () => {
    //     setCurrentIndex((prev) => (prev + 1) % ll.length);
    // };

    // const handlePrev = () => {
    //     setCurrentIndex((prev) => (prev - 1 + ll.length) % ll.length);
    // };


    return (
        <Section
            crosses
            crossesOffset="lg:translate-y-[5.25rem]"
            id="posts"
        >
            <div className="container flex flex-col justify-center items-center max-sm:pb-12 pt-12 space-y-10 text-center">
                <Heading
                    title="My Social Media Posts"
                    text=" Get started to Know my Knowledged and my work with social media updates."
                />
                <h1 className="sr-only">My Social Media Posts</h1>

                <Carousel className="w-full max-w-6xl ">
                    <CarouselContent className="flex items-center">
                        {false ? (
                            <Loader2 className="animate-spin" />
                        ) : (
                            data2 &&
                            data2.map((post, index) => (
                                <CarouselItem
                                    key={index}
                                    className="sm:!basis-auto flex-shrink-0 w-[350px] sm:w-[600px] transition-transform duration-300 ease-in-out flex flex-col justify-center items-center"
                                >
                                    <div
                                        className={`relative mx-auto  transition-all duration-300 ease-in-out rounded-lg overflow-hidden`}
                                    >
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            title={post.description}
                                            className="border object-cover w-full h-[300px]"
                                        />
                                    </div>
                                    <p
                                        title={post.title}
                                        className="text-lg line-clamp-2 max-w-96 font-medium mt-4 mx-auto"
                                    >
                                        {post.title}
                                    </p>
                                    <p
                                        title={post.description}
                                        className="text-sm text-primary/70 line-clamp-2 cursor-pointer max-w-100 font-medium mb-4 mx-auto"
                                    >
                                        {post.description}
                                    </p>
                                    {post.url &&
                                        <div className=' bg-[conic-gradient(from_225deg,#FFC876,#79FFF7,#9F53FF,#FF98E2,#FFC876)] p-[0.1rem] rounded-md'>
                                            <Link target="_blank" className=' bg-primary-foreground px-2 py-1 flex rounded-md items-center gap-2' href={post.url} title={post.title + " Live Demo"} >
                                                Watch on {post.url.slice(8, 24)}
                                            </Link>
                                        </div>
                                    }
                                </CarouselItem>
                            ))
                        )}

                    </CarouselContent>
                    {/* <div className='cursor-pointer' onClick={handlePrev}> */}
                    <CarouselPrevious />
                    {/* </div> */}
                    {/* <div className='cursor-pointer' onClick={handleNext}> */}
                    <CarouselNext />
                    {/* </div> */}
                </Carousel>
                <div className="flex justify-center">
                    <Link
                        className="text-lg font-code font-bold tracking-wider uppercase border-white border-b-2"
                        href="https://www.linkedin.com/in/anas-ahmed-37258b319"
                    >
                        <SplitText
                            text="See all posts"
                        />
                    </Link>
                </div>

            </div>
        </Section>
    )
}

export default Posts

