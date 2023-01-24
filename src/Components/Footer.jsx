import { ChevronUpIcon } from "@chakra-ui/icons";
import { Button, Container, Flex, Text } from "@chakra-ui/react";
import { Link } from "react-scroll";

export default function Footer() {
    return (
        <>
        <Container maxW={'full'} p={4} borderTop='1px solid gray' textAlign='center'>
            <Link
				to='Home'
				spy={true}
				smooth={true}
				offset={-100}
				duration={500}
			    >
                    <Text textAlign='center' fontWeight={'bold'} color='blue.500' mb={2}>We have reached the bottom</Text>
			        <Button cursor='pointer' fontWeight={'bold'} colorScheme='teal' borderRadius={'full'} variant={'solid'} textAlign='center'>
						Back To Top <ChevronUpIcon ml={2} />
					</Button>
			</Link>
		</Container>
        </>
    )
};
