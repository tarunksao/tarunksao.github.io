import { Flex, Tag } from '@chakra-ui/react';

export const TechStackTags = (arr) => {
	return (
		<>
			<Flex gap={2} mt={4} flexWrap='wrap'>
				{arr.arr.map((el) => (
					<Tag
						key={el}
						variant='solid'
						colorScheme='blue'
						size={{ base: 'sm', md: 'md' }}
					>
						{el}
					</Tag>
				))}
			</Flex>
		</>
	);
};

export const WorkTypeTags = (arr) => {
	return (
		<>
			<Flex gap={2}>
				{arr.arr.map((el) => (
					<Tag
						size={{ base: 'sm', md: 'md' }}
						key={el}
						variant='solid'
						colorScheme='teal'
					>
						{el}
					</Tag>
				))}
			</Flex>
		</>
	);
};
