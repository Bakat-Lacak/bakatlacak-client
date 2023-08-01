import { TypeAnimation } from 'react-type-animation';

export default function TypeAnimate() {
    return (
        <>
            <TypeAnimation
                sequence={[
                    // Same substring at the start will only be typed once, initially
                    'Backend Developer',
                    1000,
                    'Frontend Developer',
                    1000,
                    'Digital Marketing',
                    1000,
                    'Data Analyst',
                    1000,
                    'Data Science',
                    1000,
                    'Product Manager',
                    1000,
                    'UI / UX Designer',
                    1000,
                    'Social Media Expert',
                    1000,
                ]}
                speed={15}
                style={{ fontSize: 60 }}
                repeat={Infinity}
            />
        </>
    )
}