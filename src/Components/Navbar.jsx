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
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon, ChevronDownIcon } from '@chakra-ui/icons';
import { Link } from 'react-scroll';

const links = [
	{name:'About Me', code:'about', className:'nav-link about'}, 
	{name:'Skills', code:'skills', className:'nav-link skills'}, 
	{name:'Experience', code:'experience', className:'nav-link experience'}, 
	{name:'Projects', code:'projects', className:'nav-link projects'}, 
	{name:'GitHub Stats', code:'github', className:'nav-link github'}, 
	{name:'Contact Me', code:'contact', className:'nav-link contact'}
];

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
				px={{ base: 4, lg: 10 }}
				pos='fixed'
				w={'full'}
				zIndex='100'
				id='nav-menu'
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
							className='nav-link home'
							to='home'
							spy={true}
							smooth={true}
							offset={-100}
							duration={500}
						>
							<Text cursor='pointer' fontWeight={'bold'} fontSize='25px' color='blue.500'>
								Tarun
							</Text>
						</Link>
						<HStack
							as={'nav'}
							spacing={4}
							display={{ base: 'none', md: 'flex' }}
							alignItems='center'
						>
							{links.map((link) => (
								<Link
									key={link.code}
									to={`${link.code}`}
									className={`${link.className}`}
									spy={true}
									smooth={true}
									offset={-100}
									duration={500}
								>
									<Text cursor='pointer' fontWeight='semibold'>
										{link.name}
									</Text>
								</Link>
							))}
						</HStack>
					</HStack>
					<Flex alignItems={'center'}>
						<Stack direction={'row'} spacing={4}>
							<Button onClick={toggleColorMode}>
								{colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
							</Button>
						<Link
							className='nav-link resume'
							_hover={{ textDecoration: 'none' }}
							target='_blank'
							href='https://drive.google.com/file/d/1FWONF3UHX3-f3Gd7DGkLCDQYl8k3aFhW/view?usp=sharing'
						>
							<Button
								variant={'solid'}
								colorScheme='teal'
								borderRadius={'full'}
								onClick={onButtonClick}
								fontSize={{base:'10px', lg:'16px'}}
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
											'https://avatars.githubusercontent.com/u/107460801?v=4'
										}
									/>
									<ChevronDownIcon />
								</MenuButton>
								<MenuList>
									<MenuItem>
										<RefLink
											className='nav-link home'
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
