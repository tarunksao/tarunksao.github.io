// import { ReactNode } from 'react';
import {
	Box,
	Flex,
	Avatar,
	HStack,
	IconButton,
	Button,
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	MenuDivider,
	useDisclosure,
	useColorModeValue,
	Stack,
	useColorMode,
	Text,
	Link as RefLink,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Link, animateScroll as scroll } from 'react-scroll';

const links = ['About', 'Skills', 'Experience', 'Projects', 'GitHub Stats', 'Contact'];

export default function Nav() {
	const { colorMode, toggleColorMode } = useColorMode();
	const { isOpen, onOpen, onClose } = useDisclosure();
	
	const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch('Tarun_Sao_Resume-fw20_1259.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'Tarun_Sao_Resume-fw20_1259.pdf';
                alink.click();
            })
        })
    }

	return (
		<>
			<Box
				bg={useColorModeValue('gray.100', 'gray.900')}
				px={{ base: 6, lg: 10 }}
				pos='fixed'
				w={'full'}
				zIndex='100'
			>
				<Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
					<IconButton
						size={'md'}
						icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
						aria-label={'Open Menu'}
						display={{ md: 'none' }}
						onClick={isOpen ? onClose : onOpen}
					/>
					<HStack spacing={8} alignItems={'center'}>
						<Link
							to='Home'
							spy={true}
							smooth={true}
							offset={-100}
							duration={500}
						>
							<Text fontWeight={'bold'} fontSize='25px'>
								Tarun
							</Text>
						</Link>
						<HStack
							as={'nav'}
							spacing={4}
							display={{ base: 'none', md: 'flex' }}
						>
							{links.map((link) => (
								<Link
									key={link}
									to={`${link}`}
									spy={true}
									smooth={true}
									offset={-100}
									duration={500}
								>
									{link}
								</Link>
							))}
						</HStack>
					</HStack>
					<Flex alignItems={'center'}>
						<Stack direction={'row'} spacing={7}>
							<Button onClick={toggleColorMode}>
								{colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
							</Button>
						<Link
							_hover={{ textDecoration: 'none' }}
							target='_blank'
							href='https://drive.google.com/file/d/1FWONF3UHX3-f3Gd7DGkLCDQYl8k3aFhW/view?usp=sharing'
						>
							<Button
								variant={'solid'}
								colorScheme='teal'
								borderRadius={'full'}
								onClick={onButtonClick}
								>
								My Resume
							</Button>
						</Link>
							<Menu>
								<MenuButton
									as={Button}
									rounded={'full'}
									variant={'link'}
									cursor={'pointer'}
									minW={0}
								>
									<Avatar
										size={'sm'}
										src={
											'https://media-exp1.licdn.com/dms/image/C4E03AQF3THAIdQs4hA/profile-displayphoto-shrink_400_400/0/1593631237800?e=1671667200&v=beta&t=b4WLSL4VFxf6J5YoUwxEYXydIoQIZqANxASZPqjxDeI'
										}
									/>
								</MenuButton>
								<MenuList>
									<MenuItem>
										<RefLink
											_hover={{ textDecoration: 'none' }}
											target='_blank'
											href='https://drive.google.com/file/d/1FWONF3UHX3-f3Gd7DGkLCDQYl8k3aFhW/view?usp=sharing'
										>
											My Resume
										</RefLink>
									</MenuItem>
									<MenuItem>
										<RefLink
											_hover={{ textDecoration: 'none' }}
											target='_blank'
											href='https://github.com/tarunksao'
										>
											GitHub
										</RefLink>
									</MenuItem>
									<MenuDivider />
									<MenuItem>
										<RefLink
											_hover={{ textDecoration: 'none' }}
											target='_blank'
											href='https://www.linkedin.com/in/tarun-kumar-sao-3289181a5/'
										>
											LinkedIn
										</RefLink>
									</MenuItem>
								</MenuList>
							</Menu>
						</Stack>
					</Flex>
				</Flex>
				{isOpen ? (
					<Box pb={4} display={{ md: 'none' }}>
						<Stack as={'nav'} spacing={4}>
							{links.map((link) => (
								<Link
									key={link}
									to={`${link}`}
									spy={true}
									smooth={true}
									offset={-100}
									duration={500}
								>
									{link}
								</Link>
							))}
						</Stack>
					</Box>
				) : null}
			</Box>
		</>
	);
}
