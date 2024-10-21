import { Body, Container, Html, Link, Preview, Text, Tailwind } from '@react-email/components';

interface EmailInfo  {
    name: string,
}

const WelcomeTemplate = ({name}: EmailInfo ) => {
    return (
        <Html>
            <Preview>Welcome Aborad!</Preview>
           <Tailwind>
            <Body className='bg-black border'>
                    <Container>
                        <Text className='text-2xl text-white' >Hello {name}</Text>
                        <Link href='https://google.com'>www.google.com</Link>
                    </Container>
                </Body>
           </Tailwind>
        </Html>
    );
};

// const body : CSSProperties = {
//     backgroundColor: '#f5f5f5',

// }
// const heading: CSSProperties = {
//     fontSize: '32px',
//     fontWeight: 'bold',
//     marginBottom: '10px',
// }

export default WelcomeTemplate;